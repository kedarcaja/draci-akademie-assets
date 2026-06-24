export type AssetStatus = 'ready' | 'placeholder' | 'missing'

export interface Asset {
  id: string
  name: string
  localPath: string
  publicUrl: string
  alt: string
  status: AssetStatus
  section: string
  folder: string
}

const CDN = 'https://assets.draciakademie.cz'

export const assets: Asset[] = [
  // Global
  {
    id: 'logo-dragon-emblem',
    name: 'Dragon Emblem – logo',
    localPath: 'public/images/global/logo/dragon-emblem.png',
    publicUrl: `${CDN}/images/global/logo/dragon-emblem.png`,
    alt: 'Dračí akademie – logo',
    status: 'ready',
    section: 'global',
    folder: 'logo',
  },
  // Hero obrázky – hlavní stránky
  {
    id: 'hero-akademie',
    name: 'Hero – Akademie',
    localPath: 'public/images/akademie/hero/hero-akademie.jpg',
    publicUrl: `${CDN}/images/akademie/hero/hero-akademie.jpg`,
    alt: 'Dračí akademie jako kreativní vzdělávací prostor pro děti a dospělé',
    status: 'ready',
    section: 'akademie',
    folder: 'hero',
  },
  {
    id: 'hero-zacni-tady',
    name: 'Hero – Začni tady',
    localPath: 'public/images/zacni-tady/hero/hero-zacni-tady.png',
    publicUrl: `${CDN}/images/zacni-tady/hero/hero-zacni-tady.png`,
    alt: 'Malý dračí průvodce ukazuje návštěvníkovi cestu do Dračí akademie',
    status: 'missing',
    section: 'zacni-tady',
    folder: 'hero',
  },
  {
    id: 'hero-kurzy',
    name: 'Hero – Kurzy',
    localPath: 'public/images/kurzy/hero/hero-kurzy.png',
    publicUrl: `${CDN}/images/kurzy/hero/hero-kurzy.png`,
    alt: 'Mapa dračí stezky s kurzy a úrovněmi Dračí akademie',
    status: 'missing',
    section: 'kurzy',
    folder: 'hero',
  },
  {
    id: 'hero-deti-a-rodice',
    name: 'Hero – Děti a rodiče',
    localPath: 'public/images/deti-a-rodice/hero/hero-deti-a-rodice.png',
    publicUrl: `${CDN}/images/deti-a-rodice/hero/hero-deti-a-rodice.png`,
    alt: 'Rodič a dítě tvoří společně u pracovního stolu',
    status: 'missing',
    section: 'deti-a-rodice',
    folder: 'hero',
  },
  {
    id: 'hero-skoly-a-ucitele',
    name: 'Hero – Školy a učitelé',
    localPath: 'public/images/skoly-a-ucitele/hero/hero-skoly-a-ucitele.png',
    publicUrl: `${CDN}/images/skoly-a-ucitele/hero/hero-skoly-a-ucitele.png`,
    alt: 'Děti tvoří společně ve školním workshopu Dračí akademie',
    status: 'missing',
    section: 'skoly-a-ucitele',
    folder: 'hero',
  },
  {
    id: 'hero-komunita',
    name: 'Hero – Komunita',
    localPath: 'public/images/komunita/hero/hero-komunita.png',
    publicUrl: `${CDN}/images/komunita/hero/hero-komunita.png`,
    alt: 'Komunita Dračí akademie tvoří společně u jednoho stolu',
    status: 'missing',
    section: 'komunita',
    folder: 'hero',
  },
  {
    id: 'hero-akce',
    name: 'Hero – Akce',
    localPath: 'public/images/akce/hero/hero-akce.png',
    publicUrl: `${CDN}/images/akce/hero/hero-akce.png`,
    alt: 'Workshop Dračí akademie – skupinové tvoření figurek',
    status: 'missing',
    section: 'akce',
    folder: 'hero',
  },
  {
    id: 'hero-obchod',
    name: 'Hero – Obchod',
    localPath: 'public/images/obchod/hero/hero-obchod.png',
    publicUrl: `${CDN}/images/obchod/hero/hero-obchod.png`,
    alt: 'Startovací balíčky, figurky, štětce a barvy Dračí akademie',
    status: 'missing',
    section: 'obchod',
    folder: 'hero',
  },
  {
    id: 'hero-reference',
    name: 'Hero – Reference',
    localPath: 'public/images/reference/hero/hero-reference.png',
    publicUrl: `${CDN}/images/reference/hero/hero-reference.png`,
    alt: 'Galerie prací tvůrců z Dračí akademie',
    status: 'missing',
    section: 'reference',
    folder: 'hero',
  },
  {
    id: 'hero-lektori',
    name: 'Hero – Lektoři',
    localPath: 'public/images/lektori/hero/hero-lektori.png',
    publicUrl: `${CDN}/images/lektori/hero/hero-lektori.png`,
    alt: 'Tým lektorů Dračí akademie',
    status: 'missing',
    section: 'lektori',
    folder: 'hero',
  },
  {
    id: 'hero-o-nas',
    name: 'Hero – O nás',
    localPath: 'public/images/o-nas/hero/hero-o-nas.png',
    publicUrl: `${CDN}/images/o-nas/hero/hero-o-nas.png`,
    alt: 'Ateliér Valiente Projectu a zakladatel Dračí akademie',
    status: 'missing',
    section: 'o-nas',
    folder: 'hero',
  },
  {
    id: 'hero-kontakt',
    name: 'Hero – Kontakt',
    localPath: 'public/images/kontakt/hero/hero-kontakt.png',
    publicUrl: `${CDN}/images/kontakt/hero/hero-kontakt.png`,
    alt: 'Dračí posel přináší zprávu pro tým Dračí akademie',
    status: 'missing',
    section: 'kontakt',
    folder: 'hero',
  },
  // Kurzy – stezky (placeholdery SVG)
  {
    id: 'stezka-prvni-figurka',
    name: 'Stezka – Cesta první figurky',
    localPath: 'public/images/kurzy/stezky/cesta-prvni-figurky.svg',
    publicUrl: `${CDN}/images/kurzy/stezky/cesta-prvni-figurky.svg`,
    alt: 'Cesta první figurky – rytíř v temném lese',
    status: 'placeholder',
    section: 'kurzy',
    folder: 'stezky',
  },
  {
    id: 'stezka-draci-trenink',
    name: 'Stezka – Dračí trénink',
    localPath: 'public/images/kurzy/stezky/draci-trenink.svg',
    publicUrl: `${CDN}/images/kurzy/stezky/draci-trenink.svg`,
    alt: 'Dračí trénink – velký modrý drak v noci u hradu',
    status: 'placeholder',
    section: 'kurzy',
    folder: 'stezky',
  },
  {
    id: 'stezka-akademie-barev',
    name: 'Stezka – Akademie barev',
    localPath: 'public/images/kurzy/stezky/akademie-barev.svg',
    publicUrl: `${CDN}/images/kurzy/stezky/akademie-barev.svg`,
    alt: 'Akademie barev – barevné kolo se štětci a nádobkami',
    status: 'placeholder',
    section: 'kurzy',
    folder: 'stezky',
  },
  {
    id: 'stezka-projektova-dilna',
    name: 'Stezka – Projektová dílna',
    localPath: 'public/images/kurzy/stezky/projektova-dilna.svg',
    publicUrl: `${CDN}/images/kurzy/stezky/projektova-dilna.svg`,
    alt: 'Projektová dílna – kamenná dílna s diorámem',
    status: 'placeholder',
    section: 'kurzy',
    folder: 'stezky',
  },
  // Sekce Akademie
  {
    id: 'akademie-pro-rodice',
    name: 'Sekce – Pro rodiče',
    localPath: 'public/images/akademie/sections/pro-rodice.jpg',
    publicUrl: `${CDN}/images/akademie/sections/pro-rodice.jpg`,
    alt: 'Rodič a dítě tvoří společně figurky u pracovního stolu',
    status: 'ready',
    section: 'akademie',
    folder: 'sections',
  },
]

export const sections = [
  'global', 'akademie', 'zacni-tady', 'kurzy', 'deti-a-rodice',
  'skoly-a-ucitele', 'komunita', 'akce', 'obchod', 'reference',
  'lektori', 'o-nas', 'kontakt',
]

export const statusColors: Record<AssetStatus, string> = {
  ready:       'bg-green-900/60 text-green-400 border border-green-700/40',
  placeholder: 'bg-amber-900/60 text-amber-400 border border-amber-700/40',
  missing:     'bg-red-900/60 text-red-400 border border-red-700/40',
}

export const statusLabels: Record<AssetStatus, string> = {
  ready:       'Připraveno',
  placeholder: 'Placeholder',
  missing:     'Chybí',
}
