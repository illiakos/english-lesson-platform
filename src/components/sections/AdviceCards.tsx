import { useState } from 'react'
import type { AdviceCardsSection } from '../../types/lesson'

interface Props {
  section: AdviceCardsSection
  onComplete: (id: string) => void
  isCompleted: boolean
}

const CARD_COLORS = [
  { card: 'bg-blue-50 ring-blue-200', badge: 'bg-blue-100 text-blue-700', btn: 'bg-blue-600 hover:bg-blue-700' },
  { card: 'bg-purple-50 ring-purple-200', badge: 'bg-purple-100 text-purple-700', btn: 'bg-purple-600 hover:bg-purple-700' },
  { card: 'bg-orange-50 ring-orange-200', badge: 'bg-orange-100 text-orange-700', btn: 'bg-orange-500 hover:bg-orange-600' },
  { card: 'bg-green-50 ring-green-200', badge: 'bg-green-100 text-green-700', btn: 'bg-green-600 hover:bg-green-700' },
]

export default function AdviceCards({ section, onComplete, isCompleted }: Props) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showSamples, setShowSamples] = useState<Record<number, boolean>>({})

  const hasAnyAnswer = Object.values(answers).some((v) => v.trim().length > 0)

  const toggleSample = (i: number) =>
    setShowSamples((p) => ({ ...p, [i]: !p[i] }))

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>

      {/* Functional language reference */}
      <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">
          Useful phrases
        </p>
        <div className="flex flex-wrap gap-2">
          {section.functionalLanguage.map((phrase) => (
            <span
              key={phrase}
              className="rounded-full bg-white px-3 py-1 text-xs font-semibold italic text-slate-700 ring-1 ring-slate-200"
            >
              {phrase}
            </span>
          ))}
        </div>
      </div>

      {/* Situation cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {section.cards.map((card, i) => {
          const colors = CARD_COLORS[i % CARD_COLORS.length]
          const hasSample = showSamples[i]
          const hasAnswer = (answers[i] ?? '').trim().length > 0

          return (
            <div
              key={i}
              className={`flex flex-col gap-3 rounded-2xl p-4 ring-1 ${colors.card}`}
            >
              <div className="flex items-start gap-2">
                <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-bold ${colors.badge}`}>
                  Situation {i + 1}
                </span>
              </div>
              <p className="font-semibold text-slate-800 leading-snug">
                {card.situation}
              </p>

              <textarea
                value={answers[i] ?? ''}
                onChange={(e) =>
                  setAnswers((p) => ({ ...p, [i]: e.target.value }))
                }
                placeholder="Type your advice here…"
                rows={3}
                className="w-full resize-none rounded-xl bg-white px-3 py-2.5 text-sm text-slate-800 ring-1 ring-slate-200 outline-none placeholder:text-slate-400 focus:ring-orange-400 transition"
              />

              {hasAnswer && !hasSample && (
                <p className="text-xs font-semibold text-green-600">✓ Good answer!</p>
              )}

              {hasSample && (
                <div className="rounded-xl bg-white p-3 ring-1 ring-green-200">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-green-600 mb-1">
                    Sample answer
                  </p>
                  <p className="text-sm italic text-slate-700">{card.sampleAnswer}</p>
                </div>
              )}

              <button
                type="button"
                onClick={() => toggleSample(i)}
                className={`self-start rounded-xl px-4 py-1.5 text-xs font-bold text-white transition-all active:scale-95 ${colors.btn}`}
              >
                {hasSample ? 'Hide sample' : 'Show sample'}
              </button>
            </div>
          )
        })}
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => {
            if (hasAnyAnswer) onComplete(section.id)
          }}
          disabled={!hasAnyAnswer}
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 active:scale-95 transition-all"
        >
          Mark as done ✓
        </button>
      </div>

      {isCompleted && (
        <p className="rounded-xl bg-green-50 px-4 py-2.5 text-sm font-bold text-green-700 ring-1 ring-green-200">
          ✓ Advice section completed
        </p>
      )}
    </div>
  )
}
