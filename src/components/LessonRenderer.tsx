import { useMemo, useState } from 'react'
import type { Lesson, LessonSection } from '../types/lesson'
import {
  clearLessonProgress,
  getLessonProgress,
  NON_TRACKABLE_TYPES,
  saveLessonProgress,
} from '../utils/progressStorage'
import { LevelBadge } from './common/Badge'
import ProgressBar from './common/ProgressBar'
import SectionCard from './common/SectionCard'
import AdviceCards from './sections/AdviceCards'
import CompanyMatch from './sections/CompanyMatch'
import DialogueReading from './sections/DialogueReading'
import EmailReading from './sections/EmailReading'
import FillGaps from './sections/FillGaps'
import GrammarPractice from './sections/GrammarPractice'
import GrammarTabs from './sections/GrammarTabs'
import HeroSection from './sections/HeroSection'
import ImageMatch from './sections/ImageMatch'
import ListeningTask from './sections/ListeningTask'
import PhraseBox from './sections/PhraseBox'
import PictureLabeling from './sections/PictureLabeling'
import QuizSelect from './sections/QuizSelect'
import RankingTask from './sections/RankingTask'
import ResultsChecklist from './sections/ResultsChecklist'
import SentenceBuilder from './sections/SentenceBuilder'
import SentenceMatch from './sections/SentenceMatch'
import TrueFalseQuiz from './sections/TrueFalseQuiz'
import VocabularyCategories from './sections/VocabularyCategories'
import VocabularyMatch from './sections/VocabularyMatch'
import WarmUpQuestions from './sections/WarmUpQuestions'
import WordList from './sections/WordList'
import WritingTask from './sections/WritingTask'

interface LessonRendererProps {
  lesson: Lesson
  onBack: () => void
}

interface SectionRendererProps {
  section: LessonSection
  isCompleted: boolean
  onComplete: (sectionId: string) => void
  progress: number
}

function renderSection({ section, isCompleted, onComplete, progress }: SectionRendererProps) {
  switch (section.type) {
    case 'hero':                return <HeroSection section={section} />
    case 'wordlist':            return <WordList section={section} />
    case 'grammar-tabs':        return <GrammarTabs section={section} />
    case 'warm-up-questions':   return <WarmUpQuestions section={section} onComplete={onComplete} />
    case 'vocabulary-match':    return <VocabularyMatch section={section} onComplete={onComplete} isCompleted={isCompleted} />
    case 'listening-task':      return <ListeningTask section={section} onComplete={onComplete} />
    case 'ranking-task':        return <RankingTask section={section} onComplete={onComplete} />
    case 'sentence-builder':    return <SentenceBuilder section={section} onComplete={onComplete} isCompleted={isCompleted} />
    case 'company-match':       return <CompanyMatch section={section} onComplete={onComplete} />
    case 'true-false-quiz':     return <TrueFalseQuiz section={section} onComplete={onComplete} />
    case 'grammar-practice':    return <GrammarPractice section={section} onComplete={onComplete} />
    case 'phrasebox':           return <PhraseBox section={section} onComplete={onComplete} />
    case 'email-reading':       return <EmailReading section={section} onComplete={onComplete} isCompleted={isCompleted} />
    case 'writing-task':        return <WritingTask section={section} onComplete={onComplete} />
    case 'results-checklist':   return <ResultsChecklist section={section} progress={progress} />
    case 'vocabulary-categories': return <VocabularyCategories section={section} />
    case 'picture-labeling':    return <PictureLabeling section={section} onComplete={onComplete} />
    case 'fill-gaps':           return <FillGaps section={section} onComplete={onComplete} />
    case 'quiz-select':         return <QuizSelect section={section} onComplete={onComplete} />
    case 'image-match':         return <ImageMatch section={section} onComplete={onComplete} />
    case 'dialogue-reading':    return <DialogueReading section={section} onComplete={onComplete} isCompleted={isCompleted} />
    case 'advice-cards':        return <AdviceCards section={section} onComplete={onComplete} isCompleted={isCompleted} />
    case 'sentence-match':      return <SentenceMatch section={section} onComplete={onComplete} isCompleted={isCompleted} />
    default:                    return null
  }
}

const SECTION_LABELS: Partial<Record<string, string>> = {
  wordlist: 'Vocabulary',
  'grammar-tabs': 'Grammar',
  'warm-up-questions': 'Warm-up',
  'vocabulary-match': 'Activity',
  'listening-task': 'Listening',
  'ranking-task': 'Activity',
  'sentence-builder': 'Activity',
  'company-match': 'Activity',
  'true-false-quiz': 'Reading',
  'grammar-practice': 'Grammar',
  phrasebox: 'Activity',
  'email-reading': 'Reading',
  'writing-task': 'Writing',
  'results-checklist': 'Results',
  'vocabulary-categories': 'Vocabulary',
  'picture-labeling': 'Activity',
  'fill-gaps': 'Activity',
  'quiz-select': 'Activity',
  'image-match': 'Activity',
  'dialogue-reading': 'Reading',
  'advice-cards': 'Speaking',
  'sentence-match': 'Activity',
}

function ArrowLeftIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 16 16" aria-hidden>
      <path
        d="M10 12L6 8l4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function LessonRenderer({ lesson, onBack }: LessonRendererProps) {
  const [completedSectionIds, setCompletedSectionIds] = useState<string[]>(
    () => getLessonProgress(lesson.id),
  )

  const trackableIds = useMemo(
    () => lesson.sections.filter((s) => !NON_TRACKABLE_TYPES.has(s.type)).map((s) => s.id),
    [lesson.sections],
  )

  const progress =
    trackableIds.length > 0
      ? Math.round((completedSectionIds.length / trackableIds.length) * 100)
      : 0

  const handleComplete = (sectionId: string) => {
    setCompletedSectionIds((prev) => {
      if (prev.includes(sectionId)) return prev
      const next = [...prev, sectionId]
      saveLessonProgress(lesson.id, next)
      return next
    })
  }

  const handleReset = () => {
    if (
      window.confirm(
        `Reset all progress for "${lesson.title}"? This cannot be undone.`,
      )
    ) {
      clearLessonProgress(lesson.id)
      setCompletedSectionIds([])
    }
  }

  let activityCounter = 0

  return (
    <div className="relative space-y-6 pb-16 anim-fade md:space-y-8">

      {/* ── Sticky top bar ─────────────────────────────────────── */}
      <div className="sticky top-0 z-30 -mx-4 sm:-mx-6 md:-mx-8">
        <div className="glass flex items-center gap-2 border-b border-stone-200/60 px-3 py-2.5 md:gap-3 md:px-8">

          {/* Back button */}
          <button
            type="button"
            onClick={onBack}
            className="flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-bold text-stone-600 transition-all hover:bg-orange-100/70 hover:text-orange-700 active:scale-95"
            aria-label="Back to lessons"
          >
            <ArrowLeftIcon />
            <span className="hidden sm:inline">Lessons</span>
          </button>

          <span className="hidden h-5 w-px shrink-0 bg-stone-300/60 sm:block" />

          {/* Lesson title (truncated) */}
          <span className="hidden min-w-0 flex-1 truncate text-sm font-bold text-stone-800 sm:block">
            {lesson.title}
          </span>

          <div className="flex flex-1 items-center gap-2 sm:flex-none sm:w-48 md:w-72">
            <span className="shrink-0 text-xs font-bold tabular-nums text-orange-600">
              {progress}%
            </span>
            <ProgressBar value={progress} size="sm" className="flex-1" />
            {progress === 100 && (
              <span className="shrink-0 text-sm anim-pop">🎉</span>
            )}
          </div>
        </div>
      </div>

      {/* ── Lesson header card ────────────────────────────────── */}
      <header className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-card ring-1 ring-stone-200/70 md:p-8 anim-fade-up">
        {/* Decorative gradient bar */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-orange-500 via-pink-400 to-violet-400"
        />
        {/* Subtle corner blur */}
        <div
          aria-hidden
          className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-200/40 blur-3xl"
        />

        <div className="relative flex flex-wrap items-start gap-3">
          <div className="flex-1 min-w-0">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-orange-500">
                English Lesson
              </span>
              <span className="h-1 w-1 rounded-full bg-stone-300" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                Lesson
              </span>
            </div>
            <h1 className="text-balance text-3xl font-black leading-[1.1] tracking-tight text-stone-900 md:text-4xl">
              {lesson.title}
            </h1>
            {lesson.topic && (
              <p className="mt-2 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-700 ring-1 ring-orange-100">
                {lesson.topic}
              </p>
            )}
          </div>
          <LevelBadge level={lesson.level} size="md" className="shrink-0" />
        </div>

        <div className="relative mt-5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-stone-500">
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-stone-400" fill="none" viewBox="0 0 16 16" aria-hidden>
              <rect x="2" y="2" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M5 8h6M5 5.5h6M5 10.5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="font-semibold text-stone-700">{trackableIds.length}</span> sections
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 16 16" aria-hidden>
              <path d="M14.293 4.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L6.586 10.586l6.293-6.293a1 1 0 011.414 0z"/>
            </svg>
            <span className="font-semibold text-stone-700">{completedSectionIds.length}</span> completed
          </span>
          {completedSectionIds.length > 0 && (
            <button
              type="button"
              onClick={handleReset}
              className="rounded-md px-1.5 py-0.5 text-xs text-stone-400 transition-colors hover:bg-red-50 hover:text-red-500"
            >
              Reset progress
            </button>
          )}
        </div>
      </header>

      {/* ── Sections ─────────────────────────────────────────── */}
      {lesson.sections.map((section, idx) => {
        const isCompleted = completedSectionIds.includes(section.id)
        const isTrackable = !NON_TRACKABLE_TYPES.has(section.type)
        const isHero = section.type === 'hero'

        if (isTrackable) activityCounter++

        const label = !isHero
          ? isTrackable
            ? `${SECTION_LABELS[section.type] ?? 'Activity'} ${activityCounter}`
            : (SECTION_LABELS[section.type] ?? '')
          : undefined

        return (
          <div
            key={section.id}
            id={`section-${section.id}`}
            className="anim-fade-up"
            style={{ animationDelay: `${Math.min(idx * 40, 240)}ms` }}
          >
            <SectionCard
              label={label}
              completed={isCompleted}
              noPadding={isHero}
            >
              {renderSection({
                section,
                isCompleted,
                onComplete: handleComplete,
                progress,
              })}
            </SectionCard>
          </div>
        )
      })}
    </div>
  )
}
