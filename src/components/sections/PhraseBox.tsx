import { useState } from 'react'
import type { PhraseBoxSection } from '../../types/lesson'

interface PhraseBoxProps {
  section: PhraseBoxSection
  onComplete: (sectionId: string) => void
}

export default function PhraseBox({ section, onComplete }: PhraseBoxProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [checked, setChecked] = useState(false)
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  const correct = section.cards.filter((card, i) => answers[i] === card.answer).length
  const allCorrect = correct === section.cards.length

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>
      <p className="text-sm text-slate-500">
        Look at each picture and choose the correct phrase.
      </p>

      {/* ── Cards grid ───────────────────────────────────────── */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {section.cards.map((card, index) => {
          const isCorrect = checked && answers[index] === card.answer
          const isWrong   = checked && !!answers[index] && !isCorrect

          return (
            <div
              key={card.image}
              className={`flex flex-col overflow-hidden rounded-2xl ring-1 transition-all ${
                isCorrect ? 'ring-green-300' : isWrong ? 'ring-red-300' : 'ring-slate-200'
              }`}
            >
              {/* Photo */}
              {imageErrors[index] ? (
                <div className="flex h-32 items-center justify-center bg-gradient-to-br from-orange-100 to-slate-100 text-xs font-semibold text-slate-400">
                  Picture {index + 1}
                </div>
              ) : (
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={card.image}
                    alt={`Phrase ${index + 1}`}
                    onError={() => setImageErrors((prev) => ({ ...prev, [index]: true }))}
                    className="h-full w-full object-cover"
                  />
                  {isCorrect && (
                    <div className="absolute inset-0 flex items-center justify-center bg-green-600/30">
                      <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-bold text-white">✓ Correct</span>
                    </div>
                  )}
                </div>
              )}

              {/* Select */}
              <div className={`p-3 ${isCorrect ? 'bg-green-50' : isWrong ? 'bg-red-50' : 'bg-white'}`}>
                <select
                  value={answers[index] ?? ''}
                  onChange={(e) => setAnswers((prev) => ({ ...prev, [index]: e.target.value }))}
                  className="w-full rounded-xl bg-white px-3 py-2 text-sm ring-1 ring-slate-200 outline-none focus:ring-orange-400"
                >
                  <option value="">Choose phrase…</option>
                  {section.options.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                {isWrong && (
                  <p className="mt-1.5 text-xs font-semibold text-green-700">
                    Answer: {card.answer}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Score ────────────────────────────────────────────── */}
      {checked && (
        <p className={`anim-slide text-sm font-semibold ${allCorrect ? 'text-green-700' : 'text-slate-700'}`}>
          {allCorrect ? '🎉 All phrases matched!' : `${correct} / ${section.cards.length} correct`}
        </p>
      )}

      {/* ── Buttons ──────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => { setChecked(true); if (allCorrect) onComplete(section.id) }}
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-600 active:scale-95 transition-all"
        >
          Check phrasebox
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
