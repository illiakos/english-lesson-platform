import { useState } from 'react'
import type { QuizSelectSection } from '../../types/lesson'
import { assetUrl } from '../../utils/assetUrl'

interface Props {
  section: QuizSelectSection
  onComplete: (id: string) => void
}

function questionOptions(
  q: QuizSelectSection['questions'][number],
  section: QuizSelectSection,
): string[] {
  return q.options ?? section.options ?? []
}

export default function QuizSelect({ section, onComplete }: Props) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [checked, setChecked] = useState(false)
  const [imageError, setImageError] = useState(false)

  const allHaveOwnOptions =
    section.questions.length > 0 &&
    section.questions.every((q) => (q.options?.length ?? 0) > 0)
  const globalOptions = section.options ?? []
  const showGlobalChips = globalOptions.length > 0 && !allHaveOwnOptions

  const results = section.questions.map((q, i) => ({
    correct: answers[i] === q.answer,
    answered: !!answers[i],
  }))
  const correctCount = results.filter((r) => r.correct).length
  const allCorrect = correctCount === section.questions.length

  const renderSentence = (sentence: string, index: number) => {
    const q = section.questions[index]
    const opts = questionOptions(q, section)
    const result = results[index]
    const isCorrect = checked && result.correct
    const isWrong = checked && result.answered && !result.correct

    const selectEl = (
      <select
        value={answers[index] ?? ''}
        onChange={(e) => setAnswers((p) => ({ ...p, [index]: e.target.value }))}
        disabled={checked && isCorrect}
        className={`rounded-xl px-3 py-1.5 text-sm font-semibold ring-1 outline-none transition ${
          isCorrect
            ? 'bg-green-100 text-green-800 ring-green-300'
            : isWrong
            ? 'bg-red-50 text-red-800 ring-red-300'
            : 'bg-white ring-slate-200 focus:ring-orange-400'
        }`}
      >
        <option value="">Choose…</option>
        {opts.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    )

    if (!sentence.includes('___')) {
      return (
        <div className="space-y-2">
          <p className="text-sm italic text-slate-700">{sentence}</p>
          {selectEl}
          {q.options && q.options.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {q.options.map((o) => (
                <span
                  key={o}
                  className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-800 ring-1 ring-orange-200"
                >
                  {o}
                </span>
              ))}
            </div>
          )}
        </div>
      )
    }

    const parts = sentence.split('___')
    return (
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-1 text-sm text-slate-800">
          <span>{parts[0]}</span>
          {selectEl}
          <span>{parts[1] ?? ''}</span>
        </div>
        {q.options && q.options.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {q.options.map((o) => (
              <span
                key={o}
                className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-800 ring-1 ring-orange-200"
              >
                {o}
              </span>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>
      <p className="text-sm text-slate-500">{section.instruction}</p>

      {section.imageSrc && (
        <div className="overflow-hidden rounded-2xl ring-1 ring-stone-200/70">
          {imageError ? (
            <div className="flex aspect-21/10 items-center justify-center bg-linear-to-br from-orange-100 via-white to-green-100">
              <div className="text-center">
                <div className="text-4xl font-black text-orange-500">Quiz</div>
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

      {showGlobalChips && (
        <div className="flex flex-wrap gap-2">
          {globalOptions.map((o) => (
            <span
              key={o}
              className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-800 ring-1 ring-orange-200"
            >
              {o}
            </span>
          ))}
        </div>
      )}

      <div className="space-y-2.5">
        {section.questions.map((q, i) => {
          const result = results[i]
          const isCorrect = checked && result.correct
          const isWrong = checked && result.answered && !result.correct

          return (
            <div
              key={i}
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
                  {isCorrect ? '✓' : isWrong ? '✕' : i + 1}
                </span>
                <div className="flex-1">
                  {renderSentence(q.sentence, i)}
                  {isWrong && (
                    <p className="mt-1.5 text-xs font-semibold text-green-700">
                      ✓ {q.answer}
                    </p>
                  )}
                </div>
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
            ? '🎉 All correct!'
            : `${correctCount} / ${section.questions.length} correct`}
        </p>
      )}

      {checked && section.explanations && section.explanations.length > 0 && (
        <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Quick reminder
          </p>
          <div className="flex flex-wrap gap-2">
            {section.explanations.map((e) => (
              <div
                key={e.term}
                className="rounded-xl bg-white px-3 py-2 text-sm ring-1 ring-slate-200"
              >
                <span className="font-bold text-orange-600">{e.term}</span>
                <span className="text-slate-500"> = {e.meaning}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => {
            setChecked(true)
            if (allCorrect) onComplete(section.id)
          }}
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
          Reset
        </button>
      </div>
    </div>
  )
}
