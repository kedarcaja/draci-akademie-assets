import { campusBuildings } from '../data/campusBuildings'
import CampusBuildingCard from '../components/CampusBuildingCard'
import SectionPreview from '../components/SectionPreview'

const buildingsByType = {
  page:    campusBuildings.filter(b => b.type === 'page'),
  funnel:  campusBuildings.filter(b => b.type === 'funnel'),
  section: campusBuildings.filter(b => b.type === 'section'),
}

export default function CampusPreview() {
  return (
    <div className="space-y-10">

      {/* Intro */}
      <div className="border-b border-brand-border pb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-px bg-brand-gold" />
          <span className="text-brand-gold text-xs tracking-widest uppercase">Kampus</span>
        </div>
        <h1 className="font-cinzel text-2xl font-bold text-brand-parchment">Kampus Dračí akademie</h1>
        <p className="text-brand-text-muted text-sm mt-2 max-w-2xl leading-relaxed">
          Dračí akademie není běžný web s kurzy. Je to interaktivní kampus. Každá budova reprezentuje jednu oblast akademie.
          Každá stránka má vlastní roli, vizuální metaforu a cílovou skupinu.
        </p>
        <div className="flex gap-6 mt-4 text-xs">
          <span className="text-brand-parchment">
            <strong className="font-cinzel text-brand-gold">{campusBuildings.length}</strong> budov celkem
          </span>
          <span className="text-brand-text-muted">
            <strong className="text-brand-parchment">{buildingsByType.page.length}</strong> stránek
          </span>
          <span className="text-blue-400">
            <strong>{buildingsByType.funnel.length}</strong> trychtýř
          </span>
          <span className="text-brand-text-muted">
            <strong className="text-brand-parchment">{buildingsByType.section.length}</strong> sekcí / oborů
          </span>
        </div>
      </div>

      {/* Map placeholder */}
      <div className="relative rounded-sm overflow-hidden border border-brand-gold/20 bg-brand-darker">
        <div className="h-40 flex items-center justify-center">
          <div className="text-center">
            <p className="text-4xl mb-3">🗺️</p>
            <p className="text-brand-parchment font-cinzel font-semibold text-sm">Mapa kampusu</p>
            <p className="text-brand-text-dim text-xs mt-1">
              Interaktivní mapa bude na:{' '}
              <code className="text-brand-text-muted">images/kampus/mapa/mapa-kampusu.png</code>
            </p>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(201,148,58,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,148,58,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Hlavní stránky */}
      <SectionPreview
        title="Budovy – webové stránky"
        description="Každá budova odkazuje na stránku, která vysvětluje, orientuje nebo buduje důvěru."
        count={buildingsByType.page.length}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {buildingsByType.page.map(b => (
            <CampusBuildingCard key={b.id} building={b} />
          ))}
        </div>
      </SectionPreview>

      {/* Trychtýře */}
      <SectionPreview
        title="Budovy – trychtýře"
        description="Budovy napojené na konverzní trychtýře. Vedou k nákupu, registraci nebo poptávce."
        count={buildingsByType.funnel.length}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {buildingsByType.funnel.map(b => (
            <CampusBuildingCard key={b.id} building={b} />
          ))}
        </div>
      </SectionPreview>

      {/* Sekce / obory */}
      <SectionPreview
        title="Budovy – sekce a obory"
        description="Části kampusu reprezentující konkrétní vzdělávací obory nebo funkce akademie."
        count={buildingsByType.section.length}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {buildingsByType.section.map(b => (
            <CampusBuildingCard key={b.id} building={b} />
          ))}
        </div>
      </SectionPreview>

      {/* Princip kampusu */}
      <div className="bg-brand-card border border-brand-gold/20 rounded-sm p-5 space-y-3">
        <p className="text-brand-gold text-xs tracking-widest uppercase font-medium">Hlavní princip</p>
        <p className="text-brand-parchment font-cinzel font-semibold">
          Nejsi na webu. Vstupuješ do akademie.
        </p>
        <p className="text-brand-text-muted text-sm leading-relaxed">
          Každá část webu je budova v kampusu a každá budova má jasnou funkci.
          Web nesmí působit jako sada podobných landing pages — každá stránka musí mít vlastní roli a vizuální metaforu.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-brand-border">
          {[
            { label: 'Akademie', meta: 'brána do světa / mapa kampusu' },
            { label: 'Začni tady', meta: 'orientační hala / rozcestník' },
            { label: 'Stezky', meta: 'síň postupu a vzdělávací mapa' },
            { label: 'Děti a rodiče', meta: 'teplý rodinný pracovní stůl' },
            { label: 'Školy', meta: 'profesionální učitelský pavilon' },
            { label: 'Komunita', meta: 'cech / guild hall' },
            { label: 'Obchod', meta: 'fantasy tržiště' },
            { label: 'O nás', meta: 'ateliér — skutečný příběh' },
          ].map(({ label, meta }) => (
            <div key={label} className="flex gap-2 text-xs">
              <span className="text-brand-gold font-medium w-28 shrink-0">{label}</span>
              <span className="text-brand-text-dim italic">{meta}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
