import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { FontFamily } from '../../design/typography/typography';
import SEO, { SEOProps } from './SEO';

type PageLayoutProps = {
	seo?: SEOProps;
} & PropsWithChildren;

const StyledMain = styled.main`
	${FontFamily}
`;

/**
 * Homepage component.
 */
export const PageLayout = ({ children, seo }: PageLayoutProps) => {
	return (
		<>
			<SEO {...seo} />
			<StyledMain>{children}</StyledMain>
		</>
	);
};
