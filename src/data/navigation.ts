export interface NavItem {
  label: string
  view: string
  icon: string
}

export const navItems: NavItem[] = [
  { label: 'Přehled',    view: 'home',    icon: '🏰' },
  { label: 'Stránky',   view: 'pages',   icon: '📄' },
  { label: 'Trychtýře', view: 'funnels', icon: '🎯' },
  { label: 'Assety',    view: 'assets',  icon: '🖼️' },
  { label: 'Dokumentace', view: 'docs',  icon: '📚' },
]

export const siteNav = [
  { label: 'Akademie',      slug: '/draci-akademie' },
  { label: 'Začni tady',    slug: '/zacni-tady' },
  { label: 'Kurzy',         slug: '/kurzy' },
  { label: 'Děti a rodiče', slug: '/deti-a-rodice' },
  { label: 'Školy',         slug: '/skoly-a-ucitele' },
  { label: 'Komunita',      slug: '/komunita' },
  { label: 'Akce',          slug: '/akce' },
  { label: 'Obchod',        slug: '/obchod' },
  { label: 'O nás',         slug: '/o-nas' },
  { label: 'Kontakt',       slug: '/kontakt' },
]
