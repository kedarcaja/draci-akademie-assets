import { useState } from 'react'

interface HtmlSnippetCardProps {
  url: string
  alt: string
  label?: string
  version?: number
}

export default function HtmlSnippetCard({ url, alt, label, version }: HtmlSnippetCardProps) {
  const [copied, setCopied] = useState(false)

  const src = version ? `${url}?v=${version}` : url
  const snippet = `<img\n  src="${src}"\n  alt="${alt}"\n/>`

  const copy = () => {
    navigator.clipboard.writeText(snippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="bg-brand-card border border-brand-border rounded-sm overflow-hidden">
      {label && (
        <div className="px-4 py-2 border-b border-brand-border">
          <p className="text-brand-text-muted text-xs tracking-widest uppercase">{label}</p>
        </div>
      )}
      <pre className="px-4 py-3 text-[12px] text-brand-parchment font-mono leading-relaxed overflow-x-auto whitespace-pre">
        {snippet}
      </pre>
      <div className="px-4 pb-3">
        <button
          onClick={copy}
          className="text-[11px] px-3 py-1.5 border border-brand-border text-brand-text-muted hover:text-brand-gold hover:border-brand-gold/40 transition-all duration-150 rounded-sm"
        >
          {copied ? '✓ Zkopírováno' : 'Kopírovat'}
        </button>
      </div>
    </div>
  )
}
