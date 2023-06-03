import { Grommet } from 'grommet';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { createGlobalStyle } from 'styled-components';
import { offBlack } from '@/design/colors/shades';
import Context from '../context/context';

export const satoshiVariableFont = localFont({
	src: '../design/typography/fonts/Satoshi-Variable.woff2',
});

const GlobalStyleSheet = createGlobalStyle`
	* {
		h1, h2, h3, h4, h5, h6, p {
			margin: 0 0 16px 0;
				color: ${offBlack};
		}
	}
	body {
		margin: 0;
		background-color: ${offBlack};
	}
`;

/**
 * App root.
 */
export default function App({ Component, pageProps }: AppProps) {
	return (
		<Grommet full>
			<GlobalStyleSheet />
			<Context>
				<Component {...pageProps} className={satoshiVariableFont.className} />
			</Context>
		</Grommet>
	);
}
