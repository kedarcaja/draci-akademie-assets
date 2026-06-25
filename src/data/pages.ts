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
  // Extended fields
  audience?: string[]
  mainQuestion?: string
  sections?: string[]
  primaryCta?: string
  secondaryCta?: string
  visualMetaphor?: string
  whatDoesNotBelong?: string[]
}

const BASE = 'https://draciakademie.cz'

export const pages: Page[] = [
  {
    id: 'akademie',
    title: 'Akademie',
    slug: '/akademie',
    url: `${BASE}/akademie`,
    status: 'draft',
    purpose: 'Brána do světa Dračí akademie. Vysvětluje co to je, proč to existuje a co tu návštěvník najde. Stojí na interaktivní mapě kampusu.',
    cta: 'Vstoupit do akademie',
    imageFolder: 'public/images/akademie/',
    audience: ['Nový návštěvník bez kontextu', 'Rodič hledající aktivitu pro dítě', 'Dospělý který chce tvořit'],
    mainQuestion: 'Co je Dračí akademie a proč existuje?',
    sections: ['Hero s mapou kampusu', 'Co je akademie', 'Jak kampus funguje', 'Komunita Valiente', 'CTA Vstoupit'],
    primaryCta: 'Začni tady',
    secondaryCta: 'Prozkoumat kampus',
    visualMetaphor: 'Interaktivní mapa kampusu jako hlavní navigace',
    whatDoesNotBelong: ['Ceny a nákupní tlačítka', 'Dlouhé FAQ', 'Formuláře'],
  },
  {
    id: 'zacni-tady',
    title: 'Začni tady',
    slug: '/zacni-tady',
    url: `${BASE}/zacni-tady`,
    status: 'planned',
    purpose: 'Orientační rozcestník. Pomáhá každému návštěvníkovi najít správnou cestu — podle role a potřeby.',
    cta: 'Najít svoji cestu',
    imageFolder: 'public/images/zacni-tady/',
    audience: ['Nováček nevědoucí kde začít', 'Rodič', 'Dítě / začátečník', 'Učitel / škola', 'Dospělý tvůrce'],
    mainQuestion: 'Kam mám pokračovat?',
    sections: ['Hero s výzvou', 'Výběr karty podle role', 'Doporučené první kroky', 'Mini mapa kampusu', 'CTA Začít'],
    primaryCta: 'Začít moje dobrodružství',
    visualMetaphor: 'Vstupní hala s kartami podle role — každý si vybere tu svoji',
    whatDoesNotBelong: ['Technické detaily kurzů', 'Ceny', 'Recenze'],
  },
  {
    id: 'stezky',
    title: 'Stezky',
    slug: '/stezky',
    url: `${BASE}/stezky`,
    status: 'planned',
    purpose: 'Vzdělávací mapa akademie. Obory, úrovně a kurzy — jak se tu učím a rostu.',
    cta: 'Vybrat stezku',
    imageFolder: 'public/images/stezky/',
    audience: ['Začátečník hledající kurz', 'Pokročilý hledající další obor', 'Rodič vybírající cestu pro dítě'],
    mainQuestion: 'Jak se tu učím a rostu?',
    sections: ['Hero — Síň stezek', 'Cesta růstu (úrovně Vejce → Strážce)', 'Stezky znalostí (6 oborů)', 'Jak funguje výuka', 'Kde začít (3 varianty)'],
    primaryCta: 'Vybrat stezku',
    secondaryCta: 'Jak funguje výuka',
    visualMetaphor: 'Síň stezek s mapou úrovní a oborů',
    whatDoesNotBelong: ['Konkrétní ceny kurzů', 'Registrační formuláře', 'Discord'],
  },
  {
    id: 'deti-a-rodice',
    title: 'Děti a rodiče',
    slug: '/deti-a-rodice',
    url: `${BASE}/deti-a-rodice`,
    status: 'planned',
    purpose: 'Důvěrový průvodce pro rodiny. Co dítě získá, věkové cesty a jak začít doma.',
    cta: 'Začít doma',
    imageFolder: 'public/images/deti-a-rodice/',
    audience: ['Rodič uvažující o aktivitě pro dítě', 'Rodič skeptický k online kurzům'],
    mainQuestion: 'Co dítě získá a jak začít doma?',
    sections: ['Hero — Pavilon rodičů', 'Co dítě získá (6 benefitů)', 'Věkové cesty (Nejmenší → Dospělí)', 'Jak začít doma (4 kroky)', 'Doporučené produkty pro rodiny', 'FAQ rodičů'],
    primaryCta: 'Začít doma',
    secondaryCta: 'Vybrat vhodnou cestu',
    visualMetaphor: 'Teplý rodinný pracovní stůl — tvoření jako společný čas',
    whatDoesNotBelong: ['Technické detaily kurzů', 'Discord a komunita', 'Obchodní podmínky'],
  },
  {
    id: 'skoly-a-ucitele',
    title: 'Školy a učitelé',
    slug: '/skoly-a-ucitele',
    url: `${BASE}/skoly-a-ucitele`,
    status: 'planned',
    purpose: 'Profesionální nabídka pro školy, DDM a organizace. Workshopy, materiály a poptávkový formulář.',
    cta: 'Poptat workshop',
    imageFolder: 'public/images/skoly-a-ucitele/',
    audience: ['Pedagog', 'Vedení školy', 'Organizer DDM', 'HR firemní akce'],
    mainQuestion: 'Jaký program můžeme objednat?',
    sections: ['Hero — Učitelská síň', 'Co nabízíme (4 typy programů)', 'Co děti rozvíjejí', 'Jak workshop probíhá', 'Praktické informace', 'Reference z praxe', 'CTA Poptat workshop'],
    primaryCta: 'Poptat workshop',
    secondaryCta: 'Nabídka programů',
    visualMetaphor: 'Profesionální pavilon — seriózní, přehledný, důvěryhodný',
    whatDoesNotBelong: ['Fantasy epika', 'Discord', 'Obsah pro děti samotné'],
  },
  {
    id: 'komunita',
    title: 'Komunita',
    slug: '/komunita',
    url: `${BASE}/komunita`,
    status: 'planned',
    purpose: 'Živé srdce akademie. Discord, role, výzvy a galerie prací — nebudu na tvorbu sám.',
    cta: 'Vstoupit do komunity',
    imageFolder: 'public/images/komunita/',
    audience: ['Stávající studenti', 'Tvůrci hledající komunitu', 'Nadšenci bez skupiny'],
    mainQuestion: 'Nebudu na tvorbu sám?',
    sections: ['Hero — Dračí kruh', 'Co v komunitě najdeš', 'Komunitní role', 'Měsíční rytmus', 'Galerie prací', 'CTA Vstoupit'],
    primaryCta: 'Vstoupit do komunity',
    secondaryCta: 'Zjistit více o členství',
    visualMetaphor: 'Guild hall / cech — živé místo se společným stolem',
    whatDoesNotBelong: ['Ceny kurzů', 'Školní programy', 'FAQ pro rodiče'],
  },
  {
    id: 'obchod',
    title: 'Obchod',
    slug: '/obchod',
    url: `${BASE}/obchod`,
    status: 'planned',
    purpose: 'Tržiště akademie. Balíčky, figurky, barvy, příslušenství, digitální produkty a členství.',
    cta: 'Otevřít obchod',
    imageFolder: 'public/images/obchod/',
    audience: ['Tvůrce hledající vybavení', 'Rodič hledající dárek', 'Nováček potřebující startovací sadu'],
    mainQuestion: 'Co si můžu koupit / stáhnout / objednat?',
    sections: ['Hero — Tržiště', 'Kategorie produktů', 'Doporučeno podle role', 'Hlavní nabídky', 'Akční balíčky', 'Trust signály'],
    primaryCta: 'Vybrat balíček',
    secondaryCta: 'Dárek pro malého draka',
    visualMetaphor: 'Fantasy tržiště s reálnými produkty a poctivou nabídkou',
    whatDoesNotBelong: ['Komunitní obsah', 'Kurzy a stezky', 'Kontaktní formulář'],
  },
  {
    id: 'o-nas',
    title: 'O nás',
    slug: '/o-nas',
    url: `${BASE}/o-nas`,
    status: 'planned',
    purpose: 'Příběh a důvěra. Valiente Project, mise, tým, timeline a partneři.',
    cta: 'Přičíst se',
    imageFolder: 'public/images/o-nas/',
    audience: ['Návštěvník zvažující vstup', 'Partner nebo média', 'Rodič ověřující důvěryhodnost'],
    mainQuestion: 'Kdo za tím stojí?',
    sections: ['Hero — Ateliér Valiente', 'Valiente Project a mise', 'Naše hodnoty', 'Tým', 'Cesta projektu (timeline)', 'Partneři a důvěra', 'CTA'],
    primaryCta: 'Přidej se k akademii',
    secondaryCta: 'Napiš nám',
    visualMetaphor: 'Ateliér s mapou, skicáky a tvůrčími nástroji — skutečný příběh',
    whatDoesNotBelong: ['Ceny a produkty', 'Kurzy', 'FAQ technické'],
  },
  {
    id: 'kontakt',
    title: 'Kontakt',
    slug: '/kontakt',
    url: `${BASE}/kontakt`,
    status: 'planned',
    purpose: 'Dračí pošta. Dotazy, spolupráce, poptávky a kontaktní formulář.',
    cta: 'Napsat nám',
    imageFolder: 'public/images/kontakt/',
    audience: ['Návštěvník s dotazem', 'Partner nebo media', 'Škola nebo organizace'],
    mainQuestion: 'Jak se s vámi spojím?',
    sections: ['Hero — Dračí pošta', 'Kontaktní formulář', 'Sociální sítě', 'FAQ nejčastější dotazy', 'Kde nás najdete'],
    primaryCta: 'Napsat nám',
    visualMetaphor: 'Dračí pošta — přátelský a přístupný kontaktní bod',
    whatDoesNotBelong: ['Sales obsah', 'Kurzy a ceny', 'Discord link'],
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
