import '@fontsource/inter';
import { Grommet } from 'grommet';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { FontFamily } from '../design/typography/typography';

const GlobalStyle = createGlobalStyle`
	${FontFamily}
	body {
		margin: 0;
	}
`;

const theme = {
	global: {
		font: {
			family: 'Inter',
			size: '18px',
		},
	},
};
/**
 * App root.
 */
export default function App({ Component, pageProps }: AppProps) {
	return (
		<Grommet full theme={theme}>
			<GlobalStyle />
			<Component {...pageProps} />
		</Grommet>
	);
}
