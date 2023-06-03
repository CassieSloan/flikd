import { Head, Html, Main, NextScript } from 'next/document';
import { satoshiVariableFont } from './_app';

const NewMain = Main.bind({ className: satoshiVariableFont.className });

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
			<body className={satoshiVariableFont.className}>
				<NewMain />
			</body>
			<noscript>You need to enable JavaScript to run this app.</noscript>
			<div id="root"></div>
		</Html>
	);
}
