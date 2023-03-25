import '@fontsource/inter';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import {
	primary70,
	primary80,
	secondary70,
	secondary80,
	tertiary70,
} from '../colors/colors';
import { black, white } from '../colors/shades';

export const FontFamily = css`
	* {
		font-family: 'Inter';
		font-weight: 300;
	}
`;

export const Heading1 = styled.h1`
	font-size: 32px;
	margin: 0;
`;
export const Heading3 = styled.h3`
	font-size: 24px;
	margin: 0;
`;
export const Heading4 = styled.h4`
	font-size: 20px;
	margin: 0;
`;

export const Body = styled.p`
	font-size: 16px;
`;

export const Span = styled.span`
	font-size: 16px;
`;

const StyledRichText = styled.div`
	p {
		font-size: 16px;
	}
	em {
		font-style: italic;
	}
	strong {
		font-weight: 700;
	}
`;

type RichTextProps = { richText: string };

/**
 * Rich Text component.
 */
export const RichText: FC<RichTextProps> = ({ richText }) => {
	return <StyledRichText dangerouslySetInnerHTML={{ __html: richText }} />;
};

type ColorBackgroundStyles = {
	color?: string;
	background?: string;
	padding?: number;
};

type TagBackgroundStyle =
	| 'alert'
	| 'success'
	| 'glass'
	| 'primary'
	| 'secondary'
	| 'tertiary';
type TagStyleProps = TagBackgroundStyle | ColorBackgroundStyles;

/**
 * Text tag styles.
 */
export const tagStyles = (props: TagStyleProps) => {
	console.log('props', props);
	const alert = css`
		background: ${primary70};
		color: ${white};
	`;

	const success = css`
		background: ${secondary70};
		color: ${black};
	`;

	const primary = css`
		background: ${primary80};
		color: ${white};
	`;

	const secondary = css`
		background: ${secondary80};
		color: ${white};
	`;

	const tertiary = css`
		background: ${tertiary70};
		color: ${white};
	`;
	if (props === 'alert') return alert;
	if (props === 'success') return success;
	if (props === 'primary') return primary;
	if (props === 'secondary') return secondary;
	if (props === 'tertiary') return tertiary;
	return;
};
