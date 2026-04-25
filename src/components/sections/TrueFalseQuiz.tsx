import { useState } from 'react'
import type { TrueFalseQuizSection } from '../../types/lesson'

interface TrueFalseQuizProps {
  section: TrueFalseQuizSection
  onComplete: (sectionId: string) => void
}

export default function TrueFalseQuiz({ section, onComplete }: TrueFalseQuizProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [checked, setChecked] = useState(false)

  const correct = section.statements.filter((item, i) => String(item.answer) === answers[i]).length
  const allCorrect = correct === section.statements.length

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>

      {/* ── Statement cards ──────────────────────────────────── */}
      <div className="space-y-3">
        {section.statements.map((item, index) => {
          const selected = answers[index]
          const isCorrect = checked && String(item.answer) === selected
          const isWrong   = checked && !!selected && !isCorrect

          return (
            <div
              key={item.statement}
              className={`rounded-2xl p-4 ring-1 transition-all ${
                isCorrect ? 'bg-green-50 ring-green-300'
                : isWrong  ? 'bg-red-50 ring-red-300'
                :             'bg-slate-50 ring-slate-200'
              }`}
            >
              <div className="mb-3 flex items-start gap-3">
                {checked && (
                  <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    isCorrect ? 'bg-green-600 text-white' : isWrong ? 'bg-red-500 text-white' : ''
                  }`}>
                    {isCorrect ? '✓' : isWrong ? '✕' : ''}
                  </span>
                )}
                <p className="font-semibold text-slate-800">{item.statement}</p>
              </div>

              {/* True / False buttons */}
              <div className="flex gap-2">
                {(['true', 'false'] as const).map((value) => {
                  const isSelected = selected === value
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => !checked && setAnswers((prev) => ({ ...prev, [index]: value }))}
                      className={`flex-1 rounded-xl py-2 text-sm font-bold transition-all active:scale-95 ${
                        isSelected && !checked ? 'bg-orange-500 text-white shadow-sm'
                        : isSelected && isCorrect ? 'bg-green-600 text-white'
                        : isSelected && isWrong   ? 'bg-red-500 text-white'
                        : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-slate-300'
                      }`}
                    >
                      {value === 'true' ? '✓ True' : '✕ False'}
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Score ────────────────────────────────────────────── */}
      {checked && (
        <p className={`anim-slide text-sm font-semibold ${allCorrect ? 'text-green-700' : 'text-slate-700'}`}>
          {allCorrect ? '🎉 All correct!' : `${correct} / ${section.statements.length} correct`}
        </p>
      )}

      {/* ── Buttons ──────────────────────────────────────────── */}
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
