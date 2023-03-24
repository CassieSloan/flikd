import { Head, Html, Main, NextScript } from 'next/document';

/**
 * Root document export.
 */
export default function Document() {
	console.log('doc being used');
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="robots" content="noindex" />
				<NextScript />
			</Head>
			<body>
				<Main />
			</body>
			<noscript>You need to enable JavaScript to run this app.</noscript>
			<div id="root"></div>
		</Html>
	);
}
