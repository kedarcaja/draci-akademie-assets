# Dračí akademie – Asset systém

Asset hosting, preview nástěnka a dokumentace pro projekt Dračí akademie od Valiente Projectu.

## Co projekt dělá

- Spravuje obrázky a grafické podklady přes Git
- Po deployi jsou obrázky dostupné přes veřejnou URL (`assets.draciakademie.cz`)
- Systeme.io načítá obrázky přes tyto URL
- Jednoduchá preview aplikace zobrazuje stránky, trychtýře, assety a dokumentaci

## Spuštění lokálně

```bash
npm install
npm run dev
```

Otevři `http://localhost:5173`

## Ostatní příkazy

```bash
npm run build    # produkční build
npm run preview  # náhled produkčního buildu
```

## Jak přidat nový obrázek

1. Ulož soubor do správné složky:
   ```
   public/images/[sekce]/[složka]/nazev-souboru.jpg
   ```

2. Přidej záznam do `src/data/assets.ts`

3. Commitni a pushni:
   ```bash
   git add public/images/...
   git commit -m "add: nazev-souboru.jpg"
   git push
   ```

4. Po deployi je obrázek dostupný na veřejné URL.

## Jak pojmenovat soubor

```
hero-akademie.jpg     ✅  malá písmena, pomlčky, bez diakritiky
card-prvni-figurka.webp  ✅
IMG_1234.jpg          ❌
Obrázek finální.png   ❌
```

Viz `docs/05-nazvoslovi.md` pro úplná pravidla.

## Jak vytvořit veřejnou URL

Po deployi je každý soubor z `public/` dostupný jako:

```
https://assets.draciakademie.cz/images/[sekce]/[složka]/[soubor].[ext]
```

Příklad:
```
https://assets.draciakademie.cz/images/akademie/hero/hero-akademie.jpg
```

## Jak obrázek použít v Systeme.io

V Raw HTML bloku vlož:

```html
<img
  src="https://assets.draciakademie.cz/images/akademie/hero/hero-akademie.jpg"
  alt="Dračí akademie jako kreativní vzdělávací prostor pro děti a dospělé"
/>
```

## Jak řešit cache obrázků

Pokud se starý obrázek zobrazuje i po aktualizaci, přidej `?v=2`:

```html
<img src="https://assets.draciakademie.cz/images/.../hero-akademie.jpg?v=2" alt="..." />
```

## Nasazení na Vercel

1. Připoj repozitář na [vercel.com](https://vercel.com)
2. Framework: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. V nastavení domény přidej `assets.draciakademie.cz`

## Nasazení na Netlify

1. Připoj repozitář na [netlify.com](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`
4. V nastavení domény přidej `assets.draciakademie.cz`

## Nasazení přes GitHub Pages (aktuální)

Automaticky přes GitHub Actions při každém push do `master`.
Deployuje složku `public/` přímo (bez buildu).

## Vlastní doména assets.draciakademie.cz

DNS záznam u registrátora domény `draciakademie.cz`:

```
Typ:    CNAME
Název:  assets
Hodnota: kedarcaja.github.io
TTL:    3600
```

## Struktura projektu

```
public/images/          ← obrázky (CDN)
  global/               ← logo, pozadí, ikony
  akademie/             ← hlavní stránka
  kurzy/                ← kurzy a stezky
  ... (13 sekcí)

src/data/               ← datové soubory
  assets.ts             ← manifest assetů
  pages.ts              ← webové stránky
  funnels.ts            ← trychtýře
  navigation.ts         ← navigace
  assetAltTexts.ts      ← alt texty

docs/                   ← dokumentace
  00-prehled-projektu.md
  01-struktura-webu.md
  ...
```

## Dokumentace

Viz složka `docs/` pro kompletní dokumentaci projektu.
