import { assets } from '../data/assets'
import { pages } from '../data/pages'
import { funnels } from '../data/funnels'
import { campusBuildings } from '../data/campusBuildings'

export default function HomePreview() {
  const ready  = assets.filter(a => a.status === 'ready').length
  const missing = assets.filter(a => a.status === 'missing').length

  const stats = [
    { label: 'Budov kampusu',    value: campusBuildings.length, color: 'text-brand-gold' },
    { label: 'Webových stránek', value: pages.length,           color: 'text-brand-parchment' },
    { label: 'Trychtýřů',        value: funnels.length,         color: 'text-blue-400' },
    { label: 'Assetů celkem',    value: assets.length,          color: 'text-brand-parchment' },
    { label: 'Připraveno',       value: ready,                   color: 'text-green-400' },
    { label: 'Chybí',            value: missing,                 color: 'text-red-400' },
  ]

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="border-b border-brand-border pb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-px bg-brand-gold" />
          <span className="text-brand-gold text-xs tracking-widest uppercase">Valiente Project</span>
        </div>
        <h1 className="font-cinzel text-3xl font-bold text-brand-parchment">Dračí akademie</h1>
        <p className="text-brand-text-muted text-sm mt-1 max-w-2xl">
          Asset systém, webové podklady a integrace se Systeme.io.
          Centrální správa obrázků, stránek, trychtýřů a dokumentace projektu.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {stats.map(({ label, value, color }) => (
          <div key={label} className="bg-brand-card border border-brand-border rounded-sm p-3 text-center">
            <p className={`text-2xl font-bold font-cinzel ${color}`}>{value}</p>
            <p className="text-brand-text-dim text-[10px] mt-1 leading-tight">{label}</p>
          </div>
        ))}
      </div>

      {/* CDN info */}
      <div className="bg-brand-card border border-brand-gold/20 rounded-sm p-4 space-y-3">
        <p className="text-brand-gold text-xs tracking-widest uppercase font-medium">CDN Base URL</p>
        <code className="block text-brand-parchment text-sm font-mono">
          https://assets.draciakademie.cz/images/
        </code>
        <p className="text-brand-text-dim text-xs">
          Obsah <code className="text-brand-text-muted">/public</code> se automaticky deployuje přes GitHub Actions na každý push do master.
          DNS: <code className="text-brand-text-muted">assets CNAME kedarcaja.github.io</code>
        </p>
        <div className="pt-2 border-t border-brand-border">
          <p className="text-brand-text-dim text-[10px] uppercase tracking-widest mb-2">Příklad použití v Systeme.io</p>
          <pre className="text-[11px] text-brand-parchment font-mono leading-relaxed">{`<img
  src="https://assets.draciakademie.cz/images/akademie/hero/hero-akademie.jpg"
  alt="Dračí akademie jako kreativní vzdělávací prostor pro děti a dospělé"
/>`}</pre>
        </div>
      </div>

      {/* Pages overview */}
      <div>
        <h2 className="font-cinzel text-brand-parchment font-semibold text-xs tracking-widest uppercase mb-3">
          Webové stránky
        </h2>
        <div className="space-y-1">
          {pages.map(p => (
            <div key={p.id} className="bg-brand-card border border-brand-border rounded-sm px-4 py-2.5 flex items-center gap-4">
              <span className="text-brand-text-dim text-xs font-mono w-36 shrink-0">{p.slug}</span>
              <span className="text-brand-text text-sm flex-1">{p.title}</span>
              <span className="text-brand-text-dim text-xs hidden sm:block">{p.purpose.slice(0, 60)}…</span>
            </div>
          ))}
        </div>
      </div>

      {/* Funnels overview */}
      <div>
        <h2 className="font-cinzel text-brand-parchment font-semibold text-xs tracking-widest uppercase mb-3">
          Trychtýře
        </h2>
        <div className="space-y-1">
          {funnels.map(f => (
            <div key={f.id} className="bg-brand-card border border-brand-border rounded-sm px-4 py-2.5 flex items-center gap-4">
              <span className="text-blue-400/70 text-xs font-mono w-36 shrink-0">{f.slug}</span>
              <span className="text-brand-text text-sm flex-1">{f.title}</span>
              <span className="text-brand-text-dim text-xs hidden sm:block">{f.goal.slice(0, 60)}…</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
