import { PropsWithChildren } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { animatedBlockBackground } from '../../design/backgrounds/backgrounds';
import { FontFamily } from '../../design/typography/typography';
import SEO, { SEOProps } from './SEO';

type PageLayoutProps = {
	seo?: SEOProps;
} & PropsWithChildren;

const StyledMain = styled.main`
	${FontFamily}
`;

const GlobalStyle = createGlobalStyle`
  ${FontFamily}
  body {
    ${animatedBlockBackground()}
  }
`;

/**
 * Homepage component.
 */
export const PageLayout = ({ children, seo }: PageLayoutProps) => {
	return (
		<>
			<html lang="en">
				<GlobalStyle />
				<SEO {...seo} />
				<body>
					<StyledMain>{children}</StyledMain>
				</body>
				<noscript>You need to enable JavaScript to run this app.</noscript>
				<div id="root"></div>
			</html>
		</>
	);
};
