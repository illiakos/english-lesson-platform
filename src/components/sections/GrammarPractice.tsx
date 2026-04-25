import { useState } from 'react'
import type { GrammarPracticeSection } from '../../types/lesson'

interface GrammarPracticeProps {
  section: GrammarPracticeSection
  onComplete: (sectionId: string) => void
}

type Tab = 'A' | 'B' | 'C'

export default function GrammarPractice({ section, onComplete }: GrammarPracticeProps) {
  const [activeTab, setActiveTab] = useState<Tab>('A')
  const [aAnswers, setAAnswers] = useState<Record<number, string>>({})
  const [bAnswers, setBAnswers] = useState<Record<number, string>>({})
  const [cAnswers, setCAnswers] = useState<Record<number, string>>({})
  const [checked, setChecked] = useState(false)

  const aCorrect = section.activityA.filter((item, i) => aAnswers[i] === item.answer).length
  const bCorrect = section.activityB.filter((item, i) => bAnswers[i]?.trim().toLowerCase() === item.answer.toLowerCase()).length
  const cCorrect = section.activityC.filter((item, i) => cAnswers[i] === item.answer).length
  const total = section.activityA.length + section.activityB.length + section.activityC.length
  const score = aCorrect + bCorrect + cCorrect

  const tabs: { id: Tab; label: string; count: number; correct: number }[] = [
    { id: 'A', label: 'Choose the tense', count: section.activityA.length, correct: aCorrect },
    { id: 'B', label: 'Complete the verb', count: section.activityB.length, correct: bCorrect },
    { id: 'C', label: 'Choose the word', count: section.activityC.length, correct: cCorrect },
  ]

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>

      {/* ── Activity tabs ────────────────────────────────────── */}
      <div className="flex gap-1 rounded-2xl bg-slate-100 p-1.5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-1 flex-col items-center rounded-xl py-2 text-xs font-bold transition-all ${
              activeTab === tab.id
                ? 'bg-white text-orange-600 shadow-sm ring-1 ring-slate-200'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <span className="text-base">Activity {tab.id}</span>
            {checked && (
              <span className={`mt-0.5 ${tab.correct === tab.count ? 'text-green-600' : 'text-slate-500'}`}>
                {tab.correct}/{tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ── Activity A ───────────────────────────────────────── */}
      {activeTab === 'A' && (
        <div className="anim-slide space-y-2.5">
          {section.activityA.map((item, index) => {
            const isCorrect = checked && aAnswers[index] === item.answer
            const isWrong   = checked && !!aAnswers[index] && !isCorrect
            return (
              <div key={item.sentence} className={`grid gap-2 rounded-2xl p-3 ring-1 md:grid-cols-[1fr_200px] md:items-center ${
                isCorrect ? 'bg-green-50 ring-green-200' : isWrong ? 'bg-red-50 ring-red-200' : 'bg-slate-50 ring-slate-200'
              }`}>
                <div className="flex items-start gap-2">
                  {checked && (
                    <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] ${
                      isCorrect ? 'bg-green-600 text-white' : isWrong ? 'bg-red-500 text-white' : ''
                    }`}>{isCorrect ? '✓' : isWrong ? '✕' : ''}</span>
                  )}
                  <span className="text-sm text-slate-800">{item.sentence}</span>
                </div>
                <select
                  value={aAnswers[index] ?? ''}
                  onChange={(e) => setAAnswers((prev) => ({ ...prev, [index]: e.target.value }))}
                  className="rounded-xl bg-white px-3 py-2 text-sm ring-1 ring-slate-200 outline-none focus:ring-orange-400"
                >
                  <option value="">Choose…</option>
                  <option value="Present Simple">Present Simple</option>
                  <option value="Present Continuous">Present Continuous</option>
                </select>
              </div>
            )
          })}
        </div>
      )}

      {/* ── Activity B ───────────────────────────────────────── */}
      {activeTab === 'B' && (
        <div className="anim-slide space-y-2.5">
          {section.activityB.map((item, index) => {
            const isCorrect = checked && bAnswers[index]?.trim().toLowerCase() === item.answer.toLowerCase()
            const isWrong   = checked && !!bAnswers[index] && !isCorrect
            return (
              <div key={item.sentence} className={`grid gap-2 rounded-2xl p-3 ring-1 md:grid-cols-[1fr_200px] md:items-center ${
                isCorrect ? 'bg-green-50 ring-green-200' : isWrong ? 'bg-red-50 ring-red-200' : 'bg-slate-50 ring-slate-200'
              }`}>
                <div className="flex items-start gap-2">
                  {checked && (
                    <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] ${
                      isCorrect ? 'bg-green-600 text-white' : isWrong ? 'bg-red-500 text-white' : ''
                    }`}>{isCorrect ? '✓' : isWrong ? '✕' : ''}</span>
                  )}
                  <span className="text-sm text-slate-800">{item.sentence}</span>
                </div>
                <div>
                  <input
                    value={bAnswers[index] ?? ''}
                    onChange={(e) => setBAnswers((prev) => ({ ...prev, [index]: e.target.value }))}
                    placeholder="Type your answer…"
                    className="w-full rounded-xl bg-white px-3 py-2 text-sm ring-1 ring-slate-200 outline-none focus:ring-orange-400"
                  />
                  {isWrong && (
                    <p className="mt-1 text-xs text-green-700">Answer: {item.answer}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* ── Activity C ───────────────────────────────────────── */}
      {activeTab === 'C' && (
        <div className="anim-slide space-y-2.5">
          {section.activityC.map((item, index) => {
            const isCorrect = checked && cAnswers[index] === item.answer
            const isWrong   = checked && !!cAnswers[index] && !isCorrect
            return (
              <div key={item.sentence} className={`grid gap-2 rounded-2xl p-3 ring-1 md:grid-cols-[1fr_200px] md:items-center ${
                isCorrect ? 'bg-green-50 ring-green-200' : isWrong ? 'bg-red-50 ring-red-200' : 'bg-slate-50 ring-slate-200'
              }`}>
                <div className="flex items-start gap-2">
                  {checked && (
                    <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] ${
                      isCorrect ? 'bg-green-600 text-white' : isWrong ? 'bg-red-500 text-white' : ''
                    }`}>{isCorrect ? '✓' : isWrong ? '✕' : ''}</span>
                  )}
                  <span className="text-sm text-slate-800">{item.sentence}</span>
                </div>
                <select
                  value={cAnswers[index] ?? ''}
                  onChange={(e) => setCAnswers((prev) => ({ ...prev, [index]: e.target.value }))}
                  className="rounded-xl bg-white px-3 py-2 text-sm ring-1 ring-slate-200 outline-none focus:ring-orange-400"
                >
                  <option value="">Choose…</option>
                  {item.options.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            )
          })}
        </div>
      )}

      {/* ── Score ────────────────────────────────────────────── */}
      {checked && (
        <div className="anim-slide flex items-center gap-3 rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200">
          <div className="flex gap-1">
            {Array.from({ length: total }, (_, i) => (
              <span key={i} className={`h-2 w-2 rounded-full ${i < score ? 'bg-green-500' : 'bg-slate-300'}`} />
            ))}
          </div>
          <p className={`text-sm font-semibold ${score === total ? 'text-green-700' : 'text-slate-700'}`}>
            {score === total ? '🎉 All correct!' : `${score} / ${total} correct`}
          </p>
        </div>
      )}

      {/* ── Buttons ──────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => { setChecked(true); if (score === total) onComplete(section.id) }}
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-600 active:scale-95 transition-all"
        >
          Check all activities
        </button>
        <button
          type="button"
          onClick={() => { setAAnswers({}); setBAnswers({}); setCAnswers({}); setChecked(false) }}
          className="rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-200 active:scale-95 transition-all"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
