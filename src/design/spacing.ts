import { css } from 'styled-components';

type PaddingType = '64px' | '56px' | '48px' | '32px' | '24px' | '16px' | '8px' | 'none';

type DirectionalPadding = {
	top?: PaddingType;
	right?: PaddingType;
	bottom?: PaddingType;
	left?: PaddingType;
};
type Padding = PaddingType | DirectionalPadding;
type PaddingDirection = 'top' | 'right' | 'bottom' | 'left';

const getDirectionalPaddingStyles = (padding: PaddingType, direction: PaddingDirection) =>
	`padding-${direction}: ${padding !== 'none' ? padding : '0'};`;

const isDirectionalPadding = (paddingValue: Padding): paddingValue is DirectionalPadding =>
	typeof paddingValue !== 'string' &&
	('top' in paddingValue ||
		'right' in paddingValue ||
		'bottom' in paddingValue ||
		'left' in paddingValue);

const getPadding = (paddingValue: PaddingType, direction: PaddingDirection) =>
	getDirectionalPaddingStyles(paddingValue, direction);

export type PaddingProps = {
	padding?: Padding;
};
/**
 * Generates padding styles.
 */
export const getPaddingStyles = (padding?: Padding) => {
	if (!padding) return '';
	return isDirectionalPadding(padding)
		? css`
				${Object.entries(padding).map(([paddingDirection, paddingValue]) =>
					getPadding(paddingValue, paddingDirection as keyof typeof padding)
				)}
		  `
		: css`
				${getPadding(padding, 'top')}
				${getPadding(padding, 'right')}
        ${getPadding(padding, 'bottom')}
        ${getPadding(padding, 'left')}
		  `;
};
