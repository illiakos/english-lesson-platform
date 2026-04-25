import { useState } from 'react'
import type { RankingTaskSection } from '../../types/lesson'

interface RankingTaskProps {
  section: RankingTaskSection
  onComplete: (sectionId: string) => void
}

const MEDALS: Record<string, string> = { '1': '🥇', '2': '🥈', '3': '🥉' }

export default function RankingTask({ section, onComplete }: RankingTaskProps) {
  const [ranking, setRanking] = useState<Record<string, string>>({})
  const [saved, setSaved] = useState(false)

  const save = () => {
    setSaved(true)
    onComplete(section.id)
  }

  /* sort saved items by rank for the summary */
  const sortedItems = saved
    ? [...section.items].sort((a, b) => {
        const ra = parseInt(ranking[a] ?? '99')
        const rb = parseInt(ranking[b] ?? '99')
        return ra - rb
      })
    : []

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>
      <p className="text-sm text-slate-500">{section.prompt}</p>

      {/* ── Ranking rows ─────────────────────────────────────── */}
      {!saved && (
        <div className="space-y-2.5">
          {section.items.map((item) => (
            <div
              key={item}
              className="grid grid-cols-[1fr_100px] items-center gap-3 rounded-2xl bg-slate-50 p-3.5 ring-1 ring-slate-200"
            >
              <span className="text-sm font-semibold text-slate-800 capitalize">{item}</span>
              <div className="flex items-center gap-2">
                {ranking[item] && MEDALS[ranking[item]] && (
                  <span className="text-lg">{MEDALS[ranking[item]]}</span>
                )}
                <select
                  value={ranking[item] ?? ''}
                  onChange={(e) => setRanking((prev) => ({ ...prev, [item]: e.target.value }))}
                  className="flex-1 rounded-xl bg-white px-2 py-2 text-sm ring-1 ring-slate-200 outline-none focus:ring-orange-400"
                >
                  <option value="">—</option>
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={String(n)}>{n}</option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Saved summary ────────────────────────────────────── */}
      {saved && (
        <div className="anim-slide space-y-2">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Your ranking</p>
          {sortedItems.map((item, i) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700">
                {ranking[item] ?? i + 1}
              </span>
              <span className="text-sm font-semibold capitalize text-slate-800">{item}</span>
              {MEDALS[ranking[item]] && <span className="ml-auto text-lg">{MEDALS[ranking[item]]}</span>}
            </div>
          ))}
          <p className="mt-2 rounded-2xl bg-green-50 p-3 text-sm text-green-700 ring-1 ring-green-200">
            Great choices! Your ranking is ready for discussion.
          </p>
        </div>
      )}

      {!saved && (
        <button
          type="button"
          onClick={save}
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-600 active:scale-95 transition-all"
        >
          Save my ranking
        </button>
      )}
    </div>
  )
}
