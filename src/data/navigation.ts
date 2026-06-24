export interface NavItem {
  label: string
  view: string
  icon: string
}

export const navItems: NavItem[] = [
  { label: 'Přehled',  view: 'home',   icon: '🏰' },
  { label: 'Assety',   view: 'assets', icon: '🖼️' },
  { label: 'Stránky',  view: 'pages',  icon: '📄' },
  { label: 'Dokumentace', view: 'docs', icon: '📚' },
]
