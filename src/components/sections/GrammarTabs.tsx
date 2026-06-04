import { useState } from 'react'
import type { GrammarTabsSection } from '../../types/lesson'
import { assetUrl } from '../../utils/assetUrl'

interface GrammarTabsProps {
  section: GrammarTabsSection
}

const PREPOSITIONS = ['TO', 'FOR', 'AT', 'IN', 'ON', 'OF', 'WITH', 'ABOUT']
const PREP_PATTERN = new RegExp(`\\b(${PREPOSITIONS.join('|')})\\b`, 'g')

function highlightPrepositions(text: string): React.ReactNode {
  const parts = text.split(PREP_PATTERN)
  return parts.map((part, i) =>
    PREPOSITIONS.includes(part) ? (
      <span key={i} className="font-bold text-orange-500">{part}</span>
    ) : (
      part
    ),
  )
}

export default function GrammarTabs({ section }: GrammarTabsProps) {
  const [activeTab, setActiveTab] = useState(section.tabs[0]?.label ?? '')
  const [imageError, setImageError] = useState(false)
  const current = section.tabs.find((tab) => tab.label === activeTab) ?? section.tabs[0]

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>

      {/* Optional header image */}
      {section.imageSrc && (
        <div className="overflow-hidden rounded-2xl ring-1 ring-stone-200/70">
          {imageError ? (
            <div className="flex aspect-21/9 items-center justify-center bg-linear-to-br from-slate-800 via-slate-700 to-slate-900 sm:aspect-21/10">
              <div className="text-center">
                <div className="text-4xl">📖</div>
                <p className="mt-1 text-sm font-bold text-slate-300">Grammar</p>
              </div>
            </div>
          ) : (
            <div className="flex aspect-21/9 w-full items-center justify-center bg-linear-to-br from-stone-100 via-orange-50/30 to-violet-50/40 p-4 sm:aspect-21/10 sm:p-6">
              <img
                src={assetUrl(section.imageSrc)}
                alt="Grammar"
                onError={() => setImageError(true)}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          )}
        </div>
      )}

      {/* ── Tabs ─────────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-1 rounded-2xl bg-slate-100 p-1.5">
        {section.tabs.map((tab) => {
          const isActive = tab.label === activeTab
          return (
            <button
              key={tab.label}
              type="button"
              onClick={() => setActiveTab(tab.label)}
              className={`min-w-28 flex-1 rounded-xl px-2 py-2 text-sm font-bold transition-all ${
                isActive
                  ? 'bg-white text-orange-600 shadow-sm ring-1 ring-slate-200'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* ── Tab content ──────────────────────────────────────── */}
      <div className="anim-slide space-y-4" key={activeTab}>

        {/* When to use */}
        {current?.use && (
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
            <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-blue-600">
              When to use
            </p>
            <p className="text-sm text-blue-900 leading-relaxed">{current.use}</p>
          </div>
        )}

        {/* Rules — phrase cards style */}
        <div className="rounded-2xl border border-green-100 bg-green-50/40 p-5">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-green-700">
            Structure
          </p>
          <ul className="space-y-2">
            {current?.rules.map((rule, i) =>
              rule === '---' ? (
                <li key={i} aria-hidden className="my-1 border-t border-green-200" />
              ) : (
                <li
                  key={i}
                  className="rounded-xl border border-green-200 bg-white px-4 py-2.5 text-sm text-slate-800 shadow-xs"
                >
                  <em>{highlightPrepositions(rule)}</em>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Examples */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Examples
          </p>
          <ul className="space-y-2">
            {current?.examples.map((example) => (
              <li key={example} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-0.5 text-green-500">✓</span>
                <em>{highlightPrepositions(example)}</em>
              </li>
            ))}
          </ul>
        </div>

        {/* Highlights */}
        <div className="rounded-2xl border border-green-100 bg-green-50 p-4">
          <p className="mb-2.5 text-[11px] font-bold uppercase tracking-widest text-green-600">
            Key forms
          </p>
          <div className="flex flex-wrap gap-2">
            {section.highlights.map((item) => (
              <code
                key={item}
                className="rounded-lg bg-white px-3 py-1 text-sm font-semibold text-green-800 ring-1 ring-green-200"
              >
                {item}
              </code>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
