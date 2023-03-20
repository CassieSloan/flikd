import { Head, Html, Main, NextScript } from 'next/document';

/**
 * Root document export.
 */
export default function Document() {
  console.log('doc being used')
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
