import React, { ReactNode } from 'react';

import { ThemeContextProvider } from './ThemeContext';

import MyThemeProvider from './ThemeProvider';

interface Props {
  children?: ReactNode;
}

export function AppProviders({ children }: Props) {
  return (
    <ThemeContextProvider>
      <MyThemeProvider>{children}</MyThemeProvider>
    </ThemeContextProvider>
  );
}
