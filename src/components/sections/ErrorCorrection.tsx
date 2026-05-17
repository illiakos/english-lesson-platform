import { useState } from 'react'
import type { ErrorCorrectionSection } from '../../types/lesson'
import { assetUrl } from '../../utils/assetUrl'

interface Props {
  section: ErrorCorrectionSection
  onComplete: (id: string) => void
}

function normalize(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[’`]/g, "'")
    .replace(/[.,!?]/g, '')
    .replace(/\s+/g, ' ')
}

export default function ErrorCorrection({ section, onComplete }: Props) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [checked, setChecked] = useState(false)
  const [imageError, setImageError] = useState(false)

  const correctCount = section.tasks.filter(
    (task, i) => normalize(answers[i] ?? '') === normalize(task.answer),
  ).length
  const allCorrect = correctCount === section.tasks.length

  const check = () => {
    setChecked(true)
    if (allCorrect) onComplete(section.id)
  }

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-extrabold text-green-700">
          {section.emoji} {section.title}
        </h2>
        <p className="mt-2 text-sm text-slate-500">{section.instruction}</p>
      </div>

      {section.imageSrc && (
        <div className="overflow-hidden rounded-2xl ring-1 ring-stone-200/70">
          {imageError ? (
            <div className="flex aspect-21/10 items-center justify-center bg-linear-to-br from-orange-100 via-white to-green-100">
              <div className="text-center">
                <div className="text-4xl font-black text-orange-500">Fix</div>
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

      <div className="rounded-2xl bg-slate-900 p-4 text-sm text-slate-100">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">
          Example
        </p>
        <p className="line-through decoration-red-400 decoration-2">
          {section.example.sentence}
        </p>
        <p className="mt-2 font-semibold text-green-300">
          {section.example.correction}
        </p>
      </div>

      <div className="space-y-3">
        {section.tasks.map((task, i) => {
          const isCorrect =
            checked && normalize(answers[i] ?? '') === normalize(task.answer)
          const isWrong = checked && !!answers[i] && !isCorrect

          return (
            <div
              key={task.sentence}
              className={`rounded-2xl p-4 ring-1 transition-all ${
                isCorrect
                  ? 'bg-green-50 ring-green-200'
                  : isWrong
                    ? 'bg-red-50 ring-red-200'
                    : 'bg-slate-50 ring-slate-200'
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    isCorrect
                      ? 'bg-green-600 text-white'
                      : isWrong
                        ? 'bg-red-400 text-white'
                        : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {isCorrect ? 'OK' : isWrong ? 'X' : i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-800">
                    {task.sentence}
                  </p>
                  <input
                    value={answers[i] ?? ''}
                    onChange={(e) =>
                      setAnswers((prev) => ({ ...prev, [i]: e.target.value }))
                    }
                    disabled={checked && isCorrect}
                    placeholder="Write the corrected sentence..."
                    className="mt-2 w-full rounded-xl bg-white px-3 py-2 text-sm ring-1 ring-slate-200 outline-none transition focus:ring-orange-400"
                  />
                  {isWrong && (
                    <p className="mt-2 text-xs font-semibold text-green-700">
                      Answer: {task.answer}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {checked && (
        <p className={`text-sm font-semibold ${allCorrect ? 'text-green-700' : 'text-slate-700'}`}>
          {allCorrect ? 'All corrections are right.' : `${correctCount} / ${section.tasks.length} correct`}
        </p>
      )}

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={check}
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-orange-600 active:scale-95"
        >
          Check corrections
        </button>
        <button
          type="button"
          onClick={() => {
            setAnswers({})
            setChecked(false)
          }}
          className="rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 transition-all hover:bg-slate-200 active:scale-95"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
