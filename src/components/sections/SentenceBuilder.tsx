import { useMemo, useState } from 'react'
import type { SentenceBuilderSection } from '../../types/lesson'

interface SentenceBuilderProps {
  section: SentenceBuilderSection
  isCompleted: boolean
  onComplete: (sectionId: string) => void
}

function shuffle<T>(items: T[]) {
  return [...items].sort(() => Math.random() - 0.5)
}

export default function SentenceBuilder({ section, onComplete, isCompleted }: SentenceBuilderProps) {
  const [sentenceIndex, setSentenceIndex] = useState(0)
  const currentSentence = section.sentences[sentenceIndex]

  const initialChunks = useMemo(
    () => shuffle(currentSentence.chunks),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sentenceIndex],
  )
  const [picked, setPicked] = useState<string[]>([])
  const [remaining, setRemaining] = useState<string[]>(initialChunks)
  const [checked, setChecked] = useState(false)
  const [solvedIndexes, setSolvedIndexes] = useState<number[]>([])

  const builtSentence = picked.join(' ')
  const expected = currentSentence.correctOrder.join(' ')
  const isCorrect = builtSentence.trim() === expected.trim()

  const pickChunk = (chunk: string, i: number) => {
    setRemaining((prev) => prev.filter((_, idx) => idx !== i))
    setPicked((prev) => [...prev, chunk])
    setChecked(false)
  }

  const unpickChunk = (chunk: string, i: number) => {
    setPicked((prev) => prev.filter((_, idx) => idx !== i))
    setRemaining((prev) => [...prev, chunk])
    setChecked(false)
  }

  const reset = () => {
    setRemaining(shuffle(currentSentence.chunks))
    setPicked([])
    setChecked(false)
  }

  const check = () => {
    setChecked(true)
    if (isCorrect && !solvedIndexes.includes(sentenceIndex)) {
      const next = [...solvedIndexes, sentenceIndex]
      setSolvedIndexes(next)
      if (next.length === section.sentences.length && !isCompleted) {
        onComplete(section.id)
      }
    }
  }

  const nextSentence = () => {
    if (sentenceIndex >= section.sentences.length - 1) return
    const next = sentenceIndex + 1
    setSentenceIndex(next)
    const nextChunks = shuffle(section.sentences[next].chunks)
    setRemaining(nextChunks)
    setPicked([])
    setChecked(false)
  }

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>
      <p className="text-sm text-slate-500">{section.prompt}</p>

      {/* ── Sentence progress dots ───────────────────────────── */}
      <div className="flex items-center gap-2">
        {section.sentences.map((_, i) => (
          <span
            key={i}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              solvedIndexes.includes(i) ? 'bg-green-500 scale-110'
              : i === sentenceIndex       ? 'bg-orange-400 scale-110'
              :                            'bg-slate-200'
            }`}
          />
        ))}
        <span className="ml-1 text-xs font-semibold text-slate-400">
          {sentenceIndex + 1} / {section.sentences.length}
        </span>
      </div>

      {/* ── Drop zone ────────────────────────────────────────── */}
      <div
        className={`min-h-14 rounded-2xl p-4 ring-2 transition-all ${
          checked && isCorrect  ? 'bg-green-50 ring-green-300'
          : checked && !isCorrect ? 'bg-red-50 ring-red-200'
          :                          'bg-slate-50 ring-slate-200'
        }`}
      >
        {picked.length === 0 ? (
          <span className="text-sm text-slate-400">Tap chunks below to build your sentence…</span>
        ) : (
          <div className="flex flex-wrap gap-2">
            {picked.map((chunk, i) => (
              <button
                key={`${chunk}-${i}`}
                type="button"
                onClick={() => unpickChunk(chunk, i)}
                className="rounded-xl bg-orange-100 px-3 py-1.5 text-sm font-semibold text-orange-800 ring-1 ring-orange-200 hover:bg-red-100 hover:ring-red-200 active:scale-95 transition-all"
                title="Click to remove"
              >
                {chunk}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Available chunks ─────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {remaining.map((chunk, i) => (
          <button
            key={`${chunk}-${i}`}
            type="button"
            onClick={() => pickChunk(chunk, i)}
            className="rounded-xl border-2 border-dashed border-orange-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 hover:border-orange-400 hover:bg-orange-50 active:scale-95 transition-all"
          >
            {chunk}
          </button>
        ))}
      </div>

      {/* ── Feedback ─────────────────────────────────────────── */}
      {checked && (
        <p className={`anim-slide text-sm font-semibold ${isCorrect ? 'text-green-700' : 'text-red-600'}`}>
          {isCorrect ? '🎉 Correct!' : `Expected: "${expected}"`}
        </p>
      )}

      {/* ── Buttons ──────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={check}
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-600 active:scale-95 transition-all"
        >
          Check
        </button>
        <button
          type="button"
          onClick={reset}
          className="rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-200 active:scale-95 transition-all"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={nextSentence}
          disabled={sentenceIndex >= section.sentences.length - 1}
          className="rounded-xl bg-green-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 active:scale-95 transition-all"
        >
          Next →
        </button>
      </div>

      {isCompleted && (
        <p className="anim-slide rounded-xl bg-green-50 p-3 text-sm font-bold text-green-700 ring-1 ring-green-200">
          ✓ All sentences completed!
        </p>
      )}
    </div>
  )
}
