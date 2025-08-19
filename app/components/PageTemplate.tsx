'use client'

interface PageTemplateProps {
  children: React.ReactNode
}

export default function PageTemplate({ children }: PageTemplateProps) {
  return (
    <div className="min-h-screen pt-20">
      {children}
    </div>
  )
}
