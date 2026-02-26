import { createContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type ThemeMode =
  | 'ocean'
  | 'emerald'
  | 'sunset'
  | 'violet'
  | 'ruby'
  | 'midnight'
  | 'pink'
  | 'yellow'
  | 'orange'
  | 'lime'
  | 'aqua';
export type LayoutMode = 'zen-guardian' | 'terminal-mode' | 'academic-hybrid' | 'modular-cards' | 'narrative-story';

interface ThemeLayoutContextType {
  theme: ThemeMode;
  layout: LayoutMode;
  setTheme: (theme: ThemeMode) => void;
  setLayout: (layout: LayoutMode) => void;
}

const THEME_KEY = 'portfolio-theme';
const LAYOUT_KEY = 'portfolio-layout';
const DEFAULT_THEME: ThemeMode = 'ocean';
const DEFAULT_LAYOUT: LayoutMode = 'zen-guardian';

export const ThemeLayoutContext = createContext<ThemeLayoutContextType | undefined>(undefined);

const getInitialTheme = (): ThemeMode => {
  const saved = localStorage.getItem(THEME_KEY) as ThemeMode | null;
  if (
    saved === 'ocean' ||
    saved === 'emerald' ||
    saved === 'sunset' ||
    saved === 'violet' ||
    saved === 'ruby' ||
    saved === 'midnight' ||
    saved === 'pink' ||
    saved === 'yellow' ||
    saved === 'orange' ||
    saved === 'lime' ||
    saved === 'aqua'
  ) {
    return saved;
  }
  localStorage.setItem(THEME_KEY, DEFAULT_THEME);
  return DEFAULT_THEME;
};

const getInitialLayout = (): LayoutMode => {
  const saved = localStorage.getItem(LAYOUT_KEY) as LayoutMode | null;
  if (
    saved === 'zen-guardian' ||
    saved === 'terminal-mode' ||
    saved === 'academic-hybrid' ||
    saved === 'modular-cards' ||
    saved === 'narrative-story'
  ) {
    return saved;
  }
  localStorage.setItem(LAYOUT_KEY, DEFAULT_LAYOUT);
  return DEFAULT_LAYOUT;
};

export const ThemeLayoutProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [layout, setLayout] = useState<LayoutMode>(getInitialLayout);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-layout', layout);
    localStorage.setItem(LAYOUT_KEY, layout);
  }, [layout]);

  const value = useMemo(
    () => ({
      theme,
      layout,
      setTheme,
      setLayout,
    }),
    [theme, layout]
  );

  return <ThemeLayoutContext.Provider value={value}>{children}</ThemeLayoutContext.Provider>;
};
