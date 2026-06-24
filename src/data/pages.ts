export type PageStatus = 'live' | 'draft' | 'planned'

export interface Page {
  id: string
  title: string
  slug: string
  url: string
  status: PageStatus
  purpose: string
  cta: string
  imageFolder: string
}

const BASE = 'https://draciakademie.cz'

export const pages: Page[] = [
  {
    id: 'akademie',
    title: 'Dračí akademie',
    slug: '/draci-akademie',
    url: `${BASE}/draci-akademie`,
    status: 'draft',
    purpose: 'Hlavní vstup do Dračí akademie. Vysvětluje co to je, proč to existuje a co tady návštěvník najde.',
    cta: 'Vstoupit do akademie',
    imageFolder: 'public/images/akademie/',
  },
  {
    id: 'zacni-tady',
    title: 'Začni tady',
    slug: '/zacni-tady',
    url: `${BASE}/zacni-tady`,
    status: 'planned',
    purpose: 'Orientační rozcestník pro nováčky. Pomáhá najít správnou cestu — pro děti, dospělé, rodiče, školy.',
    cta: 'Najít svoji cestu',
    imageFolder: 'public/images/zacni-tady/',
  },
  {
    id: 'kurzy',
    title: 'Kurzy a stezky',
    slug: '/kurzy',
    url: `${BASE}/kurzy`,
    status: 'planned',
    purpose: 'Přehled vzdělávacího systému — stezky, kurzy, úrovně a co se v akademii naučíš.',
    cta: 'Prozkoumat kurzy',
    imageFolder: 'public/images/kurzy/',
  },
  {
    id: 'deti-a-rodice',
    title: 'Děti a rodiče',
    slug: '/deti-a-rodice',
    url: `${BASE}/deti-a-rodice`,
    status: 'planned',
    purpose: 'Hodnota pro rodiče — proč tvoření rukama, jak to funguje, věkové skupiny a produkty pro rodiny.',
    cta: 'Zjistit více pro rodinu',
    imageFolder: 'public/images/deti-a-rodice/',
  },
  {
    id: 'skoly-a-ucitele',
    title: 'Školy a učitelé',
    slug: '/skoly-a-ucitele',
    url: `${BASE}/skoly-a-ucitele`,
    status: 'planned',
    purpose: 'Nabídka pro školy, DDM a organizace — workshopy, materiály, programy a poptávkový formulář.',
    cta: 'Poptat workshop',
    imageFolder: 'public/images/skoly-a-ucitele/',
  },
  {
    id: 'komunita',
    title: 'Komunita',
    slug: '/komunita',
    url: `${BASE}/komunita`,
    status: 'planned',
    purpose: 'Discord a Dračí kruh — jak funguje komunita, role, galerie prací a výzvy.',
    cta: 'Vstoupit do komunity',
    imageFolder: 'public/images/komunita/',
  },
  {
    id: 'akce',
    title: 'Akce a workshopy',
    slug: '/akce',
    url: `${BASE}/akce`,
    status: 'planned',
    purpose: 'Přehled nadcházejících akcí — workshopy, paintzóny, výzvy a Golden Goblin turnaj.',
    cta: 'Zobrazit akce',
    imageFolder: 'public/images/akce/',
  },
  {
    id: 'obchod',
    title: 'Obchod',
    slug: '/obchod',
    url: `${BASE}/obchod`,
    status: 'planned',
    purpose: 'Katalog produktů a balíčků — startovací sady, figurky, barvy, příslušenství a členství.',
    cta: 'Otevřít obchod',
    imageFolder: 'public/images/obchod/',
  },
  {
    id: 'reference',
    title: 'Reference',
    slug: '/reference',
    url: `${BASE}/reference`,
    status: 'planned',
    purpose: 'Recenze, fotky prací a příběhy tvůrců. Buduje důvěru a ukazuje reálné výsledky.',
    cta: 'Přečíst příběhy',
    imageFolder: 'public/images/reference/',
  },
  {
    id: 'lektori',
    title: 'Lektoři',
    slug: '/lektori',
    url: `${BASE}/lektori`,
    status: 'planned',
    purpose: 'Tým a průvodci akademie — kdo stojí za Dračí akademií a jaké mají zkušenosti.',
    cta: 'Poznat tým',
    imageFolder: 'public/images/lektori/',
  },
  {
    id: 'o-nas',
    title: 'O nás',
    slug: '/o-nas',
    url: `${BASE}/o-nas`,
    status: 'planned',
    purpose: 'Valiente Project, mise, hodnoty a příběh vzniku Dračí akademie.',
    cta: 'Přečíst příběh',
    imageFolder: 'public/images/o-nas/',
  },
  {
    id: 'kontakt',
    title: 'Kontakt',
    slug: '/kontakt',
    url: `${BASE}/kontakt`,
    status: 'planned',
    purpose: 'Kontaktní formulář, e-mail, sociální sítě a odpovědi na časté dotazy.',
    cta: 'Napsat nám',
    imageFolder: 'public/images/kontakt/',
  },
]

export const statusColors: Record<PageStatus, string> = {
  live:    'bg-green-900/60 text-green-400 border border-green-700/40',
  draft:   'bg-amber-900/60 text-amber-400 border border-amber-700/40',
  planned: 'bg-brand-card text-brand-text-muted border border-brand-border',
}

export const statusLabels: Record<PageStatus, string> = {
  live:    'Živá',
  draft:   'Rozpracovaná',
  planned: 'Plánovaná',
}
