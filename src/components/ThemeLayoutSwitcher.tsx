import { useState } from 'react';
import './ThemeLayoutSwitcher.css';
import { useThemeLayout } from '../hooks/useThemeLayout';
import type { LayoutMode, ThemeMode } from '../context/ThemeLayoutContext';

const ThemeLayoutSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, layout, setTheme, setLayout } = useThemeLayout();

  return (
    <div className="theme-layout-switcher">
      <button
        type="button"
        className="theme-layout-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Open theme and layout switcher"
      >
        🎨
      </button>

      {isOpen && (
        <div className="theme-layout-panel">
          <label htmlFor="theme-select">Tema</label>
          <select
            id="theme-select"
            value={theme}
            onChange={(event) => setTheme(event.target.value as ThemeMode)}
          >
            <option value="ocean">Ocean</option>
            <option value="emerald">Emerald</option>
            <option value="sunset">Sunset</option>
            <option value="violet">Violet</option>
            <option value="ruby">Ruby</option>
            <option value="midnight">Midnight</option>
            <option value="pink">Pink</option>
            <option value="yellow">Yellow</option>
            <option value="orange">Orange</option>
            <option value="lime">Lime</option>
            <option value="aqua">Aqua</option>
          </select>

          <label htmlFor="layout-select">Layout</label>
          <select
            id="layout-select"
            value={layout}
            onChange={(event) => setLayout(event.target.value as LayoutMode)}
          >
            <option value="zen-guardian">Zen Guardian</option>
            <option value="terminal-mode">Researcher Terminal</option>
            <option value="academic-hybrid">Academic Hybrid</option>
            <option value="modular-cards">Modular Cards</option>
            <option value="narrative-story">Narrative Story</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default ThemeLayoutSwitcher;
