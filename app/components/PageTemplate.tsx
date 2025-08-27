'use client'

interface PageTemplateProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
  description?: string
}

export default function PageTemplate({ children, title, subtitle, description }: PageTemplateProps) {
  return (
    <div className="min-h-screen pt-20">
      {title && (
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            {subtitle && <p className="text-xl mb-2 opacity-90">{subtitle}</p>}
            {description && <p className="text-lg opacity-75">{description}</p>}
          </div>
        </div>
      )}
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  )
}
