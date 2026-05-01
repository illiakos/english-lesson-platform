import { useState } from 'react'
import { assetUrl } from '../../utils/assetUrl'

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  fallbackLabel?: string
  fallbackIcon?: string
}

const GRADIENT_VARIANTS = [
  'from-orange-200 via-amber-100 to-yellow-100',
  'from-blue-100 via-purple-50 to-green-100',
  'from-pink-100 via-rose-50 to-orange-100',
  'from-green-100 via-teal-50 to-blue-100',
]

export default function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackLabel,
  fallbackIcon = '🖼️',
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false)

  /* Pick a stable gradient based on the src string to avoid flicker on re-render */
  const gradientIndex =
    src.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % GRADIENT_VARIANTS.length
  const gradient = GRADIENT_VARIANTS[gradientIndex]

  if (error || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-linear-to-br ${gradient} ${className}`}
        aria-label={alt}
      >
        <span className="text-3xl">{fallbackIcon}</span>
        {fallbackLabel && (
          <span className="px-2 text-center text-xs font-semibold text-slate-500">
            {fallbackLabel}
          </span>
        )}
        <span className="text-[10px] text-slate-400">Add image later</span>
      </div>
    )
  }

  return (
    <img
      src={assetUrl(src)}
      alt={alt}
      onError={() => setError(true)}
      className={className}
    />
  )
}
