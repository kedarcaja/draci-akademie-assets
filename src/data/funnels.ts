export interface Funnel {
  id: string
  title: string
  slug: string
  url: string
  goal: string
  steps: string[]
  relatedPage: string
}

const BASE = 'https://draciakademie.cz'

export const funnels: Funnel[] = [
  {
    id: 'start-zdarma',
    title: 'Start zdarma',
    slug: '/start-zdarma',
    url: `${BASE}/start-zdarma`,
    goal: 'Získat e-mailový kontakt výměnou za hodnotný lead magnet (PDF, checklist nebo ukázková lekce).',
    steps: ['Opt-in stránka s nabídkou', 'Potvrzení e-mailu', 'Doručení PDF / přístupu', 'Uvítací sekvence'],
    relatedPage: 'akademie',
  },
  {
    id: 'prvni-plamen',
    title: 'První plamen',
    slug: '/prvni-plamen',
    url: `${BASE}/prvni-plamen`,
    goal: 'Prodat kurz „První plamen: cesta k první figurce" — vstupní kurz pro úplné začátečníky.',
    steps: ['Sales page s hodnotou a příběhem', 'Přehled obsahu kurzu', 'Recenze a výsledky', 'Objednávkový formulář'],
    relatedPage: 'kurzy',
  },
  {
    id: 'clenstvi',
    title: 'Členství',
    slug: '/clenstvi',
    url: `${BASE}/clenstvi`,
    goal: 'Prodat měsíční členství Dračí akademie — přístup ke kurzům, komunitě a obsahu.',
    steps: ['Sales page s benefity členství', 'Srovnání plánů', 'FAQ', 'Objednávkový formulář'],
    relatedPage: 'akademie',
  },
  {
    id: 'draci-zasilka',
    title: 'Dračí zásilka',
    slug: '/draci-zasilka',
    url: `${BASE}/draci-zasilka`,
    goal: 'Prodat odběr fyzických modelů a startovacích balíčků doručovaných domů.',
    steps: ['Ukázka zásilky a obsahu', 'Výběr plánu odběru', 'Doručovací údaje', 'Platba'],
    relatedPage: 'obchod',
  },
  {
    id: 'tvoreni-mimo-obrazovky',
    title: 'Tvoření mimo obrazovky',
    slug: '/tvoreni-mimo-obrazovky',
    url: `${BASE}/tvoreni-mimo-obrazovky`,
    goal: 'Rodičovský funnel — přesvědčit rodiče, proč je tvoření rukama hodnotná alternativa k obrazovkám.',
    steps: ['Emotivní headline pro rodiče', 'Benefity a výsledky', 'Věkové skupiny', 'CTA na produkt nebo členství'],
    relatedPage: 'deti-a-rodice',
  },
  {
    id: 'poptavka-workshopu',
    title: 'Poptávka workshopu',
    slug: '/poptavka-workshopu',
    url: `${BASE}/poptavka-workshopu`,
    goal: 'Získat poptávku workshopu od škol, DDM, firem nebo soukromých organizátorů.',
    steps: ['Přehled nabídky workshopů', 'Reference a fotky', 'Poptávkový formulář', 'Potvrzení a kontakt'],
    relatedPage: 'skoly-a-ucitele',
  },
  {
    id: 'vstup-do-komunity',
    title: 'Vstup do komunity',
    slug: '/vstup-do-komunity',
    url: `${BASE}/vstup-do-komunity`,
    goal: 'Získat vstup do Discord komunity nebo zakoupit členství v Dračím kruhu.',
    steps: ['Co dostaneš v komunitě', 'Role a výzvy', 'Ukázky z Discordu', 'Vstupní formulář nebo platba'],
    relatedPage: 'komunita',
  },
  {
    id: 'draci-vyzva',
    title: 'Dračí výzva',
    slug: '/draci-vyzva',
    url: `${BASE}/draci-vyzva`,
    goal: 'Časově omezená výzva — vytvoř figurku za 30 dní a získej odměnu nebo přístup k obsahu.',
    steps: ['Odpočet a urgence', 'Co výzva obnáší', 'Registrace', 'Uvítání a instrukce'],
    relatedPage: 'komunita',
  },
]
