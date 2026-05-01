import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'success' | 'danger-ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

const VARIANTS: Record<Variant, string> = {
  primary:
    'text-white bg-linear-to-br from-orange-400 to-orange-600 shadow-sm shadow-orange-500/30 hover:shadow-md hover:shadow-orange-500/40 hover:from-orange-500 hover:to-orange-600 disabled:from-slate-200 disabled:to-slate-200 disabled:text-slate-400 disabled:shadow-none',
  success:
    'text-white bg-linear-to-br from-green-400 to-green-600 shadow-sm shadow-green-500/30 hover:shadow-md hover:shadow-green-500/40 hover:from-green-500 hover:to-green-600 disabled:from-slate-200 disabled:to-slate-200 disabled:text-slate-400 disabled:shadow-none',
  secondary:
    'text-slate-700 bg-white ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300 disabled:text-slate-300 disabled:bg-slate-50',
  ghost:
    'text-slate-600 bg-transparent hover:bg-slate-100 hover:text-slate-900 disabled:text-slate-300',
  'danger-ghost':
    'text-slate-500 bg-transparent hover:bg-red-50 hover:text-red-600 disabled:text-slate-300',
}

const SIZES: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-xs gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-6 py-3 text-base gap-2',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`inline-flex items-center justify-center rounded-xl font-bold tracking-tight transition-all duration-150 active:scale-[0.97] disabled:cursor-not-allowed disabled:active:scale-100 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    >
      {iconLeft && <span className="-ml-0.5 inline-flex shrink-0">{iconLeft}</span>}
      {children}
      {iconRight && <span className="-mr-0.5 inline-flex shrink-0">{iconRight}</span>}
    </button>
  )
}
