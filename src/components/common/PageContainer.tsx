import type { ReactNode } from 'react'

interface PageContainerProps {
  children: ReactNode
  className?: string
}

export default function PageContainer({ children, className = '' }: PageContainerProps) {
  return (
    <main
      className={`mx-auto min-h-screen w-full max-w-5xl px-4 pt-3 pb-20 sm:px-6 md:px-8 ${className}`}
    >
      {children}
    </main>
  )
}
