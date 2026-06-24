# Systeme.io integrace

## Raw HTML blok

Systeme.io přijímá pouze HTML fragmenty – **bez** `<!DOCTYPE>`, `<html>`, `<head>`, `<body>`.

✅ Správně:
```html
<style>...</style>
<div id="da-root">...</div>
<script>...</script>
```

❌ Špatně:
```html
<!DOCTYPE html>
<html><head>...</head><body>...</body></html>
```

## CSS scope

Všechny styly scopovat pod `#da-root`:

```css
#da-root { ... }
#da-root .hero { ... }
```

## Full-width breakout

```css
#da-root {
  width: 100vw !important;
  position: relative !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  max-width: none !important;
}
```

## Parent padding removal (JS)

```js
(function(){
  var root = document.getElementById('da-root');
  var p = root.parentElement;
  for(var i=0; i<8 && p && p!==document.body; i++){
    p.style.setProperty('padding','0','important');
    p.style.setProperty('max-width','none','important');
    p.style.setProperty('width','100%','important');
    p.style.setProperty('overflow','visible','important');
    p = p.parentElement;
  }
})();
```

## Použití asset URL

```html
<img
  src="https://assets.draciakademie.cz/images/akademie/hero/hero-akademie.jpg"
  alt="Dračí akademie – kreativní vzdělávací prostor"
/>
```

## Google Fonts v systeme.io

```html
<style>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Inter:wght@300;400&display=swap');
</style>
```
