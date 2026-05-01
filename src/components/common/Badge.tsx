interface LevelBadgeProps {
  level: string
  className?: string
  size?: 'sm' | 'md'
}

const LEVEL_COLORS: Record<string, string> = {
  A1: 'bg-emerald-100 text-emerald-700 ring-emerald-200/70',
  A2: 'bg-emerald-100 text-emerald-700 ring-emerald-200/70',
  'A1/A2': 'bg-emerald-100 text-emerald-700 ring-emerald-200/70',
  B1: 'bg-orange-100 text-orange-700 ring-orange-200/70',
  B2: 'bg-rose-100 text-rose-700 ring-rose-200/70',
  C1: 'bg-violet-100 text-violet-700 ring-violet-200/70',
  C2: 'bg-violet-100 text-violet-700 ring-violet-200/70',
}

export function LevelBadge({ level, className = '', size = 'sm' }: LevelBadgeProps) {
  const colors =
    LEVEL_COLORS[level] ?? 'bg-stone-100 text-stone-700 ring-stone-200/70'
  const sizing =
    size === 'md' ? 'px-3.5 py-1 text-sm' : 'px-2.5 py-0.5 text-xs'
  return (
    <span
      className={`inline-flex items-center rounded-full font-bold tracking-wide ring-1 backdrop-blur-sm ${colors} ${sizing} ${className}`}
    >
      {level}
    </span>
  )
}

interface StatusBadgeProps {
  children: React.ReactNode
  variant?: 'green' | 'orange' | 'blue' | 'purple' | 'pink' | 'slate'
  className?: string
}

const STATUS_COLORS = {
  green: 'bg-green-100 text-green-700 ring-green-200/70',
  orange: 'bg-orange-100 text-orange-700 ring-orange-200/70',
  blue: 'bg-blue-100 text-blue-700 ring-blue-200/70',
  purple: 'bg-violet-100 text-violet-700 ring-violet-200/70',
  pink: 'bg-pink-100 text-pink-700 ring-pink-200/70',
  slate: 'bg-stone-100 text-stone-600 ring-stone-200/70',
}

export function StatusBadge({
  children,
  variant = 'slate',
  className = '',
}: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold ring-1 ${STATUS_COLORS[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
