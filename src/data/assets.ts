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
  // ── Global ──────────────────────────────────────────────────────────────────
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
  // ── Kampus ──────────────────────────────────────────────────────────────────
  {
    id: 'mapa-kampusu',
    name: 'Mapa kampusu',
    localPath: 'public/images/kampus/mapa/mapa-kampusu.png',
    publicUrl: `${CDN}/images/kampus/mapa/mapa-kampusu.png`,
    alt: 'Interaktivní mapa kampusu Dračí akademie s budovami jednotlivých oborů',
    status: 'missing',
    section: 'kampus',
    folder: 'mapa',
  },
  // ── Hero obrázky – hlavní stránky ───────────────────────────────────────────
  {
    id: 'hero-akademie',
    name: 'Hero – Akademie',
    localPath: 'public/images/akademie/hero/hero-akademie.jpg',
    publicUrl: `${CDN}/images/akademie/hero/hero-akademie.jpg`,
    alt: 'Dítě maluje figurku v dílně Dračí akademie za doprovodu malého dračího průvodce',
    status: 'ready',
    section: 'akademie',
    folder: 'hero',
  },
  {
    id: 'hero-zacni-tady',
    name: 'Hero – Začni tady',
    localPath: 'public/images/zacni-tady/hero/hero-zacni-tady.png',
    publicUrl: `${CDN}/images/zacni-tady/hero/hero-zacni-tady.png`,
    alt: 'Hlavní brána Dračí akademie s dračím průvodcem pro nové návštěvníky',
    status: 'missing',
    section: 'zacni-tady',
    folder: 'hero',
  },
  {
    id: 'hero-stezky',
    name: 'Hero – Stezky',
    localPath: 'public/images/stezky/hero/hero-stezky.png',
    publicUrl: `${CDN}/images/stezky/hero/hero-stezky.png`,
    alt: 'Síň stezek Dračí akademie s mapou vzdělávací cesty a osvětlenými pergameny',
    status: 'missing',
    section: 'stezky',
    folder: 'hero',
  },
  {
    id: 'hero-deti-a-rodice',
    name: 'Hero – Děti a rodiče',
    localPath: 'public/images/deti-a-rodice/hero/hero-deti-a-rodice.png',
    publicUrl: `${CDN}/images/deti-a-rodice/hero/hero-deti-a-rodice.png`,
    alt: 'Rodič a dítě tvoří společně u pracovního stolu ve světle dílny',
    status: 'missing',
    section: 'deti-a-rodice',
    folder: 'hero',
  },
  {
    id: 'hero-skoly-a-ucitele',
    name: 'Hero – Školy a učitelé',
    localPath: 'public/images/skoly-a-ucitele/hero/hero-skoly-a-ucitele.png',
    publicUrl: `${CDN}/images/skoly-a-ucitele/hero/hero-skoly-a-ucitele.png`,
    alt: 'Děti tvoří společně ve školním programu Dračí akademie pod vedením lektora',
    status: 'missing',
    section: 'skoly-a-ucitele',
    folder: 'hero',
  },
  {
    id: 'hero-komunita',
    name: 'Hero – Komunita',
    localPath: 'public/images/komunita/hero/hero-komunita.png',
    publicUrl: `${CDN}/images/komunita/hero/hero-komunita.png`,
    alt: 'Komunita Dračí akademie tvoří společně u jednoho stolu při svíčkách',
    status: 'missing',
    section: 'komunita',
    folder: 'hero',
  },
  {
    id: 'hero-obchod',
    name: 'Hero – Obchod',
    localPath: 'public/images/obchod/hero/hero-obchod.png',
    publicUrl: `${CDN}/images/obchod/hero/hero-obchod.png`,
    alt: 'Tržiště akademie – startovací balíčky, figurky, štětce a barvy na fantasy pultu',
    status: 'missing',
    section: 'obchod',
    folder: 'hero',
  },
  {
    id: 'hero-o-nas',
    name: 'Hero – O nás',
    localPath: 'public/images/o-nas/hero/hero-o-nas.png',
    publicUrl: `${CDN}/images/o-nas/hero/hero-o-nas.png`,
    alt: 'Ateliér Valiente Projectu s mapou, skicáky, štětci a tvůrčími nástroji',
    status: 'missing',
    section: 'o-nas',
    folder: 'hero',
  },
  {
    id: 'hero-kontakt',
    name: 'Hero – Kontakt',
    localPath: 'public/images/kontakt/hero/hero-kontakt.png',
    publicUrl: `${CDN}/images/kontakt/hero/hero-kontakt.png`,
    alt: 'Dračí pošta jako kontaktní místo akademie – drak s obálkou a přátelský prostor',
    status: 'missing',
    section: 'kontakt',
    folder: 'hero',
  },
  // ── Stezky – vzdělávací obory ────────────────────────────────────────────────
  {
    id: 'stezka-prvni-figurka',
    name: 'Stezka – Cesta první figurky',
    localPath: 'public/images/stezky/courses/cesta-prvni-figurky.svg',
    publicUrl: `${CDN}/images/stezky/courses/cesta-prvni-figurky.svg`,
    alt: 'Cesta první figurky – rytíř v temném lese s pochodní',
    status: 'placeholder',
    section: 'stezky',
    folder: 'courses',
  },
  {
    id: 'stezka-draci-trenink',
    name: 'Stezka – Dračí trénink',
    localPath: 'public/images/stezky/courses/draci-trenink.svg',
    publicUrl: `${CDN}/images/stezky/courses/draci-trenink.svg`,
    alt: 'Dračí trénink – velký modrý drak v noci u hradu',
    status: 'placeholder',
    section: 'stezky',
    folder: 'courses',
  },
  {
    id: 'stezka-akademie-barev',
    name: 'Stezka – Akademie barev',
    localPath: 'public/images/stezky/courses/akademie-barev.svg',
    publicUrl: `${CDN}/images/stezky/courses/akademie-barev.svg`,
    alt: 'Akademie barev – barevné kolo se štětci a nádobkami s barvami',
    status: 'placeholder',
    section: 'stezky',
    folder: 'courses',
  },
  {
    id: 'stezka-projektova-dilna',
    name: 'Stezka – Projektová dílna',
    localPath: 'public/images/stezky/courses/projektova-dilna.svg',
    publicUrl: `${CDN}/images/stezky/courses/projektova-dilna.svg`,
    alt: 'Projektová dílna – kamenná dílna s diorámem a řemeslnickými nástroji',
    status: 'placeholder',
    section: 'stezky',
    folder: 'courses',
  },
  // ── Akademie – sekce ─────────────────────────────────────────────────────────
  {
    id: 'akademie-pro-rodice',
    name: 'Sekce – Pro rodiče',
    localPath: 'public/images/akademie/sections/pro-rodice.jpg',
    publicUrl: `${CDN}/images/akademie/sections/pro-rodice.jpg`,
    alt: 'Rodič a dítě tvoří společně figurky u pracovního stolu při teplém světle',
    status: 'ready',
    section: 'akademie',
    folder: 'sections',
  },
]

export const sections = [
  'global', 'kampus', 'akademie', 'zacni-tady', 'stezky', 'deti-a-rodice',
  'skoly-a-ucitele', 'komunita', 'obchod', 'o-nas', 'kontakt',
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
