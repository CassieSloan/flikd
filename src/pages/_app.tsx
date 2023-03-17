import type { AppProps } from 'next/app';

/**
 * App root.
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
