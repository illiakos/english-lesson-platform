import { useState } from 'react'
import type { GrammarTabsSection } from '../../types/lesson'

interface GrammarTabsProps {
  section: GrammarTabsSection
}

export default function GrammarTabs({ section }: GrammarTabsProps) {
  const [activeTab, setActiveTab] = useState(section.tabs[0]?.label ?? '')
  const current = section.tabs.find((tab) => tab.label === activeTab) ?? section.tabs[0]

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-extrabold text-green-700">
        {section.emoji} {section.title}
      </h2>

      {/* ── Tabs ─────────────────────────────────────────────── */}
      <div className="flex rounded-2xl bg-slate-100 p-1.5 gap-1">
        {section.tabs.map((tab) => {
          const isActive = tab.label === activeTab
          return (
            <button
              key={tab.label}
              type="button"
              onClick={() => setActiveTab(tab.label)}
              className={`flex-1 rounded-xl py-2 text-sm font-bold transition-all ${
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

        {/* Rules box */}
        <div className="rounded-2xl bg-slate-900 p-5 text-slate-100">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Structure
          </p>
          <ul className="space-y-2">
            {current?.rules.map((rule) => (
              <li key={rule} className="flex items-start gap-2 font-mono text-sm">
                <span className="mt-0.5 text-orange-400">→</span>
                <span>{rule}</span>
              </li>
            ))}
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
                <em>{example}</em>
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
