import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { ThemeContext, type Theme, type ThemeContextValue } from '@/components/theme/themeContext'

function applyThemeToDom(theme: Theme) {
  const root = document.documentElement
  if (theme === 'dark') root.classList.add('dark')
  else root.classList.remove('dark')
}

function readStoredTheme(): Theme | null {
  try {
    const raw = localStorage.getItem('theme')
    if (raw === 'dark' || raw === 'light') return raw
    return null
  } catch {
    return null
  }
}

function writeStoredTheme(theme: Theme) {
  try {
    localStorage.setItem('theme', theme)
  } catch {
    return
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => readStoredTheme() ?? 'dark')

  useEffect(() => {
    applyThemeToDom(theme)
    writeStoredTheme(theme)
  }, [theme])

  const value = useMemo<ThemeContextValue>(() => {
    return {
      theme,
      setTheme: (next) => setThemeState(next),
      toggleTheme: () => setThemeState((t) => (t === 'dark' ? 'light' : 'dark')),
    }
  }, [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

