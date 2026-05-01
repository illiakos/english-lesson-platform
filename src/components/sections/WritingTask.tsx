import { useState } from 'react'
import type { WritingTaskSection } from '../../types/lesson'
import { assetUrl } from '../../utils/assetUrl'

interface WritingTaskProps {
  section: WritingTaskSection
  onComplete?: (id: string) => void
}

/* ── Free-writing mode (what-to-wear style) ─────────────────────────────────── */

function FreeWritingTask({ section, onComplete }: WritingTaskProps) {
  const [text, setText] = useState('')
  const [showModel, setShowModel] = useState(false)
  const [imageError, setImageError] = useState(false)

  const copy = () => {
    if (text.trim()) navigator.clipboard?.writeText(text)
  }

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>

      {/* Image or gradient placeholder */}
      {section.imageSrc && (
        <div className="overflow-hidden rounded-2xl ring-1 ring-stone-200/70">
          {imageError ? (
            <div className="flex aspect-21/11 items-center justify-center bg-linear-to-br from-orange-200 via-pink-100 to-purple-200">
              <div className="text-center">
                <div className="text-5xl">✍️</div>
                <p className="mt-2 text-sm font-bold text-slate-600">{section.title}</p>
              </div>
            </div>
          ) : (
            <div className="flex aspect-21/11 w-full items-center justify-center bg-linear-to-br from-stone-100 via-orange-50/40 to-pink-50/50 p-4 sm:p-6">
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

      {/* Scenario card */}
      <div className="rounded-2xl bg-slate-900 p-5 text-slate-100">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-slate-400">
          Scenario
        </p>
        <p className="text-sm leading-relaxed">{section.prompt}</p>
        {section.starter && (
          <p className="mt-3 rounded-xl bg-white/10 px-4 py-2.5 text-sm italic text-orange-300">
            {section.starter}
          </p>
        )}
      </div>

      {/* Word bank */}
      {section.wordBank && section.wordBank.length > 0 && (
        <div>
          <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Word bank
          </p>
          <div className="flex flex-wrap gap-2">
            {section.wordBank.map((w) => (
              <button
                key={w}
                type="button"
                onClick={() =>
                  setText((prev) =>
                    prev
                      ? prev.trimEnd() + (prev.endsWith(' ') ? w : ' ' + w)
                      : w,
                  )
                }
                className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-800 ring-1 ring-orange-200 hover:bg-orange-200 active:scale-95 transition-all"
              >
                {w}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Textarea */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={section.starter ?? 'Write your answer here…'}
        rows={6}
        className="w-full resize-none rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-800 ring-1 ring-slate-200 outline-none placeholder:text-slate-400 focus:ring-orange-400 transition"
      />

      {/* Model answer reveal */}
      {section.modelAnswer && showModel && (
        <div className="rounded-2xl bg-green-50 p-4 ring-1 ring-green-200">
          <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-green-600">
            Model answer
          </p>
          <p className="text-sm italic text-green-800 leading-relaxed">
            {section.modelAnswer}
          </p>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {section.modelAnswer && (
          <button
            type="button"
            onClick={() => setShowModel((p) => !p)}
            className="rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-200 active:scale-95 transition-all"
          >
            {showModel ? 'Hide model answer' : 'Show model answer'}
          </button>
        )}
        <button
          type="button"
          onClick={copy}
          disabled={!text.trim()}
          className="rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-200 disabled:opacity-40 active:scale-95 transition-all"
        >
          Copy my answer
        </button>
        {onComplete && (
          <button
            type="button"
            onClick={() => {
              if (text.trim()) onComplete(section.id)
            }}
            disabled={!text.trim()}
            className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 active:scale-95 transition-all"
          >
            Mark as done ✓
          </button>
        )}
      </div>
    </div>
  )
}

/* ── Job-application email mode (lesson 1 style) ────────────────────────────── */

const fields = [
  { key: 'company', placeholder: 'e.g. Tesla, Google, Spotify…', label: 'The company I want to work for' },
  { key: 'qualities', placeholder: 'e.g. friendly, hard-working, creative…', label: 'My personal qualities' },
  { key: 'motivation', placeholder: 'e.g. career growth, bonuses, a good salary…', label: 'What motivates me' },
  { key: 'experience', placeholder: 'e.g. working in customer service, leading teams…', label: 'My experience' },
  { key: 'name', placeholder: 'e.g. Monica Smith', label: 'Student name' },
] as const

type FieldKey = (typeof fields)[number]['key']

function EmailWritingTask({ section }: WritingTaskProps) {
  const [values, setValues] = useState<Record<FieldKey, string>>({
    company: '',
    qualities: '',
    motivation: '',
    experience: '',
    name: '',
  })

  const set =
    (key: FieldKey) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setValues((prev) => ({ ...prev, [key]: e.target.value }))

  const v = (key: FieldKey, fallback: string) => values[key] || fallback

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>
      <p className="text-sm text-slate-500">{section.prompt}</p>

      <div className="grid gap-3 sm:grid-cols-2">
        {fields.map(({ key, label, placeholder }) => (
          <label
            key={key}
            className={`flex flex-col gap-1 ${key === 'name' ? 'sm:col-span-2' : ''}`}
          >
            <span className="text-xs font-bold text-slate-500">{label}</span>
            <input
              value={values[key]}
              onChange={set(key)}
              placeholder={placeholder}
              className="rounded-xl border-0 bg-slate-50 px-4 py-3 text-sm text-slate-800 ring-1 ring-slate-200 outline-none placeholder:text-slate-400 focus:ring-orange-400 transition"
            />
          </label>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
        <div className="flex items-center gap-1.5 bg-slate-100 px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <span className="ml-3 text-xs font-semibold text-slate-500">
            Your application email preview
          </span>
        </div>
        <div className="bg-white p-5 font-[Georgia,serif] text-sm leading-7 text-slate-800 md:p-6">
          <p>Dear Sir or Madam,</p>
          <br />
          <p>
            I am writing to apply for the position at your company{' '}
            <mark className="rounded bg-orange-100 px-1 not-italic">
              {v('company', '[company]')}
            </mark>
            . I believe my skills make me a good candidate for this job.
          </p>
          <p>
            I am{' '}
            <mark className="rounded bg-orange-100 px-1">
              {v('qualities', '[qualities]')}
            </mark>
            .
          </p>
          <p>
            I am interested in{' '}
            <mark className="rounded bg-orange-100 px-1">
              {v('motivation', '[motivation]')}
            </mark>
            .
          </p>
          <p>
            I have experience{' '}
            <mark className="rounded bg-orange-100 px-1">
              {v('experience', '[experience]')}
            </mark>
            .
          </p>
          <p>I look forward to your answer.</p>
          <br />
          <p>Yours sincerely,</p>
          <p className="font-semibold">
            <mark className="rounded bg-orange-100 px-1">
              {v('name', '[Student name]')}
            </mark>
          </p>
        </div>
      </div>
    </div>
  )
}

/* ── Main export ─────────────────────────────────────────────────────────────── */

export default function WritingTask({ section, onComplete }: WritingTaskProps) {
  if (section.wordBank || section.starter || section.modelAnswer || section.imageSrc) {
    return <FreeWritingTask section={section} onComplete={onComplete} />
  }
  return <EmailWritingTask section={section} />
}
