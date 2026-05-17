import { useMemo, useState } from 'react'
import type { SentenceMatchSection } from '../../types/lesson'
import { assetUrl } from '../../utils/assetUrl'

interface Props {
  section: SentenceMatchSection
  isCompleted: boolean
  onComplete: (sectionId: string) => void
}

export default function SentenceMatch({ section, onComplete, isCompleted }: Props) {
  const shuffledAnswers = useMemo(
    () => [...section.items.map((i) => i.answer)].sort(() => Math.random() - 0.5),
    [section.items],
  )
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [checked, setChecked] = useState(false)
  const [imageError, setImageError] = useState(false)

  const correctCount = section.items.filter(
    (item, i) => answers[i] === item.answer,
  ).length
  const allCorrect = correctCount === section.items.length

  const check = () => {
    setChecked(true)
    if (allCorrect) onComplete(section.id)
  }
  const reset = () => {
    setAnswers({})
    setChecked(false)
  }

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>

      {section.imageSrc && (
        <div className="overflow-hidden rounded-2xl ring-1 ring-stone-200/70">
          {imageError ? (
            <div className="flex aspect-21/10 items-center justify-center bg-linear-to-br from-orange-100 via-white to-green-100">
              <div className="text-center">
                <div className="text-4xl font-black text-orange-500">Match</div>
                <p className="mt-1 text-sm font-bold text-slate-500">
                  Add image later
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

      <div className="space-y-2.5">
        {section.items.map((item, i) => {
          const isCorrect = checked && answers[i] === item.answer
          const isWrong = checked && !!answers[i] && !isCorrect

          return (
            <div
              key={i}
              className={`grid gap-3 rounded-2xl p-3 ring-1 transition-all md:grid-cols-[minmax(0,1fr)_minmax(0,260px)] md:items-start ${
                isCorrect ? 'bg-green-50 ring-green-300'
                : isWrong ? 'bg-red-50 ring-red-300'
                : 'bg-slate-50 ring-slate-200'
              }`}
            >
              <div className="flex gap-2">
                {checked && (
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${
                      isCorrect ? 'bg-green-600 text-white' : isWrong ? 'bg-red-500 text-white' : ''
                    }`}
                  >
                    {isCorrect ? '✓' : isWrong ? '✕' : ''}
                  </span>
                )}
                <p className="text-sm font-medium leading-relaxed text-slate-800">
                  <span className="mr-2 font-bold text-orange-600 tabular-nums">{i + 1}.</span>
                  {item.problem}
                </p>
              </div>

              <select
                value={answers[i] ?? ''}
                onChange={(e) => setAnswers((prev) => ({ ...prev, [i]: e.target.value }))}
                disabled={checked && isCorrect}
                className={`w-full rounded-xl border-0 bg-white px-3 py-2 text-sm ring-1 outline-none transition ${
                  isCorrect ? 'ring-green-300 text-green-800'
                  : isWrong ? 'ring-red-300 text-red-800'
                  : 'ring-slate-200 text-slate-700 focus:ring-orange-400'
                }`}
              >
                <option value="">Choose advice…</option>
                {shuffledAnswers.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </div>
          )
        })}
      </div>

      {checked && (
        <div className="anim-slide flex items-center gap-3 rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200">
          <div className="flex flex-wrap gap-1">
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
