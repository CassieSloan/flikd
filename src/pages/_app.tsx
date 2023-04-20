import { Grommet } from 'grommet';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import Context from '../context/context';
import { FontFamily } from '../design/typography/typography';

const GlobalStyleSheet = createGlobalStyle`
	* {
		${FontFamily};
		h1, h2, h3, h4, h5, h6 {
			margin: 0 0 16px 0;
		}
		
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
