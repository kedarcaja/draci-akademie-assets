export type FunnelStatus = 'phase1' | 'later'

export interface Funnel {
  id: string
  title: string
  slug: string
  url: string
  goal: string
  audience: string[]
  steps: string[]
  relatedPage: string
  status: FunnelStatus
}

const BASE = 'https://draciakademie.cz'

export const funnels: Funnel[] = [
  // ── Fáze 1 ─────────────────────────────────────────────────────────────────
  {
    id: 'start-zdarma',
    title: 'Start zdarma',
    slug: '/start-zdarma',
    url: `${BASE}/start-zdarma`,
    goal: 'Získat e-mailový kontakt výměnou za hodnotný lead magnet (PDF průvodce nebo ukázková lekce zdarma).',
    audience: ['Nováček zvídavý, ale nerozhodnutý', 'Rodič hledající info', 'Dospělý uvažující o tvoření'],
    steps: ['Opt-in stránka s nabídkou', 'Potvrzení e-mailu', 'Doručení PDF / přístupu', 'Uvítací sekvence', 'Nabídka prvního kurzu'],
    relatedPage: 'akademie',
    status: 'phase1',
  },
  {
    id: 'prvni-plamen',
    title: 'První plamen',
    slug: '/prvni-plamen',
    url: `${BASE}/prvni-plamen`,
    goal: 'Prodat kurz „První plamen: cesta k první figurce" — vstupní kurz pro úplné začátečníky.',
    audience: ['Úplný začátečník bez zkušeností', 'Dítě 8–14 let s rodičem', 'Dospělý začínající znovu'],
    steps: ['Sales page s hodnotou a příběhem', 'Přehled obsahu kurzu', 'Recenze a výsledky', 'Objednávkový formulář', 'Upsell model/balíček', 'Přístup do kurzu'],
    relatedPage: 'stezky',
    status: 'phase1',
  },
  {
    id: 'clenstvi',
    title: 'Členství',
    slug: '/clenstvi',
    url: `${BASE}/clenstvi`,
    goal: 'Prodat měsíční členství Dračí akademie — přístup ke kurzům, komunitě a pravidelný obsah.',
    audience: ['Stávající studenti po prvním kurzu', 'Tvůrce hledající komunitu a rozvoj', 'Rodič chcíci strukturovaný program pro dítě'],
    steps: ['Sales page s benefity členství', 'Srovnání plánů (Basic / Pro)', 'FAQ', 'Objednávkový formulář', 'Onboarding', 'Vstup do Discordu'],
    relatedPage: 'akademie',
    status: 'phase1',
  },
  {
    id: 'poptavka-workshopu',
    title: 'Poptávka workshopu',
    slug: '/poptavka-workshopu',
    url: `${BASE}/poptavka-workshopu`,
    goal: 'Získat poptávku workshopu od škol, DDM, firem nebo soukromých organizátorů.',
    audience: ['Pedagog nebo vedení školy', 'Organizer DDM', 'Firemní HR pro teambuildingové akce'],
    steps: ['Přehled nabídky workshopů', 'Reference a fotky', 'Praktické informace', 'Poptávkový formulář', 'Potvrzení a kontakt'],
    relatedPage: 'skoly-a-ucitele',
    status: 'phase1',
  },
  // ── Pozdější fáze ───────────────────────────────────────────────────────────
  {
    id: 'draci-zasilka',
    title: 'Dračí zásilka',
    slug: '/draci-zasilka',
    url: `${BASE}/draci-zasilka`,
    goal: 'Prodat odběr fyzických modelů a startovacích balíčků doručovaných domů.',
    audience: ['Rodič hledající aktivitu pro dítě', 'Tvůrce chcíci pravidelné projekty'],
    steps: ['Ukázka zásilky a obsahu', 'Výběr plánu odběru', 'Doručovací údaje', 'Platba a potvrzení'],
    relatedPage: 'obchod',
    status: 'later',
  },
  {
    id: 'tvoreni-mimo-obrazovky',
    title: 'Tvoření mimo obrazovky',
    slug: '/tvoreni-mimo-obrazovky',
    url: `${BASE}/tvoreni-mimo-obrazovky`,
    goal: 'Rodičovský funnel — přesvědčit rodiče, proč je tvoření rukama hodnotná alternativa k obrazovkám.',
    audience: ['Rodič frustrovaný z obrazovkového času dítěte'],
    steps: ['Emotivní headline pro rodiče', 'Benefity a výsledky', 'Věkové skupiny', 'CTA na produkt nebo členství'],
    relatedPage: 'deti-a-rodice',
    status: 'later',
  },
  {
    id: 'vstup-do-komunity',
    title: 'Vstup do komunity',
    slug: '/vstup-do-komunity',
    url: `${BASE}/vstup-do-komunity`,
    goal: 'Získat vstup do Discord komunity nebo zakoupit členství v Dračím kruhu.',
    audience: ['Stávající student chcíci komunitu', 'Tvůrce hledající skupinu'],
    steps: ['Co dostaneš v komunitě', 'Role a výzvy', 'Ukázky z Discordu', 'Vstupní formulář nebo platba'],
    relatedPage: 'komunita',
    status: 'later',
  },
  {
    id: 'draci-vyzva',
    title: 'Dračí výzva',
    slug: '/draci-vyzva',
    url: `${BASE}/draci-vyzva`,
    goal: 'Časově omezená výzva — vytvoř figurku za 30 dní a získej odměnu nebo přístup k obsahu.',
    audience: ['Stávající studenti a členové komunity', 'Tvůrce hledající motivaci a deadline'],
    steps: ['Odpočet a urgence', 'Co výzva obnáší', 'Registrace', 'Uvítání a instrukce', 'Finálový showcase'],
    relatedPage: 'komunita',
    status: 'later',
  },
]

export const funnelStatusColors: Record<FunnelStatus, string> = {
  phase1: 'bg-blue-900/60 text-blue-400 border border-blue-700/40',
  later:  'bg-brand-card text-brand-text-muted border border-brand-border',
}

export const funnelStatusLabels: Record<FunnelStatus, string> = {
  phase1: 'Fáze 1',
  later:  'Později',
}
