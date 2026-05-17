import { useState } from 'react'
import type { DialogueGapFillSection } from '../../types/lesson'
import { assetUrl } from '../../utils/assetUrl'

interface Props {
  section: DialogueGapFillSection
  onComplete: (id: string) => void
}

export default function DialogueGapFill({ section, onComplete }: Props) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [checked, setChecked] = useState(false)
  const [imageError, setImageError] = useState(false)

  const characterMap = Object.fromEntries(
    section.characters.map((character) => [character.name, character.colorClass]),
  )
  const correctCount = section.answers.filter((answer, i) => answers[i] === answer).length
  const allCorrect = correctCount === section.answers.length

  const check = () => {
    setChecked(true)
    if (allCorrect) onComplete(section.id)
  }

  const renderLineText = (text: string, startGapIndex: number) => {
    const parts = text.split('___')
    let localGapIndex = startGapIndex

    return parts.map((part, partIndex) => {
      if (partIndex === parts.length - 1) return <span key={partIndex}>{part}</span>

      const gapIndex = localGapIndex
      localGapIndex += 1
      const isCorrect = checked && answers[gapIndex] === section.answers[gapIndex]
      const isWrong = checked && !!answers[gapIndex] && !isCorrect

      return (
        <span key={partIndex}>
          {part}
          <select
            value={answers[gapIndex] ?? ''}
            onChange={(e) =>
              setAnswers((prev) => ({ ...prev, [gapIndex]: e.target.value }))
            }
            disabled={checked && isCorrect}
            className={`mx-1 max-w-full rounded-lg px-2 py-1 text-xs font-bold outline-none ring-1 transition ${
              isCorrect
                ? 'bg-green-100 text-green-800 ring-green-300'
                : isWrong
                  ? 'bg-red-50 text-red-800 ring-red-300'
                  : 'bg-white text-slate-800 ring-slate-300 focus:ring-orange-400'
            }`}
          >
            <option value="">...</option>
            {section.wordBank.map((word) => (
              <option key={word} value={word}>
                {word}
              </option>
            ))}
          </select>
        </span>
      )
    })
  }

  let gapCursor = 0

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
            <div className="flex aspect-21/10 items-center justify-center bg-linear-to-br from-blue-100 via-white to-green-100">
              <div className="text-center">
                <div className="text-4xl font-black text-green-600">Chat</div>
                <p className="mt-1 text-sm font-bold text-slate-500">
                  Add dialogue image
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

      <div className="space-y-3">
        {section.lines.map((line, lineIndex) => {
          const isFirstCharacter = line.speaker === section.characters[0]?.name
          const colorClass = characterMap[line.speaker] ?? 'bg-slate-100 text-slate-800'
          const lineStartGap = gapCursor
          gapCursor += (line.text.match(/___/g) ?? []).length

          return (
            <div
              key={`${line.speaker}-${lineIndex}`}
              className={`flex items-end gap-2 ${
                isFirstCharacter ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${
                  isFirstCharacter ? 'bg-orange-500' : 'bg-green-600'
                }`}
              >
                {line.speaker[0]}
              </div>

              <div
                className={`flex max-w-[82%] flex-col ${
                  isFirstCharacter ? 'items-start' : 'items-end'
                }`}
              >
                <span
                  className={`mb-1 text-[10px] font-bold uppercase tracking-wide ${
                    isFirstCharacter ? 'text-orange-600' : 'text-green-600'
                  }`}
                >
                  {line.speaker}
                </span>
                <div
                  className={`rounded-2xl px-4 py-2.5 text-sm leading-8 ring-1 ${colorClass} ${
                    isFirstCharacter ? 'rounded-tl-sm' : 'rounded-tr-sm'
                  }`}
                >
                  {renderLineText(line.text, lineStartGap)}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {checked && (
        <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
          <p className={`text-sm font-semibold ${allCorrect ? 'text-green-700' : 'text-slate-700'}`}>
            {allCorrect
              ? 'All dialogue gaps are correct.'
              : `${correctCount} / ${section.answers.length} correct`}
          </p>
          {!allCorrect && (
            <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {section.answers.map((answer, i) => (
                <span
                  key={`${answer}-${i}`}
                  className="rounded-xl bg-white px-3 py-2 text-xs font-semibold text-green-800 ring-1 ring-green-100"
                >
                  {i + 1}. {answer}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={check}
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-orange-600 active:scale-95"
        >
          Check dialogue
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
