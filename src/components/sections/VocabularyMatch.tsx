import { useMemo, useState } from 'react'
import type { VocabularyMatchSection } from '../../types/lesson'

interface VocabularyMatchProps {
  section: VocabularyMatchSection
  isCompleted: boolean
  onComplete: (sectionId: string) => void
}

export default function VocabularyMatch({ section, onComplete, isCompleted }: VocabularyMatchProps) {
  const definitions = useMemo(
    () => [...section.items.map((i) => i.definition)].sort(() => Math.random() - 0.5),
    [section.items],
  )
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [checked, setChecked] = useState(false)

  const correctCount = section.items.filter(
    (item) => answers[item.word] === item.definition,
  ).length
  const allCorrect = correctCount === section.items.length

  const check = () => {
    setChecked(true)
    if (allCorrect) onComplete(section.id)
  }
  const reset = () => { setAnswers({}); setChecked(false) }

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>

      {/* ── Pairs ────────────────────────────────────────────── */}
      <div className="space-y-2.5">
        {section.items.map((item) => {
          const isCorrect = checked && answers[item.word] === item.definition
          const isWrong = checked && !!answers[item.word] && !isCorrect

          return (
            <div
              key={item.word}
              className={`grid grid-cols-[140px_1fr] items-center gap-3 rounded-2xl p-3 ring-1 transition-all sm:grid-cols-[160px_1fr] ${
                isCorrect ? 'bg-green-50 ring-green-300'
                : isWrong  ? 'bg-red-50  ring-red-300'
                :             'bg-slate-50 ring-slate-200'
              }`}
            >
              {/* Word pill */}
              <div className="flex items-center gap-2">
                {checked && (
                  <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${
                    isCorrect ? 'bg-green-600 text-white' : isWrong ? 'bg-red-500 text-white' : ''
                  }`}>
                    {isCorrect ? '✓' : isWrong ? '✕' : ''}
                  </span>
                )}
                <span className="rounded-xl bg-white px-3 py-1.5 text-sm font-bold text-slate-800 ring-1 ring-slate-200 capitalize">
                  {item.word}
                </span>
              </div>

              {/* Definition select */}
              <select
                value={answers[item.word] ?? ''}
                onChange={(e) => setAnswers((prev) => ({ ...prev, [item.word]: e.target.value }))}
                disabled={checked && isCorrect}
                className={`w-full rounded-xl border-0 bg-white px-3 py-2 text-sm ring-1 outline-none transition ${
                  isCorrect ? 'ring-green-300 text-green-800'
                  : isWrong  ? 'ring-red-300 text-red-800'
                  :             'ring-slate-200 text-slate-700 focus:ring-orange-400'
                }`}
              >
                <option value="">Choose a definition…</option>
                {definitions.map((def) => (
                  <option key={def} value={def}>{def}</option>
                ))}
              </select>
            </div>
          )
        })}
      </div>

      {/* ── Score bar ────────────────────────────────────────── */}
      {checked && (
        <div className="anim-slide flex items-center gap-3 rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200">
          <div className="flex gap-1">
            {section.items.map((_, i) => (
              <span
                key={i}
                className={`h-2.5 w-2.5 rounded-full ${i < correctCount ? 'bg-green-500' : 'bg-slate-300'}`}
              />
            ))}
          </div>
          <p className={`text-sm font-semibold ${allCorrect ? 'text-green-700' : 'text-slate-700'}`}>
            {allCorrect ? 'Perfect! All correct.' : `${correctCount} / ${section.items.length} correct`}
          </p>
        </div>
      )}

      {/* ── Buttons ──────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={check}
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-600 active:scale-95 transition-all"
        >
          Check answers
        </button>
        <button
          type="button"
          onClick={reset}
          className="rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-200 active:scale-95 transition-all"
        >
          Try again
        </button>
      </div>

      {isCompleted && (
        <p className="anim-slide flex items-center gap-2 text-sm font-bold text-green-700">
          <span className="rounded-full bg-green-100 px-2 py-0.5">✓ Section complete</span>
        </p>
      )}
    </div>
  )
}
