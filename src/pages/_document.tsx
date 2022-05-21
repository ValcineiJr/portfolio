/* eslint-disable @next/next/no-sync-scripts */
import React from 'react';
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps: any = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@300;700&family=Karla&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="https://rocketseat.com.br/favicon.ico" />
          <script
            src="/path/or/uri/to/tinymce.min.js"
            referrerPolicy="origin"
          ></script>
          <script
            src="https://cdn.tiny.cloud/1/aiuvrqo4cj0jmnvi8lf7x5kvjbecazwmufalkfcksfs91uc3/tinymce/5/tinymce.min.js"
            referrerPolicy="origin"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
