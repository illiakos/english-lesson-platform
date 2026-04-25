import { useState } from 'react'
import type { HeroSection as HeroSectionType } from '../../types/lesson'

interface HeroSectionProps {
  section: HeroSectionType
}

export default function HeroSection({ section }: HeroSectionProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div>
      {/* ── Hero image banner ───────────────────────────────── */}
      <div className="relative h-52 w-full overflow-hidden sm:h-64 md:h-72">
        {!imageError ? (
          <img
            src={section.imageSrc}
            alt={section.title}
            onError={() => setImageError(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-orange-400 via-orange-300 to-green-400" />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
          <span className="mb-2 inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm">
            Level {section.level}
          </span>
          <h2 className="text-3xl font-extrabold text-white drop-shadow-md md:text-4xl">
            {section.emoji} {section.title}
          </h2>
          <p className="mt-1 text-sm text-white/80">{section.subtitle}</p>
        </div>
      </div>

      {/* ── Body ───────────────────────────────────────────── */}
      <div className="grid gap-5 p-5 md:grid-cols-3 md:p-7">

        {/* Goals */}
        <div className="md:col-span-2">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Lesson Goals
          </p>
          <ol className="space-y-2">
            {section.goals.map((goal, i) => (
              <li key={goal} className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[11px] font-bold text-orange-600">
                  {i + 1}
                </span>
                <span className="text-sm text-slate-700">{goal}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Word bank */}
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Word Bank
          </p>
          <div className="flex flex-wrap gap-2">
            {section.words.map((word) => (
              <span
                key={word}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold capitalize text-slate-700 ring-1 ring-slate-200 hover:bg-orange-50 hover:text-orange-700 hover:ring-orange-200 transition-colors cursor-default"
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Functional language */}
        <div className="md:col-span-3">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Functional Language
          </p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {section.functionalLanguage.map((line) => (
              <div
                key={line}
                className="flex items-start gap-2 rounded-xl bg-green-50 p-3 ring-1 ring-green-100"
              >
                <span className="mt-0.5 text-green-500">💬</span>
                <span className="text-sm italic text-slate-700">{line}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
