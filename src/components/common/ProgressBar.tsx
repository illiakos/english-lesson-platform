interface ProgressBarProps {
  value: number
  size?: 'sm' | 'md' | 'lg'
  variant?: 'orange' | 'green' | 'auto'
  showLabel?: boolean
  className?: string
}

const SIZES = {
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-3.5',
}

const FILLS = {
  orange: 'bg-linear-to-r from-orange-400 via-orange-500 to-orange-500',
  green: 'bg-linear-to-r from-green-400 via-emerald-500 to-emerald-500',
}

export default function ProgressBar({
  value,
  size = 'md',
  variant = 'auto',
  showLabel = false,
  className = '',
}: ProgressBarProps) {
  const safe = Math.max(0, Math.min(100, value))
  const fill = variant === 'auto' ? (safe === 100 ? FILLS.green : FILLS.orange) : FILLS[variant]

  return (
    <div className={className}>
      <div className={`relative overflow-hidden rounded-full bg-stone-200/70 ${SIZES[size]}`}>
        <div
          role="progressbar"
          aria-valuenow={safe}
          aria-valuemin={0}
          aria-valuemax={100}
          className={`absolute inset-y-0 left-0 rounded-full transition-all duration-700 ease-out ${fill}`}
          style={{ width: `${safe}%` }}
        />
        {/* Subtle shine */}
        {safe > 0 && safe < 100 && (
          <div
            className="absolute inset-y-0 left-0 rounded-full opacity-30 mix-blend-overlay"
            style={{
              width: `${safe}%`,
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255,255,255,.6) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 2.4s linear infinite',
            }}
          />
        )}
      </div>
      {showLabel && (
        <div className="mt-1 text-right text-[11px] font-bold tabular-nums text-stone-500">
          {safe}%
        </div>
      )}
    </div>
  )
}
