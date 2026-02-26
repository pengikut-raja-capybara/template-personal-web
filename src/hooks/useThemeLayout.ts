import { useContext } from 'react';
import { ThemeLayoutContext } from '../context/ThemeLayoutContext';

export const useThemeLayout = () => {
  const context = useContext(ThemeLayoutContext);

  if (!context) {
    throw new Error('useThemeLayout must be used within ThemeLayoutProvider');
  }

  return context;
};
