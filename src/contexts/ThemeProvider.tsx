import { useTheme } from '@/hooks/useTheme';
import { ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';

function MyThemeProvider({ children }: { children: ReactNode }): JSX.Element {
  const { theme } = useTheme();

  const Provider: any = ThemeProvider;

  return <Provider theme={theme}>{children}</Provider>;
}

export default MyThemeProvider;
