import { useState } from 'react'
import type { PictureLabelingSection } from '../../types/lesson'
import { assetUrl } from '../../utils/assetUrl'

interface Props {
  section: PictureLabelingSection
  onComplete: (id: string) => void
}

export default function PictureLabeling({ section, onComplete }: Props) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [checked, setChecked] = useState(false)
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({})

  const correct = section.cards.filter((c, i) => answers[i] === c.answer).length
  const allCorrect = correct === section.cards.length

  const check = () => {
    setChecked(true)
    if (allCorrect) onComplete(section.id)
  }

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>
      <p className="text-sm text-slate-500">{section.instruction}</p>

      {/* Word bank */}
      <div>
        <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">
          Word bank
        </p>
        <div className="flex flex-wrap gap-2">
          {section.wordBank.map((w) => (
            <span
              key={w}
              className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-800 ring-1 ring-orange-200"
            >
              {w}
            </span>
          ))}
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {section.cards.map((card, i) => {
          const isCorrect = checked && answers[i] === card.answer
          const isWrong = checked && !!answers[i] && !isCorrect

          return (
            <div
              key={card.image}
              className={`overflow-hidden rounded-2xl ring-1 transition-all ${
                isCorrect ? 'ring-green-300' : isWrong ? 'ring-red-300' : 'ring-slate-200'
              }`}
            >
              {/* Image or placeholder */}
              {imgErrors[i] ? (
                <div className="flex aspect-4/3 w-full flex-col items-center justify-center gap-2 bg-linear-to-br from-orange-100 via-slate-50 to-purple-100 shadow-inner ring-1 ring-stone-200/50">
                  <span className="text-3xl">👗</span>
                  <span className="text-xs font-semibold text-slate-400">
                    clothes-{i + 1}.jpg
                  </span>
                </div>
              ) : (
                <div className="relative flex aspect-4/3 w-full items-center justify-center overflow-hidden bg-linear-to-br from-stone-100 via-orange-50/40 to-violet-50/40 p-3 shadow-inner ring-1 ring-stone-200/50">
                  <img
                    src={assetUrl(card.image)}
                    alt={`Clothes ${i + 1}`}
                    onError={() => setImgErrors((p) => ({ ...p, [i]: true }))}
                    className="max-h-full max-w-full object-contain"
                  />
                  {isCorrect && (
                    <div className="absolute inset-0 flex items-center justify-center bg-green-600/25">
                      <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-bold text-white shadow">
                        ✓ Correct
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Select */}
              <div
                className={`p-3 ${
                  isCorrect ? 'bg-green-50' : isWrong ? 'bg-red-50' : 'bg-white'
                }`}
              >
                <select
                  value={answers[i] ?? ''}
                  onChange={(e) =>
                    setAnswers((p) => ({ ...p, [i]: e.target.value }))
                  }
                  disabled={checked && isCorrect}
                  className="w-full rounded-xl bg-white px-3 py-2 text-sm ring-1 ring-slate-200 outline-none focus:ring-orange-400"
                >
                  <option value="">Choose label…</option>
                  {section.wordBank.map((w) => (
                    <option key={w} value={w}>
                      {w}
                    </option>
                  ))}
                </select>
                {isWrong && (
                  <p className="mt-1.5 text-xs font-semibold text-green-700">
                    ✓ {card.answer}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {checked && (
        <p
          className={`text-sm font-semibold ${
            allCorrect ? 'text-green-700' : 'text-slate-700'
          }`}
        >
          {allCorrect
            ? '🎉 All labels correct!'
            : `${correct} / ${section.cards.length} correct`}
        </p>
      )}

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
          onClick={() => {
            setAnswers({})
            setChecked(false)
          }}
          className="rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-200 active:scale-95 transition-all"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
