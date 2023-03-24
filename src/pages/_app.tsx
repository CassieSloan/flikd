import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { FontFamily } from '../design/typography/typography';

const GlobalStyle = createGlobalStyle`
  ${FontFamily}
	body {
		margin: 0;
	}
`;

/**
 * App root.
 */
export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}
