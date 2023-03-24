import { PropsWithChildren } from 'react';
import SEO, { SEOProps } from './SEO';

type PageLayoutProps = {
	seo?: SEOProps;
} & PropsWithChildren;
/**
 * Homepage component.
 */
export const PageLayout = ({ children, seo }: PageLayoutProps) => {
	return (
		<>
			<SEO {...seo} />
			{children}
		</>
	);
};
