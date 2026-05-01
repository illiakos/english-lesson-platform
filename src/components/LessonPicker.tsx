import { useState } from 'react'
import type { Lesson } from '../types/lesson'
import { allLessons } from '../lessons/index'
import {
  clearLessonProgress,
  getLessonProgressPercent,
  getLessonTrackableCount,
} from '../utils/progressStorage'
import { LevelBadge, StatusBadge } from './common/Badge'
import Button from './common/Button'
import ImageWithFallback from './common/ImageWithFallback'
import ProgressBar from './common/ProgressBar'

interface LessonPickerProps {
  onSelectLesson: (lesson: Lesson) => void
}

/* ── Lesson card ──────────────────────────────────────────────────────────── */

interface CardProps {
  lesson: Lesson
  onSelect: () => void
}

function PlayIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <path d="M6.3 2.84A1.5 1.5 0 004 4.12v11.76a1.5 1.5 0 002.3 1.28l9.5-5.88a1.5 1.5 0 000-2.56L6.3 2.84z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 20 20" aria-hidden>
      <path
        d="M4 10l4 4 8-8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LessonCard({ lesson, onSelect }: CardProps) {
  const [percent, setPercent] = useState(() => getLessonProgressPercent(lesson))
  const total = getLessonTrackableCount(lesson)
  const isCompleted = percent === 100
  const hasProgress = percent > 0

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (window.confirm(`Reset all progress for "${lesson.title}"?`)) {
      clearLessonProgress(lesson.id)
      setPercent(0)
    }
  }

  return (
    <article
      onClick={onSelect}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect()}
      role="button"
      tabIndex={0}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-stone-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg hover:ring-orange-200"
    >
      {/* Cover image (letterboxed) */}
      <div className="relative h-52 shrink-0 overflow-hidden bg-stone-900/95">
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-linear-to-br from-stone-200 via-orange-50/40 to-stone-300 p-4">
          <ImageWithFallback
            src={lesson.coverImage ?? ''}
            alt={lesson.title}
            fallbackLabel={lesson.title}
            fallbackIcon="📚"
            className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105 drop-shadow-md"
          />
        </div>
        {/* Readable title area — only bottom band so the image stays clear */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[58%] bg-linear-to-t from-stone-950/92 via-stone-900/45 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-9 h-[45%] bg-linear-to-t from-orange-400/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Top badges */}
        <div className="absolute top-3 left-3 z-20 flex flex-wrap gap-1.5">
          <LevelBadge level={lesson.level} />
          {isCompleted && (
            <StatusBadge variant="green">
              <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" aria-hidden>
                <circle cx="6" cy="6" r="6" fill="#16a34a" />
                <path
                  d="M3.5 6l2 2 3-3"
                  stroke="#fff"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Completed
            </StatusBadge>
          )}
        </div>

        {/* Bottom title overlay */}
        <div className="absolute right-4 bottom-4 left-4 z-20">
          {lesson.topic && (
            <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-orange-200/90 drop-shadow">
              {lesson.topic}
            </p>
          )}
          <h2 className="text-balance text-xl font-extrabold leading-tight text-white drop-shadow-md">
            {lesson.title}
          </h2>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col p-5">
        {lesson.description && (
          <p className="line-clamp-2 text-sm leading-relaxed text-stone-500">
            {lesson.description}
          </p>
        )}

        {/* Activity count */}
        <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-stone-400">
          <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 16 16" aria-hidden>
            <rect x="2" y="2" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M5 8h6M5 5.5h6M5 10.5h3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span>{total} interactive activities</span>
        </div>

        {/* Progress section */}
        {hasProgress && (
          <div className="mt-4">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-xs font-bold tabular-nums text-stone-700">
                {percent}% complete
              </span>
              <button
                type="button"
                onClick={handleReset}
                className="rounded-md px-1.5 py-0.5 text-[11px] text-stone-400 transition-colors hover:bg-red-50 hover:text-red-500"
              >
                Reset
              </button>
            </div>
            <ProgressBar value={percent} size="sm" />
          </div>
        )}

        {/* CTA button */}
        <Button
          variant={isCompleted ? 'success' : 'primary'}
          size="md"
          className="mt-5 w-full"
          iconLeft={isCompleted ? <CheckIcon /> : <PlayIcon />}
        >
          {isCompleted ? 'Review lesson' : hasProgress ? 'Continue' : 'Start lesson'}
        </Button>
      </div>
    </article>
  )
}

