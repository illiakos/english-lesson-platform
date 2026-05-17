import { useState } from 'react'
import type { ResultsChecklistSection } from '../../types/lesson'
import { assetUrl } from '../../utils/assetUrl'

interface ResultsChecklistProps {
  section: ResultsChecklistSection
  progress: number
}

const STARS = ['⭐', '⭐⭐', '⭐⭐⭐']

function starRating(progress: number) {
  if (progress >= 90) return STARS[2]
  if (progress >= 60) return STARS[1]
  if (progress > 0)   return STARS[0]
  return '—'
}

export default function ResultsChecklist({ section, progress }: ResultsChecklistProps) {
  const [imageError, setImageError] = useState(false)
  const completedCount = Math.round((progress / 100) * section.checklist.length)

  return (
    <div className="space-y-6">
      {/* ── Header ───────────────────────────────────────────── */}
      <div className="text-center">
        <div className="mb-1 text-5xl">{progress >= 50 ? '🎉' : '📚'}</div>
        <h2 className="text-2xl font-extrabold text-green-700">{section.emoji} {section.title}</h2>
        <p className="mt-1 text-sm text-slate-500">Here is what you practised in this lesson</p>
      </div>

      {section.imageSrc && (
        <div className="overflow-hidden rounded-2xl ring-1 ring-stone-200/70">
          {imageError ? (
            <div className="flex aspect-21/10 items-center justify-center bg-linear-to-br from-green-100 via-white to-orange-100">
              <div className="text-center">
                <div className="text-4xl font-black text-green-600">Done</div>
                <p className="mt-1 text-sm font-bold text-slate-500">
                  Add final image later
                </p>
              </div>
            </div>
          ) : (
            <div className="flex aspect-21/10 w-full items-center justify-center bg-linear-to-br from-stone-100 via-green-50/40 to-orange-50/40 p-4 sm:p-6">
              <img
                src={assetUrl(section.imageSrc)}
                alt={section.title}
                onError={() => setImageError(true)}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          )}
        </div>
      )}

      {/* ── Big progress circle ──────────────────────────────── */}
      <div className="flex flex-col items-center gap-2">
        <div className="relative flex h-28 w-28 items-center justify-center">
          <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="44" fill="none" stroke="#e2e8f0" strokeWidth="10" />
            <circle
              cx="50" cy="50" r="44"
              fill="none"
              stroke={progress >= 70 ? '#16a34a' : '#f97316'}
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 44}`}
              strokeDashoffset={`${2 * Math.PI * 44 * (1 - progress / 100)}`}
              style={{ transition: 'stroke-dashoffset 1s ease' }}
            />
          </svg>
          <span className="text-2xl font-extrabold text-slate-800">{progress}%</span>
        </div>
        <p className="text-lg font-bold text-slate-700">{starRating(progress)}</p>
        <p className="text-sm text-slate-500">
          {progress === 100
            ? 'Lesson fully completed! Well done!'
            : `${completedCount} of ${section.checklist.length} goals reached`}
        </p>
      </div>

      {/* ── Checklist ────────────────────────────────────────── */}
      <div>
        <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">
          Now you can…
        </p>
        <ul className="space-y-2.5">
          {section.checklist.map((item, index) => {
            const done = index < completedCount
            return (
              <li
                key={item}
                className={`flex items-center gap-3 rounded-2xl p-4 ring-1 transition-all ${
                  done ? 'bg-green-50 ring-green-200' : 'bg-slate-50 ring-slate-200'
                }`}
              >
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                  done ? 'bg-green-600 text-white' : 'bg-slate-200 text-slate-500'
                }`}>
                  {done ? '✓' : '·'}
                </span>
                <span className={`text-sm font-semibold ${done ? 'text-green-800' : 'text-slate-600'}`}>
                  {item}
                </span>
              </li>
            )
          })}
        </ul>
      </div>

      {/* ── Progress bar ─────────────────────────────────────── */}
      <div>
        <div className="mb-1.5 flex items-center justify-between text-xs font-semibold text-slate-500">
          <span>Overall progress</span>
          <span>{progress}%</span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-3 rounded-full bg-gradient-to-r from-orange-400 to-green-500 transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {progress === 100 && (
        <div className="anim-pop rounded-2xl bg-gradient-to-r from-orange-50 to-green-50 p-5 text-center ring-1 ring-orange-200">
          <p className="text-xl font-extrabold text-slate-800">🏆 Amazing work!</p>
          <p className="mt-1 text-sm text-slate-600">You completed every section of this lesson. Well done!</p>
        </div>
      )}
    </div>
  )
}
