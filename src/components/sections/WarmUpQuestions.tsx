import { useState } from 'react'
import type { WarmUpQuestionsSection } from '../../types/lesson'
import { assetUrl } from '../../utils/assetUrl'

interface WarmUpQuestionsProps {
  section: WarmUpQuestionsSection
  onComplete: (sectionId: string) => void
}

export default function WarmUpQuestions({ section, onComplete }: WarmUpQuestionsProps) {
  const [opened, setOpened] = useState<number[]>([])
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  const reveal = (index: number) => {
    if (opened.includes(index)) return
    const next = [...opened, index]
    setOpened(next)
    if (next.length === section.questions.length) onComplete(section.id)
  }

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>

      {/* ── Image grid ───────────────────────────────────────── */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {section.images.map((image, index) => (
          imageErrors[index] ? (
            <div
              key={image}
              className="flex aspect-4/3 items-center justify-center rounded-2xl bg-linear-to-br from-orange-100 to-slate-100 text-xs font-semibold text-slate-400 ring-1 ring-stone-200/60 sm:aspect-video"
            >
              Photo {index + 1}
            </div>
          ) : (
            <div
              key={image}
              className="flex aspect-4/3 w-full items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-stone-100 via-orange-50/25 to-stone-100 p-2 ring-1 ring-stone-200/70 sm:aspect-video"
            >
              <img
                src={assetUrl(image)}
                onError={() => setImageErrors((prev) => ({ ...prev, [index]: true }))}
                alt={`Work scene ${index + 1}`}
                className="max-h-full max-w-full rounded-lg object-contain"
              />
            </div>
          )
        ))}
      </div>

      {/* ── Discussion questions ─────────────────────────────── */}
      <p className="text-sm font-semibold text-slate-500">
        Click a question to reveal a hint →
      </p>
      <div className="space-y-2.5">
        {section.questions.map((item, index) => {
          const isOpen = opened.includes(index)
          return (
            <button
              key={item.question}
              type="button"
              onClick={() => reveal(index)}
              className={`group w-full rounded-2xl p-4 text-left transition-all ring-1 ${
                isOpen
                  ? 'bg-green-50 ring-green-200'
                  : 'bg-slate-50 ring-slate-200 hover:bg-orange-50 hover:ring-orange-200'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                  isOpen ? 'bg-green-600 text-white' : 'bg-slate-200 text-slate-600 group-hover:bg-orange-200 group-hover:text-orange-700'
                }`}>
                  {isOpen ? '✓' : index + 1}
                </span>
                <div>
                  <p className="font-semibold text-slate-800">{item.question}</p>
                  {isOpen && (
                    <p className="mt-1.5 text-sm text-green-700 anim-slide">
                      {item.hint}
                    </p>
                  )}
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
