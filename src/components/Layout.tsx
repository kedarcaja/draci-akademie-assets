import { useState } from 'react'
import { navItems } from '../data/navigation'

interface LayoutProps {
  children: (view: string) => React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [view, setView] = useState('home')

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col">
      {/* Top nav */}
      <header className="border-b border-brand-border bg-brand-darker sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-6 h-14">
          <div className="flex items-center gap-2 mr-4">
            <img
              src="/images/global/logo/dragon-emblem.png"
              alt="logo"
              className="w-7 h-7 object-contain"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
            <span className="font-cinzel text-brand-gold font-bold text-sm tracking-widest uppercase">
              Dračí akademie
            </span>
            <span className="text-brand-text-dim text-xs ml-1">· assets</span>
          </div>

          <nav className="flex items-center gap-1">
            {navItems.map(({ label, view: v, icon }) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-sm transition-all duration-150 ${
                  view === v
                    ? 'bg-brand-gold/15 text-brand-gold border border-brand-gold/30'
                    : 'text-brand-text-muted hover:text-brand-text border border-transparent'
                }`}
              >
                <span>{icon}</span>
                {label}
              </button>
            ))}
          </nav>

          <div className="ml-auto text-[11px] text-brand-text-dim">
            assets.draciakademie.cz
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        {children(view)}
      </main>
    </div>
  )
}
