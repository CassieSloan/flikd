import Head from 'next/head';
import { FC } from 'react';

export type SEOProps = {
	title?: string;
	description?: string;
	image?: string;
};

/**
 * Page Head (SEO/Analytics/TPS).
 */
const SEO: FC<SEOProps> = ({ description, title }: SEOProps) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="icon" href="/favicon.ico" />
			<meta name="robots" content="noindex" />
		</Head>
	);
};

export default SEO;
