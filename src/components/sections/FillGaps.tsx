import { useState } from 'react'
import type { FillGapsSection } from '../../types/lesson'

interface Props {
  section: FillGapsSection
  onComplete: (id: string) => void
}

function normalize(s: string) {
  return s.trim().toLowerCase().replace(/\s+/g, ' ')
}

export default function FillGaps({ section, onComplete }: Props) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [checked, setChecked] = useState(false)

  const results = section.questions.map((q, i) => ({
    correct: normalize(answers[i] ?? '') === normalize(q.answer),
    answered: !!(answers[i] ?? '').trim(),
  }))
  const correctCount = results.filter((r) => r.correct).length
  const allCorrect = correctCount === section.questions.length

  const check = () => {
    setChecked(true)
    if (allCorrect) onComplete(section.id)
  }

  const renderSentence = (sentence: string, index: number) => {
    const parts = sentence.split('___')
    const result = results[index]
    const isCorrect = checked && result.correct
    const isWrong = checked && result.answered && !result.correct

    return (
      <span className="leading-10">
        {parts[0]}
        <input
          value={answers[index] ?? ''}
          onChange={(e) => setAnswers((p) => ({ ...p, [index]: e.target.value }))}
          disabled={checked && isCorrect}
          placeholder="…"
          className={`mx-1 inline-block w-44 rounded-lg px-2 py-0.5 text-sm font-semibold ring-1 outline-none transition ${
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
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>
      <p className="text-sm text-slate-500">{section.instruction}</p>

      <div className="space-y-3">
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
                  className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    isCorrect
                      ? 'bg-green-600 text-white'
                      : isWrong
                      ? 'bg-red-400 text-white'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {isCorrect ? '✓' : isWrong ? '✕' : i + 1}
                </span>
                <div className="flex-1 text-sm text-slate-800">
                  {renderSentence(q.sentence, i)}
                  <span className="ml-1 text-xs text-slate-400 italic">{q.hint}</span>
                </div>
              </div>
              {isWrong && (
                <p className="mt-2 pl-9 text-xs font-semibold text-green-700">
                  ✓ {q.answer}
                </p>
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
            ? '🎉 All correct!'
            : `${correctCount} / ${section.questions.length} correct`}
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
          Reset
        </button>
      </div>
    </div>
  )
}
