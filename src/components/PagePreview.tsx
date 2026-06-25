import type { Page } from '../data/pages'
import { statusColors, statusLabels } from '../data/pages'

interface PagePreviewProps {
  page: Page
}

export default function PagePreview({ page }: PagePreviewProps) {
  return (
    <div className="asset-card flex flex-col p-4 gap-3">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-cinzel text-brand-parchment font-semibold text-sm leading-tight">{page.title}</h3>
        <span className={`tag shrink-0 ${statusColors[page.status]}`}>{statusLabels[page.status]}</span>
      </div>

      <p className="text-brand-text-dim text-xs font-mono">{page.slug}</p>

      <p className="text-brand-text-muted text-xs leading-relaxed flex-1">{page.purpose}</p>

      {page.mainQuestion && (
        <p className="text-brand-text-dim text-[11px] italic border-l-2 border-brand-gold/30 pl-2 leading-snug">
          {page.mainQuestion}
        </p>
      )}

      <div className="pt-2 border-t border-brand-border space-y-1.5">
        <div className="flex gap-2">
          <span className="text-brand-text-dim text-[10px] tracking-widest uppercase w-14 shrink-0">CTA</span>
          <span className="text-brand-gold text-xs">{page.primaryCta ?? page.cta}</span>
        </div>
        {page.visualMetaphor && (
          <div className="flex gap-2">
            <span className="text-brand-text-dim text-[10px] tracking-widest uppercase w-14 shrink-0">Metafora</span>
            <span className="text-brand-text-muted text-[11px] truncate">{page.visualMetaphor}</span>
          </div>
        )}
        <div className="flex gap-2">
          <span className="text-brand-text-dim text-[10px] tracking-widest uppercase w-14 shrink-0">Složka</span>
          <span className="text-brand-text-dim text-[11px] font-mono truncate">{page.imageFolder}</span>
        </div>
      </div>
    </div>
  )
}
