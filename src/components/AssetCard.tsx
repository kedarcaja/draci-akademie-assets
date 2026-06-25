import { useState } from 'react'
import type { Asset } from '../data/assets'
import { statusColors, statusLabels } from '../data/assets'

interface AssetCardProps {
  asset: Asset
}

export default function AssetCard({ asset }: AssetCardProps) {
  const [copied, setCopied] = useState(false)

  const copyUrl = () => {
    navigator.clipboard.writeText(asset.publicUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const copyTag = () => {
    const tag = `<img\n  src="${asset.publicUrl}"\n  alt="${asset.alt}"\n/>`
    navigator.clipboard.writeText(tag)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="asset-card group flex flex-col">
      {/* Preview */}
      <div className="relative h-36 bg-brand-darker flex items-center justify-center overflow-hidden">
        <img
          src={asset.publicUrl}
          alt={asset.alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            const el = e.target as HTMLImageElement
            el.style.display = 'none'
            el.parentElement!.innerHTML += '<span class="text-brand-text-dim text-xs">Obrázek chybí</span>'
          }}
        />
        <span className={`absolute top-2 right-2 tag ${statusColors[asset.status]}`}>
          {statusLabels[asset.status]}
        </span>
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col gap-2 flex-1">
        <div>
          <p className="text-brand-parchment text-sm font-medium leading-tight">{asset.name}</p>
          <p className="text-brand-text-dim text-[10px] mt-0.5 truncate">{asset.publicUrl.replace('https://assets.draciakademie.cz/', '')}</p>
        </div>

        {/* Actions */}
        <div className="flex gap-1.5 mt-auto pt-1">
          <button
            onClick={copyUrl}
            className="flex-1 text-[11px] py-1.5 border border-brand-border text-brand-text-muted hover:text-brand-gold hover:border-brand-gold/40 transition-all duration-150 rounded-sm"
          >
            {copied ? '✓ Zkopírováno' : 'URL'}
          </button>
          <button
            onClick={copyTag}
            className="flex-1 text-[11px] py-1.5 border border-brand-border text-brand-text-muted hover:text-brand-gold hover:border-brand-gold/40 transition-all duration-150 rounded-sm"
          >
            &lt;img&gt; tag
          </button>
        </div>
      </div>
    </div>
  )
}
