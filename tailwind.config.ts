import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-dark':        '#0A0C12',
        'brand-darker':      '#070911',
        'brand-card':        '#111620',
        'brand-border':      '#1E2535',
        'brand-gold':        '#C9943A',
        'brand-gold-light':  '#E8B84B',
        'brand-parchment':   '#DEC991',
        'brand-text':        '#A8B4C8',
        'brand-text-muted':  '#7A8BA3',
        'brand-text-dim':    '#4A5568',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'Georgia', 'serif'],
        inter:  ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
