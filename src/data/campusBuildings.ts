export type BuildingType = 'page' | 'funnel' | 'section'

export interface CampusBuilding {
  id: string
  title: string
  subtitle: string
  description: string
  linkedPage: string
  type: BuildingType
  imagePath: string
  icon: string
  microcopy: string
}

export const campusBuildings: CampusBuilding[] = [
  {
    id: 'hlavni-brana',
    title: 'Hlavní brána',
    subtitle: 'Orientace a první kroky',
    description: 'Vstupní bod akademie. Pomáhá každému návštěvníkovi najít cestu podle jeho role a potřeby. Nic neresolvuje — jen ukazuje správný směr.',
    linkedPage: 'zacni-tady',
    type: 'page',
    imagePath: '/images/kampus/budovy/hlavni-brana.png',
    icon: '🚪',
    microcopy: 'Každý drak někdy začínal u první barvy.',
  },
  {
    id: 'sin-stezek',
    title: 'Síň stezek',
    subtitle: 'Vzdělávací mapa a kurzy',
    description: 'Mapa vzdělávacích cest. Obory, úrovně a kurzy uspořádané tak, aby si každý našel svůj začátek. Nebo pokračování.',
    linkedPage: 'stezky',
    type: 'page',
    imagePath: '/images/kampus/budovy/sin-stezek.png',
    icon: '🗺️',
    microcopy: 'Tvůj první model nemusí být dokonalý. Má být tvůj.',
  },
  {
    id: 'dilna-prvni-figurky',
    title: 'Dílna první figurky',
    subtitle: 'První kurz a vstup do tvorby',
    description: 'Tady začíná každý — bez zkušeností, bez stresu. Kurz „První plamen" je nejnižší práh vstupu do světa tvorby.',
    linkedPage: 'prvni-plamen',
    type: 'funnel',
    imagePath: '/images/kampus/budovy/dilna-prvni-figurky.png',
    icon: '🪄',
    microcopy: 'Chybám se u nás netleská proto, že jsou krásné, ale proto, že nás něco naučí.',
  },
  {
    id: 'alchymisticka-vez-barev',
    title: 'Alchymistická věž barev',
    subtitle: 'Teorie barev a světla',
    description: 'Kontrast, světlo, stín, nálada a kompozice. Věda za každou barvou a každým přechodem.',
    linkedPage: 'stezky',
    type: 'section',
    imagePath: '/images/kampus/budovy/alchymisticka-vez-barev.png',
    icon: '🎨',
    microcopy: 'Každá barva na paletě má svůj účel. I ta, která se pokazila.',
  },
  {
    id: 'kovarna-modelaru',
    title: 'Kovárna modelářů',
    subtitle: '3D tisk, scan a diorámy',
    description: 'Technologie a stavba scén. Tisknuté modely, úpravy, modelařina a diorámy pro ty, kdo chtějí víc než jeden model.',
    linkedPage: 'stezky',
    type: 'section',
    imagePath: '/images/kampus/budovy/kovarna-modelaru.png',
    icon: '⚙️',
    microcopy: 'Stavíme příběhy, figurky, diorámy. Z jednoho panáčka někdy vznikne celý svět.',
  },
  {
    id: 'knihovna-mistru',
    title: 'Knihovna mistrů',
    subtitle: 'Návody, pracovní listy a systémy',
    description: 'Pracovní listy, metodiky, Notion šablony a tvůrčí systémy pro dlouhodobou organizaci tvorby.',
    linkedPage: 'stezky',
    type: 'section',
    imagePath: '/images/kampus/budovy/knihovna-mistru.png',
    icon: '📚',
    microcopy: 'Některé projekty vyžadují trpělivost. A svačinu.',
  },
  {
    id: 'pavilon-rodicu',
    title: 'Pavilon rodičů',
    subtitle: 'Děti, rodiny a věkové cesty',
    description: 'Průvodce pro rodiče. Jak začít doma, co dítě získá, věkové skupiny od 3 let a odpovědi na časté otázky.',
    linkedPage: 'deti-a-rodice',
    type: 'page',
    imagePath: '/images/kampus/budovy/pavilon-rodicu.png',
    icon: '👨‍👧',
    microcopy: 'Nejsi výtvarník ani mistr. Stačí být rodič, který chce strávit čas jinak.',
  },
  {
    id: 'ucitelska-sin',
    title: 'Učitelská síň',
    subtitle: 'Školy, DDM a organizace',
    description: 'Workshopy, projektové dny a kroužky pro pedagogy a organizace. Vše připraveno, materiály zajistíme.',
    linkedPage: 'skoly-a-ucitele',
    type: 'page',
    imagePath: '/images/kampus/budovy/ucitelska-sin.png',
    icon: '🏫',
    microcopy: 'Jeden workshop může změnit způsob, jakým dítě přistupuje k chybám.',
  },
  {
    id: 'draci-kruh',
    title: 'Dračí kruh',
    subtitle: 'Komunita a Discord',
    description: 'Sdílej, diskutuj, motivuj a buď motivován. Role, výzvy a galerie prací — živé srdce Dračí akademie.',
    linkedPage: 'komunita',
    type: 'page',
    imagePath: '/images/kampus/budovy/draci-kruh.png',
    icon: '🐉',
    microcopy: 'Tvoření je lepší, když tě někdo vidí.',
  },
  {
    id: 'treninkove-nadvori',
    title: 'Tréninkové nádvoří',
    subtitle: 'Výzvy a interaktivní cvičení',
    description: 'Měsíční výzvy, miniúkoly a interaktivní cvičení pro rozvoj techniky a udržení motivace.',
    linkedPage: 'komunita',
    type: 'section',
    imagePath: '/images/kampus/budovy/treninkove-nadvori.png',
    icon: '⚔️',
    microcopy: 'Výzva není soutěž. Je to pozvánka k tvoření.',
  },
  {
    id: 'trziste-akademie',
    title: 'Tržiště akademie',
    subtitle: 'Balíčky, modely a členství',
    description: 'Startovací sady, figurky, barvy, příslušenství, digitální produkty a členství. Fantasy tržiště s reálnými věcmi.',
    linkedPage: 'obchod',
    type: 'page',
    imagePath: '/images/kampus/budovy/trziste-akademie.png',
    icon: '🛒',
    microcopy: 'Vybav svoji dílnu. Začni tam, kde si to snadno dovolit.',
  },
  {
    id: 'sin-hrdinu',
    title: 'Síň hrdinů',
    subtitle: 'Galerie, reference a příběhy',
    description: 'Reálné práce, příběhy tvůrců a recenze. Ukazuje, co je skutečně možné — od první figurky po mistrovské kousky.',
    linkedPage: 'reference',
    type: 'page',
    imagePath: '/images/kampus/budovy/sin-hrdinu.png',
    icon: '🏆',
    microcopy: 'Každý obraz v galerii začal jako první pokus.',
  },
  {
    id: 'atelier-valiente',
    title: 'Ateliér Valiente',
    subtitle: 'Příběh, mise a tým',
    description: 'Kdo stojí za Dračí akademií, proč to vzniklo a kam to míří. Valiente Project, mise, hodnoty a lidé.',
    linkedPage: 'o-nas',
    type: 'page',
    imagePath: '/images/kampus/budovy/atelier-valiente.png',
    icon: '✨',
    microcopy: 'Každá akademie začala jako jeden člověk s jedním nápadem.',
  },
  {
    id: 'draci-posta',
    title: 'Dračí pošta',
    subtitle: 'Kontakt a spolupráce',
    description: 'Dotazy, spolupráce, poptávky a odpovědi. Přímá linka k lidem z akademie.',
    linkedPage: 'kontakt',
    type: 'page',
    imagePath: '/images/kampus/budovy/draci-posta.png',
    icon: '📮',
    microcopy: 'Napiš nám. Drakům se nespěchá, ale odepíšeme.',
  },
]

export const buildingTypeColors: Record<BuildingType, string> = {
  page:    'bg-brand-card text-brand-parchment border border-brand-border',
  funnel:  'bg-blue-900/50 text-blue-400 border border-blue-700/40',
  section: 'bg-brand-card text-brand-text-muted border border-brand-border',
}

export const buildingTypeLabels: Record<BuildingType, string> = {
  page:    'Stránka',
  funnel:  'Trychtýř',
  section: 'Sekce',
}
