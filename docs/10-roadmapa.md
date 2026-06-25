# 10 – Roadmapa projektu

## Princip

Nezačínat všemi funkcemi najednou. První verze musí být funkční, přehledná a rozšiřitelná.
Jinak se systém rozpadne pod vlastní šířkou.

---

## Fáze 1 – Asset systém a základ (aktuální)

**Cíl:** Čistá struktura, dokumentace, datové soubory a preview nástěnka.

- [x] Vite + React + TypeScript + Tailwind projekt
- [x] Struktura složek `public/images/`
- [x] Datové soubory: `pages.ts`, `funnels.ts`, `assets.ts`, `navigation.ts`, `assetAltTexts.ts`
- [x] Nový soubor `campusBuildings.ts` — 14 budov kampusu
- [x] Preview nástěnka: Přehled, Kampus, Stránky, Trychtýře, Assety, Dokumentace
- [x] GitHub Actions deploy `public/` na GitHub Pages
- [x] Dokumentace v `docs/`
- [ ] Kampus `public/images/kampus/` — složky pro mapu a budovy
- [ ] Mapa kampusu — ilustrace `mapa-kampusu.png`
- [ ] Hero obrázky pro všechny hlavní stránky

---

## Fáze 2 – Hlavní stránka a HTML bloky

**Cíl:** Funkční Systeme.io integrace pro stránku Akademie.

- [ ] HTML blok pro stránku Akademie (Systeme.io)
- [ ] Mapa kampusu jako statický obrázek s hotspoty
- [ ] Responsivní hero sekce pro Systeme.io
- [ ] Stránka Začni tady (Systeme.io HTML fragment)
- [ ] Veřejné URL pro všechny hero obrázky fáze 1

---

## Fáze 3 – Webové stránky (Systeme.io)

**Cíl:** HTML fragmenty pro všechny hlavní stránky.

- [ ] Stezky
- [ ] Děti a rodiče
- [ ] Školy a učitelé
- [ ] Komunita
- [ ] Obchod
- [ ] O nás

---

## Fáze 4 – Trychtýře

**Cíl:** Konverzní stránky pro první fázi projektu.

- [ ] Start zdarma (opt-in funnel)
- [ ] První plamen (prodejní stránka kurzu)
- [ ] Členství (tarifní stránka)
- [ ] Poptávka workshopu (B2B formulář)

---

## Fáze 5 – Rozšíření (pozdější)

**Cíl:** Sekundární trychtýře a doplňkové stránky.

- [ ] Dračí zásilka (fyzické předplatné)
- [ ] Tvoření mimo obrazovky (rodičovský funnel)
- [ ] Vstup do komunity
- [ ] Dračí výzva (časově omezená)
- [ ] Kontakt, Reference, Lektoři, Akce

---

## Co v první verzi neřešit

- Přihlašování a uživatelské účty
- Databáze
- Platební brána (řeší Systeme.io)
- E-shop (řeší Systeme.io)
- Discord API
- CMS a správa obsahu
- Složité animace a interaktivní prvky

---

## DNS a hosting

| Služba | Stav | Poznámka |
|---|---|---|
| GitHub Pages | ✅ Aktivní | Deploy přes GitHub Actions, větev `master` |
| `assets.draciakademie.cz` | ⏳ DNS čeká | CNAME `kedarcaja.github.io` u registrátora |
| Vercel / Netlify | Plánováno | Alternativa pro produkci |

DNS záznam u registrátora domény `draciakademie.cz`:
```
Typ:    CNAME
Název:  assets
Hodnota: kedarcaja.github.io
TTL:    3600
```

---

## Aktuální stav obrázků

Obrázky dostupné na `https://kedarcaja.github.io/akademie-HomePage/img/`:
- `hero.jpg` — hero Akademie
- `pro-rodice.jpg` — sekce Pro rodiče
- `dragon-emblem.png` — logo
- `cesta-prvni-figurky.svg` — stezka SVG
- `draci-trenink.svg` — stezka SVG
- `akademie-barev.svg` — stezka SVG
- `projektova-dilna.svg` — stezka SVG

Cílová doména po nastavení DNS: `https://assets.draciakademie.cz/images/`
