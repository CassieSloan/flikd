import type { AppProps } from 'next/app';
import React from 'react';

/**
 * App root.
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
