import { assets } from '../data/assets'
import { pages, statusColors, statusLabels } from '../data/pages'
import { sections } from '../data/assets'

export default function HomePreview() {
  const ready       = assets.filter(a => a.status === 'ready').length
  const placeholder = assets.filter(a => a.status === 'placeholder').length
  const missing     = assets.filter(a => a.status === 'missing').length
  const livePgs     = pages.filter(p => p.status === 'live').length
  const draftPgs    = pages.filter(p => p.status === 'draft').length

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="border-b border-brand-border pb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-px bg-brand-gold" />
          <span className="text-brand-gold text-xs tracking-widest uppercase">Valiente Project</span>
        </div>
        <h1 className="font-cinzel text-3xl font-bold text-brand-parchment">Dračí akademie</h1>
        <p className="text-brand-text-muted text-sm mt-2 max-w-xl">
          Asset systém, webové podklady a integrace se Systeme.io.
          Centrální správa obrázků, stránek a dokumentace projektu.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Assetů celkem', value: assets.length, color: 'text-brand-parchment' },
          { label: 'Připraveno',    value: ready,          color: 'text-green-400' },
          { label: 'Placeholdery', value: placeholder,    color: 'text-amber-400' },
          { label: 'Stránek',      value: pages.length,   color: 'text-brand-parchment' },
        ].map(({ label, value, color }) => (
          <div key={label} className="bg-brand-card border border-brand-border rounded-sm p-4">
            <p className={`text-2xl font-bold font-cinzel ${color}`}>{value}</p>
            <p className="text-brand-text-dim text-xs mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Sections overview */}
      <div>
        <h2 className="font-cinzel text-brand-parchment font-semibold text-sm tracking-widest uppercase mb-3">
          Sekce webu
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {sections.map(s => {
            const count = assets.filter(a => a.section === s).length
            return (
              <div key={s} className="bg-brand-card border border-brand-border rounded-sm px-3 py-2.5 flex items-center justify-between">
                <span className="text-brand-text text-sm">{s}</span>
                <span className="text-brand-text-dim text-xs">{count} assetů</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Pages status */}
      <div>
        <h2 className="font-cinzel text-brand-parchment font-semibold text-sm tracking-widest uppercase mb-3">
          Stav stránek
        </h2>
        <div className="space-y-1.5">
          {pages.map(page => (
            <div key={page.id} className="bg-brand-card border border-brand-border rounded-sm px-4 py-3 flex items-center gap-4">
              <span className={`tag ${statusColors[page.status]}`}>{statusLabels[page.status]}</span>
              <span className="text-brand-parchment text-sm font-medium">{page.title}</span>
              <span className="text-brand-text-dim text-xs ml-auto">{page.slug}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CDN info */}
      <div className="bg-brand-card border border-brand-gold/20 rounded-sm p-4">
        <p className="text-brand-gold text-xs tracking-widest uppercase font-medium mb-2">CDN Base URL</p>
        <code className="text-brand-parchment text-sm font-mono">https://assets.draciakademie.cz/images/</code>
        <p className="text-brand-text-dim text-xs mt-2">
          Obsah složky <code className="text-brand-text-muted">/public</code> je automaticky deployován přes GitHub Actions na každý push do master.
        </p>
      </div>
    </div>
  )
}
