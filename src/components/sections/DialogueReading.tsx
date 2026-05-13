import { useState } from 'react'
import type { DialogueReadingSection } from '../../types/lesson'
import { assetUrl } from '../../utils/assetUrl'

interface Props {
  section: DialogueReadingSection
  isCompleted: boolean
  onComplete: (id: string) => void
}

export default function DialogueReading({ section, onComplete, isCompleted }: Props) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showSamples, setShowSamples] = useState(false)
  const [imageError, setImageError] = useState(false)

  const characterMap = Object.fromEntries(
    section.characters.map((c) => [c.name, c.colorClass]),
  )

  const isFirstChar = (speaker: string) =>
    speaker === section.characters[0]?.name

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>

      {/* Header image */}
      {section.imageSrc && (
        <div className="overflow-hidden rounded-2xl ring-1 ring-stone-200/70">
          {imageError ? (
            <div className="flex aspect-21/10 items-center justify-center bg-linear-to-br from-blue-100 via-purple-50 to-green-100">
              <div className="text-center">
                <div className="text-4xl">💬</div>
                <p className="mt-1 text-xs font-semibold text-slate-400">Dialogue</p>
              </div>
            </div>
          ) : (
            <div className="flex aspect-21/10 w-full items-center justify-center bg-linear-to-br from-stone-100 via-orange-50/35 to-purple-50/40 p-4 sm:p-6">
              <img
                src={assetUrl(section.imageSrc)}
                alt="Dialogue"
                onError={() => setImageError(true)}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          )}
        </div>
      )}

      {/* Chat bubbles */}
      <div className="space-y-3">
        {section.lines.map((line, i) => {
          const isLeft = isFirstChar(line.speaker)
          const colorClass = characterMap[line.speaker] ?? 'bg-slate-100 text-slate-800'

          return (
            <div
              key={i}
              className={`flex items-end gap-2 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Avatar */}
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${
                  isLeft ? 'bg-orange-500' : 'bg-green-600'
                }`}
              >
                {line.speaker[0]}
              </div>

              {/* Bubble */}
              <div className={`max-w-[75%] ${isLeft ? 'items-start' : 'items-end'} flex flex-col`}>
                <span
                  className={`mb-1 text-[10px] font-bold uppercase tracking-wide ${
                    isLeft ? 'text-orange-600' : 'text-green-600'
                  }`}
                >
                  {line.speaker}
                </span>
                <div
                  className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ring-1 ${
                    colorClass
                  } ${isLeft ? 'rounded-tl-sm' : 'rounded-tr-sm'}`}
                >
                  {line.text}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {section.questions.length > 0 && (
        <div className="space-y-3">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Comprehension questions
          </p>
          {section.questions.map((item, i) => (
            <div
              key={item.question}
              className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200"
            >
              <label className="block">
                <span className="flex items-start gap-2 font-semibold text-slate-800">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[11px] font-bold text-orange-700">
                    {i + 1}
                  </span>
                  {item.question}
                </span>
                <input
                  value={answers[i] ?? ''}
                  onChange={(e) =>
                    setAnswers((prev) => ({ ...prev, [i]: e.target.value }))
                  }
                  placeholder="Your answer…"
                  className="mt-2 w-full rounded-xl border-0 bg-white px-3 py-2.5 text-sm ring-1 ring-slate-200 outline-none focus:ring-orange-400"
                />
              </label>
              {showSamples && (
                <p className="mt-2 flex items-start gap-1.5 text-sm">
                  <span className="font-bold text-green-600">Sample:</span>
                  <span className="text-green-700">{item.sampleAnswer}</span>
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Buttons */}
      <div className="flex flex-wrap gap-2">
        {section.questions.length > 0 && (
          <button
            type="button"
            onClick={() => setShowSamples((p) => !p)}
            className="rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-200 active:scale-95 transition-all"
          >
            {showSamples ? 'Hide sample answers' : 'Show sample answers'}
          </button>
        )}
        <button
          type="button"
          onClick={() => onComplete(section.id)}
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-600 active:scale-95 transition-all"
        >
          Mark as done ✓
        </button>
      </div>

      {isCompleted && (
        <p className="rounded-xl bg-green-50 px-4 py-2.5 text-sm font-bold text-green-700 ring-1 ring-green-200">
          ✓ Dialogue section completed
        </p>
      )}
    </div>
  )
}
