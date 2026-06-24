const docFiles = [
  { file: '00-prehled-projektu.md',    title: 'Přehled projektu',           desc: 'Mise, cíle a ekosystém Dračí akademie.' },
  { file: '01-struktura-webu.md',      title: 'Struktura webu',             desc: 'Mapa stránek, sekcí a URL slugů.' },
  { file: '02-stranky-vs-trychtyre.md', title: 'Stránky vs. trychtýře',     desc: 'Co jsou stránky a co trychtýře v Systeme.io.' },
  { file: '03-tone-of-voice.md',       title: 'Tone of voice',              desc: 'Hlas, styl a pravidla komunikace – Úsměv, ne šaškárna.' },
  { file: '04-vizualni-styl.md',       title: 'Vizuální styl',              desc: 'Barvy, typografie, dark fantasy estetika, zlaté detaily.' },
  { file: '05-nazvoslovi.md',          title: 'Názvosloví assetů',          desc: 'Konvence pojmenování souborů a složek.' },
  { file: '06-texty-stranek.md',       title: 'Texty stránek',              desc: 'Copywriting pro jednotlivé sekce a stránky.' },
  { file: '07-prompty-pro-obrazky.md', title: 'Prompty pro obrázky',        desc: 'AI prompty pro generování assetů v Midjourney / DALL-E.' },
  { file: '08-systeme-io-integrace.md', title: 'Systeme.io integrace',      desc: 'Jak vkládat HTML bloky, CSS scope, full-width breakout.' },
  { file: '09-asset-pravidla.md',      title: 'Pravidla pro assety',        desc: 'Rozměry, formáty, komprese, alt texty.' },
]

export default function DocsPreview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="section-title">Dokumentace</h1>
        <p className="text-brand-text-muted text-sm mt-1">
          Texty, vizuální pravidla, prompty a technická dokumentace projektu.
        </p>
      </div>

      <div className="space-y-2">
        {docFiles.map(({ file, title, desc }) => (
          <a
            key={file}
            href={`https://github.com/kedarcaja/draci-akademie-assets/blob/master/docs/${file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 bg-brand-card border border-brand-border hover:border-brand-gold/40 rounded-sm px-4 py-3 transition-all duration-150 group block"
          >
            <span className="text-brand-text-dim text-xs font-mono mt-0.5 w-6 shrink-0">
              {file.split('-')[0]}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-brand-parchment text-sm font-medium group-hover:text-brand-gold transition-colors">{title}</p>
              <p className="text-brand-text-dim text-xs mt-0.5">{desc}</p>
            </div>
            <span className="text-brand-text-dim text-xs shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
              GitHub ↗
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
