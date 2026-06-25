import type { Funnel } from '../data/funnels'
import { funnelStatusColors, funnelStatusLabels } from '../data/funnels'

interface FunnelPreviewProps {
  funnel: Funnel
}

export default function FunnelPreview({ funnel }: FunnelPreviewProps) {
  return (
    <div className="asset-card flex flex-col p-4 gap-3">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-cinzel text-brand-parchment font-semibold text-sm leading-tight">{funnel.title}</h3>
        <span className={`tag shrink-0 ${funnelStatusColors[funnel.status]}`}>
          {funnelStatusLabels[funnel.status]}
        </span>
      </div>

      <p className="text-brand-text-dim text-xs font-mono">{funnel.slug}</p>

      <p className="text-brand-text-muted text-xs leading-relaxed">{funnel.goal}</p>

      <div className="pt-2 border-t border-brand-border">
        <p className="text-brand-text-dim text-[10px] tracking-widest uppercase mb-2">Kroky</p>
        <ol className="space-y-1">
          {funnel.steps.map((step, i) => (
            <li key={i} className="flex gap-2 text-xs text-brand-text-muted">
              <span className="text-brand-gold/60 shrink-0 font-mono">{i + 1}.</span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
