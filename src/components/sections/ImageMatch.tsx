import { useMemo, useState } from 'react'
import type { ImageMatchSection } from '../../types/lesson'
import { assetUrl } from '../../utils/assetUrl'

interface Props {
  section: ImageMatchSection
  onComplete: (id: string) => void
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

export default function ImageMatch({ section, onComplete }: Props) {
  /* Shuffle image display order once at mount */
  const shuffledImages = useMemo(
    () => shuffle(section.pairs.map((p, i) => ({ ...p, originalIndex: i }))),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  const [answers, setAnswers] = useState<Record<number, number | ''>>(
    Object.fromEntries(section.pairs.map((_, i) => [i, ''])),
  )
  const [checked, setChecked] = useState(false)
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({})

  /* For question[i], the correct answer is the 1-based position of pair[i] in shuffledImages */
  const correctPositions = useMemo(
    () =>
      section.pairs.map((_, i) =>
        shuffledImages.findIndex((img) => img.originalIndex === i) + 1,
      ),
    [section.pairs, shuffledImages],
  )

  const results = section.pairs.map((_, i) => ({
    correct: answers[i] === correctPositions[i],
    answered: answers[i] !== '',
  }))
  const correctCount = results.filter((r) => r.correct).length
  const allCorrect = correctCount === section.pairs.length

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

      {/* Image gallery with numbers */}
      <div>
        <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">
          Pictures
        </p>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
          {shuffledImages.map((img, displayIdx) => (
            <div key={img.image} className="flex flex-col items-center gap-1">
              {imgErrors[displayIdx] ? (
                <div className="flex aspect-square w-full flex-col items-center justify-center rounded-xl bg-linear-to-br from-orange-100 to-slate-100 ring-1 ring-stone-200/70">
                  <span className="text-xl">🖼️</span>
                  <span className="text-[10px] text-slate-400">{img.label}</span>
                </div>
              ) : (
                <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl bg-linear-to-br from-stone-100 via-orange-50/35 to-stone-100 p-1.5 ring-1 ring-stone-200/70">
                  <img
                    src={assetUrl(img.image)}
                    alt={img.label}
                    onError={() =>
                      setImgErrors((p) => ({ ...p, [displayIdx]: true }))
                    }
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              )}
              <span className="rounded-full bg-slate-800 px-2 py-0.5 text-xs font-bold text-white">
                {displayIdx + 1}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Questions with selects */}
      <div className="space-y-2.5">
        {section.pairs.map((pair, i) => {
          const result = results[i]
          const isCorrect = checked && result.correct
          const isWrong = checked && result.answered && !result.correct

          return (
            <div
              key={pair.question}
              className={`flex items-center gap-3 rounded-2xl p-4 ring-1 transition-all ${
                isCorrect
                  ? 'bg-green-50 ring-green-200'
                  : isWrong
                  ? 'bg-red-50 ring-red-200'
                  : 'bg-slate-50 ring-slate-200'
              }`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  isCorrect
                    ? 'bg-green-600 text-white'
                    : isWrong
                    ? 'bg-red-400 text-white'
                    : 'bg-slate-200 text-slate-600'
                }`}
              >
                {isCorrect ? '✓' : isWrong ? '✕' : i + 1}
              </span>
              <span className="flex-1 text-sm font-semibold text-slate-800">
                {pair.question}
              </span>
              <select
                value={answers[i] ?? ''}
                onChange={(e) =>
                  setAnswers((p) => ({
                    ...p,
                    [i]: e.target.value === '' ? '' : Number(e.target.value),
                  }))
                }
                disabled={checked && isCorrect}
                className={`rounded-xl px-3 py-1.5 text-sm ring-1 outline-none transition ${
                  isCorrect
                    ? 'bg-green-100 text-green-800 ring-green-300'
                    : isWrong
                    ? 'bg-red-100 text-red-800 ring-red-300'
                    : 'bg-white ring-slate-200 focus:ring-orange-400'
                }`}
              >
                <option value="">Photo…</option>
                {shuffledImages.map((_, j) => (
                  <option key={j + 1} value={j + 1}>
                    Photo {j + 1}
                  </option>
                ))}
              </select>
              {isWrong && (
                <span className="text-xs font-semibold text-green-700">
                  → Photo {correctPositions[i]}
                </span>
              )}
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
            ? '🎉 All matched!'
            : `${correctCount} / ${section.pairs.length} correct`}
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
            setAnswers(Object.fromEntries(section.pairs.map((_, i) => [i, ''])))
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
