import { useContext } from 'react';

import { ThemeContext, ContextData } from '@/contexts/ThemeContext';

export function useTheme(): ContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(`useAuth must be used within a AuthContext.`);
  }

  return context;
}
