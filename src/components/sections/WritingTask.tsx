import { useState } from 'react'
import type { WritingTaskSection } from '../../types/lesson'

interface WritingTaskProps {
  section: WritingTaskSection
}

const fields = [
  { key: 'company',     placeholder: 'e.g. Tesla, Google, Spotify…', label: 'The company I want to work for' },
  { key: 'qualities',   placeholder: 'e.g. friendly, hard-working, creative…', label: 'My personal qualities' },
  { key: 'motivation',  placeholder: 'e.g. career growth, bonuses, a good salary…', label: 'What motivates me' },
  { key: 'experience',  placeholder: 'e.g. working in customer service, leading teams…', label: 'My experience' },
  { key: 'name',        placeholder: 'e.g. Monica Smith', label: 'Student name' },
] as const

type FieldKey = typeof fields[number]['key']

export default function WritingTask({ section }: WritingTaskProps) {
  const [values, setValues] = useState<Record<FieldKey, string>>({
    company: '', qualities: '', motivation: '', experience: '', name: '',
  })

  const set = (key: FieldKey) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues((prev) => ({ ...prev, [key]: e.target.value }))

  const v = (key: FieldKey, fallback: string) => values[key] || fallback

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>
      <p className="text-sm text-slate-500">{section.prompt}</p>

      {/* ── Input fields ─────────────────────────────────────── */}
      <div className="grid gap-3 sm:grid-cols-2">
        {fields.map(({ key, label, placeholder }) => (
          <label key={key} className={`flex flex-col gap-1 ${key === 'name' ? 'sm:col-span-2' : ''}`}>
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

      {/* ── Email preview ────────────────────────────────────── */}
      <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
        {/* Toolbar */}
        <div className="flex items-center gap-1.5 bg-slate-100 px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <span className="ml-3 text-xs font-semibold text-slate-500">Your application email preview</span>
        </div>

        {/* Body */}
        <div className="bg-white p-5 font-[Georgia,serif] text-sm leading-7 text-slate-800 md:p-6">
          <p>Dear Sir or Madam,</p>
          <br />
          <p>
            I am writing to apply for the position at your company{' '}
            <mark className="rounded bg-orange-100 px-1 not-italic">{v('company', '[company]')}</mark>.
            I believe my skills make me a good candidate for this job.
          </p>
          <p>
            I am{' '}
            <mark className="rounded bg-orange-100 px-1">{v('qualities', '[qualities]')}</mark>.
          </p>
          <p>
            I am interested in{' '}
            <mark className="rounded bg-orange-100 px-1">{v('motivation', '[motivation]')}</mark>.
          </p>
          <p>
            I have experience{' '}
            <mark className="rounded bg-orange-100 px-1">{v('experience', '[experience]')}</mark>.
          </p>
          <p>I look forward to your answer.</p>
          <br />
          <p>Yours sincerely,</p>
          <p className="font-semibold">
            <mark className="rounded bg-orange-100 px-1">{v('name', '[Student name]')}</mark>
          </p>
        </div>
      </div>
    </div>
  )
}
