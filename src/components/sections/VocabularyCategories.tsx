import { useState } from 'react'
import type { VocabCategoriesSection } from '../../types/lesson'

interface Props {
  section: VocabCategoriesSection
}

const COLOR = {
  blue: {
    card: 'bg-blue-50 ring-blue-200',
    header: 'text-blue-700',
    chip: 'bg-blue-100 text-blue-900 ring-blue-200 hover:bg-blue-200',
    def: 'text-blue-600',
  },
  green: {
    card: 'bg-green-50 ring-green-200',
    header: 'text-green-700',
    chip: 'bg-green-100 text-green-900 ring-green-200 hover:bg-green-200',
    def: 'text-green-600',
  },
  orange: {
    card: 'bg-orange-50 ring-orange-200',
    header: 'text-orange-700',
    chip: 'bg-orange-100 text-orange-900 ring-orange-200 hover:bg-orange-200',
    def: 'text-orange-600',
  },
  purple: {
    card: 'bg-purple-50 ring-purple-200',
    header: 'text-purple-700',
    chip: 'bg-purple-100 text-purple-900 ring-purple-200 hover:bg-purple-200',
    def: 'text-purple-600',
  },
  pink: {
    card: 'bg-pink-50 ring-pink-200',
    header: 'text-pink-700',
    chip: 'bg-pink-100 text-pink-900 ring-pink-200 hover:bg-pink-200',
    def: 'text-pink-600',
  },
  yellow: {
    card: 'bg-yellow-50 ring-yellow-200',
    header: 'text-yellow-700',
    chip: 'bg-yellow-100 text-yellow-900 ring-yellow-200 hover:bg-yellow-200',
    def: 'text-yellow-700',
  },
} as const

export default function VocabularyCategories({ section }: Props) {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({})

  const toggle = (key: string) =>
    setRevealed((prev) => ({ ...prev, [key]: !prev[key] }))

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {section.categories.map((cat) => {
          const c = COLOR[cat.color]
          return (
            <div key={cat.label} className={`rounded-2xl p-4 ring-1 ${c.card}`}>
              <h3 className={`mb-3 text-xs font-bold uppercase tracking-widest ${c.header}`}>
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.words.map((w) => {
                  const key = `${cat.label}:${w.word}`
                  const open = revealed[key]
                  return (
                    <button
                      key={w.word}
                      type="button"
                      onClick={() => toggle(key)}
                      className={`flex flex-col rounded-xl px-3 py-2 text-left ring-1 transition-all active:scale-95 ${c.chip} ${open ? 'ring-2' : ''}`}
                    >
                      <span className="text-sm font-bold">{w.word}</span>
                      {open && (
                        <span className={`mt-0.5 text-xs font-medium ${c.def}`}>
                          {w.definition}
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <p className="text-xs text-slate-400">💡 Click any word to see its meaning</p>
    </div>
  )
}
