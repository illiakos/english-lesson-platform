import type { ReactNode } from 'react'

interface SectionCardProps {
  children: ReactNode
  label?: string
  completed?: boolean
  noPadding?: boolean
  className?: string
}

export default function SectionCard({
  children,
  label,
  completed = false,
  noPadding = false,
  className = '',
}: SectionCardProps) {
  return (
    <section
      className={`group relative overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-stone-200/70 transition-all duration-200 hover:shadow-card-md ${className}`}
    >
      {/* Top label strip */}
      {label && (
        <div className="flex items-center justify-between border-b border-stone-100 bg-linear-to-r from-stone-50/60 via-white to-stone-50/60 px-5 py-2.5 md:px-7">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-stone-400">
            {label}
          </span>
          {completed && (
            <span className="flex items-center gap-1.5 rounded-full bg-green-100 px-2.5 py-0.5 text-[11px] font-bold text-green-700 ring-1 ring-green-200/60 anim-pop">
              <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" aria-hidden>
                <circle cx="6" cy="6" r="6" fill="#16a34a" />
                <path
                  d="M3.5 6l2 2 3-3"
                  stroke="#fff"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Completed
            </span>
          )}
        </div>
      )}

      <div className={noPadding ? '' : 'p-5 md:p-7'}>
        {children}
      </div>
    </section>
  )
}
