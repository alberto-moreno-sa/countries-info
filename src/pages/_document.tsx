import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" name="charset" property="charset" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:ital,wght@0,500;1,500&display=swap"
            rel="stylesheet"
          />
          <meta
            property="apple-mobile-web-app-status-bar-style"
            name="apple-mobile-web-app-status-bar-style"
            content="black"
          />
          <meta
            property="apple-mobile-web-app-capable"
            name="apple-mobile-web-app-capable"
            content="yes"
          />
          <link rel="icon" href="/favicon.png" />
          <link rel="icon" href="/android-icon.png" sizes="192x192" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/touch-icon-iphone-retina.png"
          />
          <script
            src="https://kit.fontawesome.com/262071eed0.js"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript crossOrigin="" />
        </body>
      </Html>
    );
  }
}

export default Document;
