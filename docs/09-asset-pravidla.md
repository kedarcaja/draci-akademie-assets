# Pravidla pro assety – Dračí akademie

## Proč používáme public/images

Složka `public/images/` v tomto repozitáři je **zdrojem pravdy pro všechny obrázky** používané v Systeme.io.

Výhody:
- verzování přes Git (víme, kdo změnil co a kdy)
- jednoduchá záloha
- obrázky jsou dostupné přes veřejnou URL po deployi
- aktualizace obrázku = nahradit soubor + commit + push

## Jak přidat nový obrázek

1. Připrav soubor podle pravidel (název, formát, rozměr)
2. Vlož ho do správné složky v `public/images/`
3. Přidej ho do `src/data/assets.ts` (id, name, localPath, publicUrl, alt, status)
4. `git add . && git commit -m "add: nazev-souboru.jpg"` 
5. `git push`
6. Počkej na deploy (GitHub Actions, ~1 min)
7. URL je živá

## Jak nahradit existující obrázek

1. Nahraď soubor (stejný název = stejná URL, bez nutnosti upravovat kód)
2. `git add . && git commit -m "update: nazev-souboru.jpg"`
3. `git push`
4. Pokud se obrázek neaktualizuje kvůli cache – viz sekce Cache

## Jak funguje veřejná URL

Po deployi na GitHub Pages (nebo Vercel/Netlify) je každý soubor z `public/` dostupný na:

```
https://assets.draciakademie.cz/images/[sekce]/[složka]/[soubor].[ext]
```

Příklad:
```
https://assets.draciakademie.cz/images/akademie/hero/hero-akademie.jpg
```

## Jak vložit obrázek do Systeme.io

V Raw HTML bloku v Systeme.io:

```html
<img
  src="https://assets.draciakademie.cz/images/akademie/hero/hero-akademie.jpg"
  alt="Dračí akademie jako kreativní vzdělávací prostor pro děti a dospělé"
/>
```

## Jak řešit cache

Pokud prohlížeč zobrazuje starou verzi obrázku:

**Možnost 1: Počkat** – CDN cache obvykle vyprší do 5–10 minut.

**Možnost 2: Query parametr** – přidej `?v=2` (nebo jiné číslo) na konec URL:
```html
<img src="https://assets.draciakademie.cz/images/akademie/hero/hero-akademie.jpg?v=2" alt="..." />
```

**Možnost 3: Přejmenovat soubor** – nejjistější varianta, ale vyžaduje aktualizaci URL ve všech místech.

## Proč nepoužívat GitHub raw jako produkční řešení

`https://raw.githubusercontent.com/...` funguje pro testování, ale:
- může být blokováno content security policies
- není určeno jako CDN
- horší výkon
- nestabilní pro produkci

Vždy používej vlastní doménu (`assets.draciakademie.cz`) přes GitHub Pages, Vercel nebo Netlify.

## Doporučení pro formát a velikost

| Typ | Formát | Max velikost | Rozměr |
|---|---|---|---|
| Hero stránky | .webp nebo .jpg | 300 KB | 1600×900 px |
| Karty | .webp nebo .jpg | 150 KB | 800×600 px |
| Produkty | .webp nebo .png | 200 KB | 1000×1000 px |
| Logo | .png nebo .svg | 50 KB | – |
| Ikony | .svg | 10 KB | – |
| Pozadí | .webp nebo .jpg | 400 KB | 1920×1080 px |

Optimalizuj obrázky před nahráním (Squoosh, TinyPNG, ImageOptim).
