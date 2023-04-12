import { Grommet } from 'grommet';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import Context from '../context/context';
import { FontFamily } from '../design/typography/typography';

const GlobalStyleSheet = createGlobalStyle`
	* {
		${FontFamily}
	}
	body {
		margin: 0;
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
				<Component {...pageProps} />
			</Context>
		</Grommet>
	);
}
