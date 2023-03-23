import { Head, Html, Main, NextScript } from 'next/document';
import { PropsWithChildren } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { SEOProps } from '../components/common/SEO';
import { animatedBlockBackground } from '../design/backgrounds/backgrounds';
import { FontFamily } from '../design/typography/typography';

type PageLayoutProps = {
	seo?: SEOProps;
} & PropsWithChildren;

const StyledMain = styled(Main)`
	${FontFamily}
`;

const GlobalStyle = createGlobalStyle`
  ${FontFamily}
  body {
    ${animatedBlockBackground()}
  }
`;

/**
 * Root document export.
 */
export default function Document() {
	console.log('doc being used');
	return (
		<Html lang="en">
			<GlobalStyle />
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<meta name="robots" content="noindex" />
				<NextScript />
			</Head>
			<body>
				<StyledMain />
			</body>
			<noscript>You need to enable JavaScript to run this app.</noscript>
			<div id="root"></div>
		</Html>
	);
}
