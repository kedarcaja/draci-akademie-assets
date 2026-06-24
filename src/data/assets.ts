export type AssetStatus = 'ready' | 'placeholder' | 'missing'

export interface Asset {
  id: string
  name: string
  path: string
  section: string
  folder: string
  status: AssetStatus
  alt: string
}

const BASE = 'https://assets.draciakademie.cz/images'

export const assets: Asset[] = [
  // global
  { id: 'logo-dragon-emblem', name: 'Dragon Emblem', path: `${BASE}/global/logo/dragon-emblem.png`, section: 'global', folder: 'logo', status: 'ready', alt: 'Dračí akademie – logo' },
  // akademie
  { id: 'akademie-hero', name: 'Hero – Akademie', path: `${BASE}/akademie/hero/hero-akademie.jpg`, section: 'akademie', folder: 'hero', status: 'ready', alt: 'Dračí akademie – kreativní vzdělávací prostor' },
  { id: 'akademie-pro-rodice', name: 'Sekce Pro rodiče', path: `${BASE}/akademie/sections/pro-rodice.jpg`, section: 'akademie', folder: 'sections', status: 'ready', alt: 'Rodič a dítě tvoří společně figurky' },
  // kurzy / stezky
  { id: 'stezka-prvni-figurka', name: 'Cesta první figurky', path: `${BASE}/kurzy/stezky/cesta-prvni-figurky.svg`, section: 'kurzy', folder: 'stezky', status: 'placeholder', alt: 'Cesta první figurky – armored knight in dark forest' },
  { id: 'stezka-draci-trenink', name: 'Dračí trénink', path: `${BASE}/kurzy/stezky/draci-trenink.svg`, section: 'kurzy', folder: 'stezky', status: 'placeholder', alt: 'Dračí trénink – large blue dragon at midnight castle' },
  { id: 'stezka-akademie-barev', name: 'Akademie barev', path: `${BASE}/kurzy/stezky/akademie-barev.svg`, section: 'kurzy', folder: 'stezky', status: 'placeholder', alt: 'Akademie barev – color wheel with brushes and paint jars' },
  { id: 'stezka-projektova-dilna', name: 'Projektová dílna', path: `${BASE}/kurzy/stezky/projektova-dilna.svg`, section: 'kurzy', folder: 'stezky', status: 'placeholder', alt: 'Projektová dílna – stone workshop with diorama' },
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
