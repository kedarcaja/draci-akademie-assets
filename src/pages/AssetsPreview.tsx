import { useState } from 'react'
import { assets, sections } from '../data/assets'
import AssetCard from '../components/AssetCard'
import HtmlSnippetCard from '../components/HtmlSnippetCard'
import SectionPreview from '../components/SectionPreview'

const folderTree = [
  { section: 'global',          folders: ['logo', 'backgrounds', 'ornaments', 'icons', 'textures'] },
  { section: 'kampus',          folders: ['mapa', 'budovy', 'hotspots'] },
  { section: 'akademie',        folders: ['hero', 'sections', 'cards'] },
  { section: 'zacni-tady',      folders: ['hero', 'cards', 'sections'] },
  { section: 'stezky',          folders: ['hero', 'levels', 'courses'] },
  { section: 'deti-a-rodice',   folders: ['hero', 'age-groups', 'benefits', 'products'] },
  { section: 'skoly-a-ucitele', folders: ['hero', 'workshops', 'materials'] },
  { section: 'komunita',        folders: ['hero', 'discord', 'roles', 'gallery', 'challenges'] },
  { section: 'obchod',          folders: ['hero', 'products', 'bundles', 'membership'] },
  { section: 'o-nas',           folders: ['hero', 'mission', 'team', 'partners'] },
  { section: 'kontakt',         folders: ['hero', 'icons'] },
]

export default function AssetsPreview() {
  const [activeSection, setActiveSection] = useState('all')

  const filtered = activeSection === 'all' ? assets : assets.filter(a => a.section === activeSection)
  const ready       = assets.filter(a => a.status === 'ready').length
  const placeholder = assets.filter(a => a.status === 'placeholder').length
  const missing     = assets.filter(a => a.status === 'missing').length

  return (
    <div className="space-y-10">

      {/* Asset manifest */}
      <SectionPreview
        title="Asset manifest"
        description="Všechny assety s cestami, veřejnými URL, alt texty a HTML snippety."
        count={assets.length}
      >
        {/* Stats */}
        <div className="flex gap-4 text-xs mb-4">
          <span className="text-green-400">{ready} připraveno</span>
          <span className="text-amber-400">{placeholder} placeholder</span>
          <span className="text-red-400">{missing} chybí</span>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <button
            onClick={() => setActiveSection('all')}
            className={`tag px-3 py-1 ${activeSection === 'all' ? 'bg-brand-gold/20 text-brand-gold border border-brand-gold/40' : 'bg-brand-card text-brand-text-muted border border-brand-border'}`}
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
                className={`tag px-3 py-1 ${activeSection === s ? 'bg-brand-gold/20 text-brand-gold border border-brand-gold/40' : 'bg-brand-card text-brand-text-muted border border-brand-border'}`}
              >
                {s} ({count})
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {filtered.map(asset => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>
      </SectionPreview>

      {/* Folder tree */}
      <SectionPreview
        title="Struktura složek"
        description="public/images/ — strom všech složek pro assety."
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {folderTree.map(({ section, folders }) => (
            <div key={section} className="bg-brand-card border border-brand-border rounded-sm p-3">
              <p className="text-brand-gold text-xs font-mono font-medium mb-2">{section}/</p>
              <div className="space-y-0.5">
                {folders.map(f => (
                  <p key={f} className="text-brand-text-dim text-[11px] font-mono">
                    <span className="text-brand-border mr-1">└</span>{f}/
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionPreview>

      {/* Systeme.io example */}
      <SectionPreview
        title="Ukázka použití v Systeme.io"
        description="Zkopíruj HTML snippet a vlož do Raw HTML bloku v Systeme.io."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <HtmlSnippetCard
            label="Základní použití"
            url="https://assets.draciakademie.cz/images/akademie/hero/hero-akademie.jpg"
            alt="Dračí akademie jako kreativní vzdělávací prostor pro děti a dospělé"
          />
          <HtmlSnippetCard
            label="S cache bustingem (?v=2)"
            url="https://assets.draciakademie.cz/images/akademie/hero/hero-akademie.jpg"
            alt="Dračí akademie jako kreativní vzdělávací prostor pro děti a dospělé"
            version={2}
          />
        </div>
      </SectionPreview>

    </div>
  )
}
