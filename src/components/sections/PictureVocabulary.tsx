import { useState } from 'react'
import type { PictureVocabularySection } from '../../types/lesson'
import { assetUrl } from '../../utils/assetUrl'

interface Props {
  section: PictureVocabularySection
  onComplete: (id: string) => void
}

function normalize(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, ' ')
}

export default function PictureVocabulary({ section, onComplete }: Props) {
  const [labelAnswers, setLabelAnswers] = useState<Record<number, string>>({})
  const [gapAnswers, setGapAnswers] = useState<Record<number, string>>({})
  const [checked, setChecked] = useState(false)
  const [activeGap, setActiveGap] = useState<number | null>(null)
  const [imageError, setImageError] = useState(false)
  const [cardImageErrors, setCardImageErrors] = useState<Record<number, boolean>>({})

  const labelCorrect = section.cards.filter(
    (card, i) => labelAnswers[i] === card.answer,
  ).length
  const gapCorrect = section.gaps.filter(
    (gap, i) => normalize(gapAnswers[i] ?? '') === normalize(gap.answer),
  ).length
  const total = section.cards.length + section.gaps.length
  const score = labelCorrect + gapCorrect
  const allCorrect = score === total

  const check = () => {
    setChecked(true)
    if (allCorrect) onComplete(section.id)
  }

  const reset = () => {
    setLabelAnswers({})
    setGapAnswers({})
    setChecked(false)
  }

  const renderGapSentence = (sentence: string, index: number) => {
    const parts = sentence.split('___')
    const isCorrect =
      checked && normalize(gapAnswers[index] ?? '') === normalize(section.gaps[index].answer)
    const isWrong = checked && !!gapAnswers[index] && !isCorrect

    return (
      <span className="leading-10">
        {parts[0]}
        <input
          value={gapAnswers[index] ?? ''}
          onChange={(e) =>
            setGapAnswers((prev) => ({ ...prev, [index]: e.target.value }))
          }
          onFocus={() => setActiveGap(index)}
          disabled={checked && isCorrect}
          placeholder="..."
          className={`mx-1 inline-block w-44 rounded-lg px-2 py-0.5 text-sm font-semibold outline-none ring-1 transition ${
            isCorrect
              ? 'bg-green-100 text-green-800 ring-green-300'
              : isWrong
                ? 'bg-red-50 text-red-800 ring-red-300'
                : 'bg-white text-slate-800 ring-slate-300 focus:ring-orange-400'
          }`}
        />
        {parts[1] ?? ''}
      </span>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-extrabold text-green-700">
          {section.emoji} {section.title}
        </h2>
        <p className="mt-2 text-sm text-slate-500">{section.instruction}</p>
      </div>

      {section.imageSrc && (
        <div className="overflow-hidden rounded-2xl ring-1 ring-stone-200/70">
          {imageError ? (
            <div className="flex aspect-21/10 items-center justify-center bg-linear-to-br from-orange-100 via-white to-violet-100">
              <div className="text-center">
                <div className="text-4xl font-black text-orange-500">1-6</div>
                <p className="mt-1 text-sm font-bold text-slate-500">
                  Add picture set image
                </p>
              </div>
            </div>
          ) : (
            <div className="flex aspect-21/10 w-full items-center justify-center bg-linear-to-br from-stone-100 via-orange-50/35 to-purple-50/40 p-4 sm:p-6">
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

      <div>
        <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">
          Word bank
        </p>
        <div className="flex flex-wrap gap-2">
          {section.wordBank.map((word) => (
            <span
              key={word}
              className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-800 ring-1 ring-orange-200"
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {section.cards.map((card, i) => {
          const isCorrect = checked && labelAnswers[i] === card.answer
          const isWrong = checked && !!labelAnswers[i] && !isCorrect
          const hasCardImage = !!card.image && !cardImageErrors[i]

          return (
            <div
              key={`${card.label}-${i}`}
              className={`overflow-hidden rounded-2xl ring-1 transition-all ${
                isCorrect
                  ? 'bg-green-50 ring-green-300'
                  : isWrong
                    ? 'bg-red-50 ring-red-300'
                    : 'bg-white ring-slate-200'
              }`}
            >
              {hasCardImage ? (
                <div className="flex aspect-4/3 items-center justify-center bg-linear-to-br from-stone-100 via-orange-50/40 to-violet-50/40 p-3">
                  <img
                    src={assetUrl(card.image ?? '')}
                    alt={card.label}
                    onError={() =>
                      setCardImageErrors((prev) => ({ ...prev, [i]: true }))
                    }
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ) : (
                <div className="flex aspect-4/3 flex-col items-center justify-center bg-linear-to-br from-slate-100 via-white to-orange-50 p-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-black text-orange-600 shadow-sm ring-1 ring-orange-100">
                    {i + 1}
                  </span>
                  <span className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                    {card.label}
                  </span>
                </div>
              )}

              <div className="p-3">
                <select
                  value={labelAnswers[i] ?? ''}
                  onChange={(e) =>
                    setLabelAnswers((prev) => ({ ...prev, [i]: e.target.value }))
                  }
                  disabled={checked && isCorrect}
                  className="w-full rounded-xl bg-white px-3 py-2 text-sm ring-1 ring-slate-200 outline-none focus:ring-orange-400"
                >
                  <option value="">Choose label...</option>
                  {section.wordBank.map((word) => (
                    <option key={word} value={word}>
                      {word}
                    </option>
                  ))}
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

      <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
        <p className="text-sm font-bold text-slate-800">{section.gapInstruction}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {section.gapWordBank.map((word) => (
            <button
              key={word}
              type="button"
              onClick={() => {
                const i = activeGap ?? 0
                const current = (gapAnswers[i] ?? '').trim()
                setGapAnswers((prev) => ({
                  ...prev,
                  [i]: current ? `${current} ${word}` : word,
                }))
              }}
              className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-orange-800 ring-1 ring-orange-200 transition-all hover:bg-orange-100 active:scale-95"
            >
              {word}
            </button>
          ))}
        </div>

        <div className="mt-4 space-y-3">
          {section.gaps.map((gap, i) => {
            const isCorrect =
              checked && normalize(gapAnswers[i] ?? '') === normalize(gap.answer)
            const isWrong = checked && !!gapAnswers[i] && !isCorrect

            return (
              <div
                key={gap.sentence}
                className={`rounded-2xl p-3 ring-1 transition-all ${
                  isCorrect
                    ? 'bg-green-50 ring-green-200'
                    : isWrong
                      ? 'bg-red-50 ring-red-200'
                      : 'bg-white ring-slate-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-600">
                    {i + 1}
                  </span>
                  <div className="flex-1 text-sm text-slate-800">
                    {renderGapSentence(gap.sentence, i)}
                    {isWrong && (
                      <p className="mt-1 text-xs font-semibold text-green-700">
                        Answer: {gap.answer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {checked && (
        <p className={`text-sm font-semibold ${allCorrect ? 'text-green-700' : 'text-slate-700'}`}>
          {allCorrect ? 'All correct!' : `${score} / ${total} correct`}
        </p>
      )}

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={check}
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-orange-600 active:scale-95"
        >
          Check answers
        </button>
        <button
          type="button"
          onClick={reset}
          className="rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 transition-all hover:bg-slate-200 active:scale-95"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