/* ── Main picker ──────────────────────────────────────────────────────────── */

export default function LessonPicker({ onSelectLesson }: LessonPickerProps) {
  const totalActivities = allLessons.reduce(
    (sum, l) => sum + getLessonTrackableCount(l),
    0,
  )
  const completedLessons = allLessons.filter(
    (l) => getLessonProgressPercent(l) === 100,
  ).length

  return (
    <div className="space-y-10 pb-16 anim-fade">

      {/* ── Hero header ─────────────────────────────────────────── */}
      <header className="relative overflow-hidden rounded-3xl bg-linear-to-br from-orange-500 via-orange-400 to-pink-400 p-7 shadow-card-lg sm:p-10">
        {/* Decorative blurred blobs */}
        <div
          aria-hidden
          className="absolute -top-16 -right-12 h-56 w-56 rounded-full bg-yellow-300/40 blur-3xl anim-blob"
        />
        <div
          aria-hidden
          className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-pink-400/30 blur-3xl anim-blob"
          style={{ animationDelay: '4s' }}
        />
        {/* Subtle dot pattern */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm ring-1 ring-white/30">
            <span className="text-sm">✨</span>
            English Lesson Platform
          </div>
          <h1 className="mt-4 text-balance text-4xl font-black leading-[1.05] tracking-tight text-white drop-shadow-sm sm:text-5xl">
            Learn English with <br className="hidden sm:block" />
            <span className="bg-linear-to-r from-yellow-100 via-white to-yellow-100 bg-clip-text text-transparent">
              interactive lessons
            </span>
          </h1>
          <p className="mt-3 max-w-xl text-balance text-base text-white/90 sm:text-lg">
            Vocabulary, grammar, reading, writing — all in one beautiful, hands-on lesson.
          </p>

          {/* Stats pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            <div className="flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 text-sm font-semibold text-stone-700 shadow-sm">
              <span className="text-base">🎓</span>
              <span className="font-bold tabular-nums text-stone-900">{allLessons.length}</span>
              lessons
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 text-sm font-semibold text-stone-700 shadow-sm">
              <span className="text-base">✅</span>
              <span className="font-bold tabular-nums text-stone-900">{totalActivities}</span>
              activities
            </div>
            {completedLessons > 0 && (
              <div className="flex items-center gap-2 rounded-full bg-green-500 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm anim-pop">
                <span>🏆</span>
                <span className="font-bold tabular-nums">{completedLessons}</span>
                completed
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ── Lessons grid ───────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-stone-900">
              Choose a lesson
            </h2>
            <p className="mt-0.5 text-sm text-stone-500">
              Click any card to start.
            </p>
          </div>
          <span className="hidden text-[11px] font-bold uppercase tracking-[0.18em] text-stone-400 sm:block">
            {allLessons.length} available
          </span>
        </div>

        {allLessons.length === 0 ? (
          <div className="rounded-3xl bg-white p-12 text-center shadow-card ring-1 ring-stone-200">
            <div className="text-6xl anim-float">📝</div>
            <p className="mt-3 font-bold text-stone-700">No lessons yet</p>
            <p className="mt-1 text-sm text-stone-400">
              Add a lesson to{' '}
              <code className="rounded bg-stone-100 px-1.5 py-0.5 text-xs font-mono text-stone-600">
                src/lessons/index.ts
              </code>
            </p>
          </div>
        ) : (
          <div className="stagger grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {allLessons.map((lesson) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                onSelect={() => onSelectLesson(lesson)}
              />
            ))}
          </div>
        )}
      </section>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="rounded-2xl border border-stone-200/70 bg-white/40 px-5 py-4 text-center text-xs text-stone-400 backdrop-blur-sm">
        <p>
          Built with React · TypeScript · Tailwind ·{' '}
          <span className="text-stone-500">Progress saved in your browser</span>
        </p>
      </footer>
    </div>
  )
}
