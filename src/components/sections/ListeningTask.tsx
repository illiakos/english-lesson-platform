import { useState } from 'react'
import type { ListeningTaskSection } from '../../types/lesson'

interface ListeningTaskProps {
  section: ListeningTaskSection
  onComplete: (sectionId: string) => void
}

export default function ListeningTask({ section, onComplete }: ListeningTaskProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [checked, setChecked] = useState(false)
  const [audioMissing, setAudioMissing] = useState(false)

  const correct = section.speakers.filter((s) => answers[s.id] === s.answer).length
  const allCorrect = correct === section.speakers.length

  const check = () => {
    setChecked(true)
    if (allCorrect) onComplete(section.id)
  }

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>

      {/* ── Audio player ─────────────────────────────────────── */}
      {!audioMissing ? (
        <div className="rounded-2xl bg-slate-900 p-4">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            Audio track
          </p>
          <audio
            controls
            className="w-full"
            onError={() => setAudioMissing(true)}
          >
            <source src={section.audioSrc} />
          </audio>
        </div>
      ) : (
        <div className="flex items-center gap-3 rounded-2xl bg-orange-50 p-4 ring-1 ring-orange-200">
          <span className="text-2xl">🎧</span>
          <p className="text-sm text-orange-700">{section.note}</p>
        </div>
      )}

      {/* ── Speaker cards ────────────────────────────────────── */}
      <div className="grid gap-3 sm:grid-cols-2">
        {section.speakers.map((speaker, index) => {
          const isCorrect = checked && answers[speaker.id] === speaker.answer
          const isWrong = checked && !!answers[speaker.id] && !isCorrect
          return (
            <div
              key={speaker.id}
              className={`rounded-2xl p-4 ring-1 transition-all ${
                isCorrect ? 'bg-green-50 ring-green-300'
                : isWrong  ? 'bg-red-50 ring-red-300'
                :             'bg-slate-50 ring-slate-200'
              }`}
            >
              <div className="mb-3 flex items-center gap-2">
                <span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                  isCorrect ? 'bg-green-600 text-white' : isWrong ? 'bg-red-500 text-white' : 'bg-orange-100 text-orange-700'
                }`}>
                  {isCorrect ? '✓' : isWrong ? '✕' : index + 1}
                </span>
                <span className="font-semibold text-slate-800">{speaker.label}</span>
              </div>
              <select
                value={answers[speaker.id] ?? ''}
                onChange={(e) => setAnswers((prev) => ({ ...prev, [speaker.id]: e.target.value }))}
                className="w-full rounded-xl bg-white px-3 py-2 text-sm ring-1 ring-slate-200 outline-none focus:ring-orange-400"
              >
                <option value="">Choose role…</option>
                {section.options.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
          )
        })}
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={check}
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-600 active:scale-95 transition-all"
        >
          Check listening
        </button>
      </div>

      {checked && (
        <p className={`text-sm font-semibold ${allCorrect ? 'text-green-700' : 'text-slate-700'}`}>
          {allCorrect ? '🎉 All correct!' : `${correct} / ${section.speakers.length} correct`}
        </p>
      )}
    </div>
  )
}
