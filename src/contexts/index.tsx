import { DefaultSeo } from 'next-seo';
import React, { ReactNode } from 'react';

import { ThemeContextProvider } from './ThemeContext';

import MyThemeProvider from './ThemeProvider';

import SEO from '../../next-seo-config';

interface Props {
  children?: ReactNode;
}

export function AppProviders({ children }: Props) {
  return (
    <ThemeContextProvider>
      <DefaultSeo {...SEO} />
      <MyThemeProvider>{children}</MyThemeProvider>
    </ThemeContextProvider>
  );
}
