import { useState } from 'react'
import { assets, sections } from '../data/assets'
import AssetCard from '../components/AssetCard'

export default function AssetsPreview() {
  const [activeSection, setActiveSection] = useState('all')

  const filtered = activeSection === 'all'
    ? assets
    : assets.filter(a => a.section === activeSection)

  const counts = {
    ready:       assets.filter(a => a.status === 'ready').length,
    placeholder: assets.filter(a => a.status === 'placeholder').length,
    missing:     assets.filter(a => a.status === 'missing').length,
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="section-title">Asset knihovna</h1>
          <p className="text-brand-text-muted text-sm mt-1">
            {assets.length} assetů · {counts.ready} připraveno · {counts.placeholder} placeholder · {counts.missing} chybí
          </p>
        </div>
      </div>

      {/* Section filter */}
      <div className="flex flex-wrap gap-1.5">
        <button
          onClick={() => setActiveSection('all')}
          className={`tag px-3 py-1 ${activeSection === 'all' ? 'bg-brand-gold/20 text-brand-gold border border-brand-gold/40' : 'bg-brand-card text-brand-text-muted border border-brand-border hover:text-brand-text'}`}
        >
          Vše ({assets.length})
        </button>
        {sections.map(s => {
          const count = assets.filter(a => a.section === s).length
          if (!count) return null
          return (
            <button
              key={s}
              onClick={() => setActiveSection(s)}
              className={`tag px-3 py-1 ${activeSection === s ? 'bg-brand-gold/20 text-brand-gold border border-brand-gold/40' : 'bg-brand-card text-brand-text-muted border border-brand-border hover:text-brand-text'}`}
            >
              {s} ({count})
            </button>
          )
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {filtered.map(asset => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>
    </div>
  )
}
