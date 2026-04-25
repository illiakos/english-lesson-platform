import { useState } from 'react'
import type { CompanyMatchSection } from '../../types/lesson'

interface CompanyMatchProps {
  section: CompanyMatchSection
  onComplete: (sectionId: string) => void
}

export default function CompanyMatch({ section, onComplete }: CompanyMatchProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [checked, setChecked] = useState(false)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const correct = section.items.filter((item) => answers[item.company] === item.answer).length
  const allCorrect = correct === section.items.length

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>

      {/* ── Company cards grid ───────────────────────────────── */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {section.items.map((item) => {
          const isCorrect = checked && answers[item.company] === item.answer
          const isWrong = checked && !!answers[item.company] && !isCorrect

          return (
            <div
              key={item.company}
              className={`flex flex-col rounded-2xl p-4 ring-1 transition-all ${
                isCorrect ? 'bg-green-50 ring-green-300'
                : isWrong  ? 'bg-red-50 ring-red-300'
                :             'bg-slate-50 ring-slate-200'
              }`}
            >
              {/* Logo */}
              <div className="mb-3 flex h-20 items-center justify-center rounded-xl bg-white p-3 ring-1 ring-slate-100">
                {imageErrors[item.company] ? (
                  <span className="text-xs font-bold text-slate-400">{item.company}</span>
                ) : (
                  <img
                    src={item.logo}
                    alt={item.company}
                    onError={() => setImageErrors((prev) => ({ ...prev, [item.company]: true }))}
                    className="max-h-full max-w-full object-contain"
                  />
                )}
              </div>

              {/* Company name */}
              <p className="mb-2 text-sm font-bold text-slate-800">{item.company}</p>

              {/* Select */}
              <select
                value={answers[item.company] ?? ''}
                onChange={(e) => setAnswers((prev) => ({ ...prev, [item.company]: e.target.value }))}
                className={`w-full rounded-xl bg-white px-3 py-2 text-sm ring-1 outline-none transition ${
                  isCorrect ? 'ring-green-300 text-green-800'
                  : isWrong  ? 'ring-red-300 text-red-800'
                  :             'ring-slate-200 focus:ring-orange-400'
                }`}
              >
                <option value="">Choose type…</option>
                {section.options.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>

              {/* Inline badge */}
              {isCorrect && <p className="mt-1.5 text-xs font-semibold text-green-700">✓ Correct</p>}
              {isWrong   && <p className="mt-1.5 text-xs font-semibold text-red-600">✕ Try again</p>}
            </div>
          )
        })}
      </div>

      {/* ── Score + buttons ──────────────────────────────────── */}
      {checked && (
        <p className={`anim-slide text-sm font-semibold ${allCorrect ? 'text-green-700' : 'text-slate-700'}`}>
          {allCorrect ? '🎉 All correct!' : `${correct} / ${section.items.length} correct`}
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => { setChecked(true); if (allCorrect) onComplete(section.id) }}
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-600 active:scale-95 transition-all"
        >
          Check answers
        </button>
        <button
          type="button"
          onClick={() => { setAnswers({}); setChecked(false) }}
          className="rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-200 active:scale-95 transition-all"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
