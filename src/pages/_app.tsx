import { AppProps } from 'next/app';

import { AppProviders } from '@/contexts';

import GlobalStyle from '@/styles/global';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppProviders>
  );
}
