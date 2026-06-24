export type PageStatus = 'live' | 'draft' | 'planned'

export interface Page {
  id: string
  title: string
  slug: string
  section: string
  status: PageStatus
  description: string
  systemeUrl?: string
}

export const pages: Page[] = [
  { id: 'akademie-home', title: 'Dračí akademie – Hlavní stránka', slug: '/', section: 'akademie', status: 'draft', description: 'Landing page celé akademie. Hero, sekce cest, pro rodiče, CTA.' },
  { id: 'zacni-tady', title: 'Začni tady', slug: '/zacni-tady', section: 'zacni-tady', status: 'planned', description: 'Průvodce pro nováčky – co začít, co koupit, jak funguje komunita.' },
  { id: 'kurzy', title: 'Kurzy a stezky', slug: '/kurzy', section: 'kurzy', status: 'planned', description: 'Přehled všech kurzů, stezek a vzdělávacích cest.' },
  { id: 'deti-a-rodice', title: 'Děti a rodiče', slug: '/deti-a-rodice', section: 'deti-a-rodice', status: 'planned', description: 'Věkové skupiny, produkty a benefity pro rodiny.' },
  { id: 'skoly', title: 'Školy a učitelé', slug: '/skoly-a-ucitele', section: 'skoly-a-ucitele', status: 'planned', description: 'Nabídka workshopů a materiálů pro školy.' },
  { id: 'komunita', title: 'Komunita', slug: '/komunita', section: 'komunita', status: 'planned', description: 'Discord, galerie prací, výzvy a role v komunitě.' },
  { id: 'akce', title: 'Akce a workshopy', slug: '/akce', section: 'akce', status: 'planned', description: 'Přehled nadcházejících akcí a workshopů.' },
  { id: 'obchod', title: 'Obchod', slug: '/obchod', section: 'obchod', status: 'planned', description: 'Produkty, balíčky a členství.' },
  { id: 'reference', title: 'Reference', slug: '/reference', section: 'reference', status: 'planned', description: 'Hodnocení, galerie a příběhy tvůrců.' },
  { id: 'o-nas', title: 'O nás', slug: '/o-nas', section: 'o-nas', status: 'planned', description: 'Mise, tým a partneři Valiente Projectu.' },
  { id: 'kontakt', title: 'Kontakt', slug: '/kontakt', section: 'kontakt', status: 'planned', description: 'Kontaktní formulář a sociální sítě.' },
]

export const statusColors: Record<PageStatus, string> = {
  live:    'bg-green-900/60 text-green-400 border border-green-700/40',
  draft:   'bg-amber-900/60 text-amber-400 border border-amber-700/40',
  planned: 'bg-brand-border text-brand-text-muted border border-brand-border',
}

export const statusLabels: Record<PageStatus, string> = {
  live:    'Živá',
  draft:   'Rozpracovaná',
  planned: 'Plánovaná',
}
