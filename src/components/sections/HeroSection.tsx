import type { HeroSection as HeroSectionType } from '../../types/lesson'
import { LevelBadge } from '../common/Badge'
import ImageWithFallback from '../common/ImageWithFallback'

interface HeroSectionProps {
  section: HeroSectionType
}

export default function HeroSection({ section }: HeroSectionProps) {
  return (
    <div>
      {/* ── Hero image banner (letterboxed — full image visible) ── */}
      <div className="relative min-h-60 w-full overflow-hidden bg-linear-to-b from-stone-200 via-stone-100 to-orange-50/80 sm:min-h-72 md:min-h-88">
        <div className="relative z-0 flex items-center justify-center px-5 py-8 sm:p-10">
          <ImageWithFallback
            src={section.imageSrc}
            alt={section.title}
            fallbackLabel={section.title}
            fallbackIcon={section.emoji ?? '📚'}
            className="max-h-[min(55vw,420px)] w-auto max-w-full object-contain drop-shadow-lg"
          />
        </div>

        {/* Bottom band only — keeps upper image bright and uncropped-looking */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[50%] bg-linear-to-t from-stone-950/90 via-stone-900/35 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-12 -right-12 z-5 h-44 w-44 rounded-full bg-orange-400/35 blur-3xl"
        />

        {/* Title overlay */}
        <div className="absolute right-0 bottom-0 left-0 z-20 p-6 md:p-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <LevelBadge level={section.level} size="md" className="bg-white/95 ring-white/40" />
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md ring-1 ring-white/25">
              <span>✨</span>
              Interactive lesson
            </span>
          </div>
          <h2 className="text-balance text-3xl font-black leading-tight text-white drop-shadow-md md:text-4xl">
            {section.emoji && <span className="mr-1.5">{section.emoji}</span>}
            {section.title}
          </h2>
          <p className="mt-1.5 max-w-2xl text-sm text-white/85 md:text-base">
            {section.subtitle}
          </p>
        </div>
      </div>

      {/* ── Body ───────────────────────────────────────────── */}
      <div className="grid gap-6 p-6 md:grid-cols-3 md:p-8">

        {/* Goals */}
        <div className="md:col-span-2">
          <p className="mb-3 flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-orange-500">
            <span className="text-base">🎯</span>
            Lesson Goals
          </p>
          <ol className="space-y-2.5">
            {section.goals.map((goal, i) => (
              <li
                key={goal}
                className="flex items-start gap-3 rounded-2xl bg-orange-50/60 p-3 ring-1 ring-orange-100/70"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-orange-400 to-orange-600 text-[11px] font-black text-white shadow-sm">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-stone-700">{goal}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Word bank */}
        <div>
          <p className="mb-3 flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-violet-500">
            <span className="text-base">📚</span>
            Word Bank
          </p>
          <div className="flex flex-wrap gap-1.5">
            {section.words.map((word) => (
              <span
                key={word}
                className="cursor-default rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 shadow-sm ring-1 ring-stone-200/70 transition-all hover:-translate-y-0.5 hover:bg-violet-50 hover:text-violet-700 hover:ring-violet-200"
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Functional language */}
        <div className="md:col-span-3">
          <p className="mb-3 flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-green-600">
            <span className="text-base">💬</span>
            Useful Phrases
          </p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {section.functionalLanguage.map((line) => (
              <div
                key={line}
                className="group flex items-start gap-2 rounded-2xl bg-linear-to-br from-green-50 to-emerald-50/60 p-3.5 ring-1 ring-green-100/80 transition-all hover:-translate-y-0.5 hover:shadow-card hover:ring-green-200"
              >
                <span className="mt-0.5 text-base text-green-500">"</span>
                <span className="text-sm font-medium italic leading-relaxed text-stone-700">
                  {line}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
