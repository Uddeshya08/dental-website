import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif: ['Spectral', 'Georgia', 'serif']
      },
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        surface: 'hsl(var(--surface) / <alpha-value>)',
        'surface-2': 'hsl(var(--surface-2) / <alpha-value>)',
        muted: 'hsl(var(--muted) / <alpha-value>)',
        'muted-bg': 'hsl(var(--muted-bg) / <alpha-value>)',
        primary: 'hsl(var(--primary) / <alpha-value>)',
        'primary-foreground': 'hsl(var(--primary-foreground) / <alpha-value>)',
        accent: 'hsl(var(--accent) / <alpha-value>)',
        'accent-foreground': 'hsl(var(--accent-foreground) / <alpha-value>)',
        border: 'hsl(var(--border) / <alpha-value>)',
        success: 'hsl(var(--success) / <alpha-value>)',
        ink: 'hsl(var(--ink) / <alpha-value>)',
        'ink-foreground': 'hsl(var(--ink-foreground) / <alpha-value>)'
      },
      borderRadius: { DEFAULT: 'var(--radius)' }
    }
  },
  plugins: []
};
export default config;
