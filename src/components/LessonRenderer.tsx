import { useMemo, useState } from 'react'
import type { Lesson, LessonSection } from '../types/lesson'
import CompanyMatch from './sections/CompanyMatch'
import EmailReading from './sections/EmailReading'
import GrammarPractice from './sections/GrammarPractice'
import GrammarTabs from './sections/GrammarTabs'
import HeroSection from './sections/HeroSection'
import ListeningTask from './sections/ListeningTask'
import PhraseBox from './sections/PhraseBox'
import RankingTask from './sections/RankingTask'
import ResultsChecklist from './sections/ResultsChecklist'
import SentenceBuilder from './sections/SentenceBuilder'
import TrueFalseQuiz from './sections/TrueFalseQuiz'
import VocabularyMatch from './sections/VocabularyMatch'
import WarmUpQuestions from './sections/WarmUpQuestions'
import WordList from './sections/WordList'
import WritingTask from './sections/WritingTask'

interface LessonRendererProps {
  lesson: Lesson
}

interface SectionRendererProps {
  section: LessonSection
  isCompleted: boolean
  onComplete: (sectionId: string) => void
  progress: number
}

const NON_TRACKABLE = new Set(['hero', 'wordlist', 'grammar-tabs', 'results-checklist', 'writing-task'])

function renderSection({ section, isCompleted, onComplete, progress }: SectionRendererProps) {
  switch (section.type) {
    case 'hero':           return <HeroSection section={section} />
    case 'wordlist':       return <WordList section={section} />
    case 'grammar-tabs':   return <GrammarTabs section={section} />
    case 'warm-up-questions':
      return <WarmUpQuestions section={section} onComplete={onComplete} />
    case 'vocabulary-match':
      return <VocabularyMatch section={section} onComplete={onComplete} isCompleted={isCompleted} />
    case 'listening-task':
      return <ListeningTask section={section} onComplete={onComplete} />
    case 'ranking-task':
      return <RankingTask section={section} onComplete={onComplete} />
    case 'sentence-builder':
      return <SentenceBuilder section={section} onComplete={onComplete} isCompleted={isCompleted} />
    case 'company-match':
      return <CompanyMatch section={section} onComplete={onComplete} />
    case 'true-false-quiz':
      return <TrueFalseQuiz section={section} onComplete={onComplete} />
    case 'grammar-practice':
      return <GrammarPractice section={section} onComplete={onComplete} />
    case 'phrasebox':
      return <PhraseBox section={section} onComplete={onComplete} />
    case 'email-reading':
      return <EmailReading section={section} onComplete={onComplete} isCompleted={isCompleted} />
    case 'writing-task':
      return <WritingTask section={section} />
    case 'results-checklist':
      return <ResultsChecklist section={section} progress={progress} />
    default:
      return null
  }
}

/* ── Section number label for non-hero sections ─────────────────── */
const SECTION_LABELS: Partial<Record<string, string>> = {
  wordlist:           'Vocabulary',
  'grammar-tabs':     'Grammar',
  'warm-up-questions':'Warm-up',
  'vocabulary-match': 'Activity',
  'listening-task':   'Listening',
  'ranking-task':     'Activity',
  'sentence-builder': 'Activity',
  'company-match':    'Activity',
  'true-false-quiz':  'Reading',
  'grammar-practice': 'Grammar',
  phrasebox:          'Activity',
  'email-reading':    'Reading',
  'writing-task':     'Writing',
  'results-checklist':'Results',
}

export default function LessonRenderer({ lesson }: LessonRendererProps) {
  const [completedSectionIds, setCompletedSectionIds] = useState<string[]>([])

  const trackableIds = useMemo(
    () => lesson.sections.filter((s) => !NON_TRACKABLE.has(s.type)).map((s) => s.id),
    [lesson.sections],
  )

  const progress = trackableIds.length > 0
    ? Math.round((completedSectionIds.length / trackableIds.length) * 100)
    : 0

  const handleComplete = (sectionId: string) => {
    setCompletedSectionIds((prev) => prev.includes(sectionId) ? prev : [...prev, sectionId])
  }

  /* activity counter (only trackable, non-hero sections) */
  let activityCounter = 0

  return (
    <div className="space-y-5 pb-16">

      {/* ── Sticky progress strip ─────────────────────────────── */}
      <div className="sticky top-0 z-20 -mx-4 md:-mx-8">
        <div className="flex items-center gap-3 bg-white/80 px-4 py-2.5 backdrop-blur-md shadow-sm md:px-8">
          <span className="shrink-0 text-xs font-semibold text-orange-500 uppercase tracking-wide">
            Progress
          </span>
          <div className="relative h-2.5 flex-1 overflow-hidden rounded-full bg-slate-100">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="shrink-0 text-xs font-bold text-slate-700 tabular-nums">{progress}%</span>
        </div>
      </div>

      {/* ── Lesson header card ────────────────────────────────── */}
      <header className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
        <div className="flex flex-wrap items-start gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-1">
              English Lesson
            </p>
            <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl leading-tight">
              {lesson.title}
            </h1>
          </div>
          <span className="shrink-0 rounded-full bg-green-100 px-4 py-1.5 text-sm font-bold text-green-700 ring-1 ring-green-200">
            Level {lesson.level}
          </span>
        </div>
        <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
          <span>{trackableIds.length} interactive sections</span>
          <span>·</span>
          <span>{completedSectionIds.length} completed</span>
        </div>
      </header>

      {/* ── Sections ─────────────────────────────────────────── */}
      {lesson.sections.map((section) => {
        const isCompleted = completedSectionIds.includes(section.id)
        const isTrackable = !NON_TRACKABLE.has(section.type)
        const isHero = section.type === 'hero'

        if (isTrackable) activityCounter++

        return (
          <section
            key={section.id}
            className="group relative rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 overflow-hidden"
          >
            {/* section type label strip */}
            {!isHero && (
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-2.5 md:px-6">
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                  {isTrackable ? `${SECTION_LABELS[section.type] ?? 'Activity'} ${activityCounter}` : SECTION_LABELS[section.type] ?? ''}
                </span>
                {isCompleted && (
                  <span className="flex items-center gap-1.5 rounded-full bg-green-100 px-2.5 py-0.5 text-[11px] font-bold text-green-700">
                    <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                      <circle cx="6" cy="6" r="6" fill="#16a34a"/>
                      <path d="M3.5 6l2 2 3-3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Completed
                  </span>
                )}
              </div>
            )}

            <div className={isHero ? '' : 'p-5 md:p-6'}>
              {renderSection({ section, isCompleted, onComplete: handleComplete, progress })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
