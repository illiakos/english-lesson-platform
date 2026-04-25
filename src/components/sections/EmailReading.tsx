import { useState } from 'react'
import type { EmailReadingSection } from '../../types/lesson'

interface EmailReadingProps {
  section: EmailReadingSection
  isCompleted: boolean
  onComplete: (sectionId: string) => void
}

export default function EmailReading({ section, onComplete, isCompleted }: EmailReadingProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showSamples, setShowSamples] = useState(false)

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>

      {/* ── Email card ───────────────────────────────────────── */}
      <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
        {/* Toolbar bar */}
        <div className="flex items-center gap-1.5 bg-slate-100 px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <span className="ml-3 text-xs font-semibold text-slate-500">
            {section.email.subject}
          </span>
        </div>

        {/* Email body */}
        <article className="bg-white p-5 text-sm leading-7 text-slate-700 md:p-6">
          {section.email.body.map((line, i) =>
            line === '' ? (
              <br key={i} />
            ) : (
              <p key={i} className={i === 0 ? 'font-semibold text-slate-900' : ''}>{line}</p>
            ),
          )}
          <div className="mt-4 border-t border-slate-100 pt-3">
            {section.email.closing.map((line) => (
              <p key={line} className="font-medium text-slate-800">{line}</p>
            ))}
          </div>
        </article>
      </div>

      {/* ── Questions ────────────────────────────────────────── */}
      <div className="space-y-3">
        <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
          Answer the questions
        </p>
        {section.questions.map((item, index) => (
          <div key={item.question} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
            <label className="block">
              <span className="flex items-start gap-2 font-semibold text-slate-800">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[11px] font-bold text-orange-700">
                  {index + 1}
                </span>
                {item.question}
              </span>
              <input
                value={answers[index] ?? ''}
                onChange={(e) => setAnswers((prev) => ({ ...prev, [index]: e.target.value }))}
                className="mt-2 w-full rounded-xl border-0 bg-white px-3 py-2.5 text-sm ring-1 ring-slate-200 outline-none focus:ring-orange-400"
                placeholder="Your answer…"
              />
            </label>
            {showSamples && (
              <p className="mt-2 flex items-start gap-1.5 text-sm anim-slide">
                <span className="font-bold text-green-600">Sample:</span>
                <span className="text-green-700">{item.sampleAnswer}</span>
              </p>
            )}
          </div>
        ))}
      </div>

      {/* ── Buttons ──────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setShowSamples((prev) => !prev)}
          className="rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-200 active:scale-95 transition-all"
        >
          {showSamples ? 'Hide sample answers' : 'Show sample answers'}
        </button>
        <button
          type="button"
          onClick={() => onComplete(section.id)}
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-600 active:scale-95 transition-all"
        >
          Mark as done ✓
        </button>
      </div>

      {isCompleted && (
        <p className="anim-slide rounded-xl bg-green-50 px-4 py-2.5 text-sm font-bold text-green-700 ring-1 ring-green-200">
          ✓ Reading section completed
        </p>
      )}
    </div>
  )
}
