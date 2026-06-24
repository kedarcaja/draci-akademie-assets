interface SectionPreviewProps {
  title: string
  description?: string
  children: React.ReactNode
  count?: number
}

export default function SectionPreview({ title, description, children, count }: SectionPreviewProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-end gap-3 border-b border-brand-border pb-3">
        <div className="flex-1">
          <h2 className="font-cinzel text-brand-parchment font-semibold text-sm tracking-widest uppercase">
            {title}
            {count !== undefined && (
              <span className="ml-2 text-brand-text-dim font-inter font-normal normal-case tracking-normal">({count})</span>
            )}
          </h2>
          {description && (
            <p className="text-brand-text-dim text-xs mt-0.5">{description}</p>
          )}
        </div>
      </div>
      {children}
    </section>
  )
}
