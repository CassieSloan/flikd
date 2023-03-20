import { css, FlattenSimpleInterpolation } from 'styled-components';

/**
 * &:hover helper that accepts styles.
 */
export const onHover = (styles: FlattenSimpleInterpolation) => css`
	&:hover {
		${styles}
	}
`;

export const alignCenterHorizontal = css`
	left: 50%;
	transform: translateX(-50%);
`;

export const alignCenterVertical = css`
	top: 50%;
	transform: translateY(-50%);
`;

type FlexProps = {
	direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
	align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
	justify?:
		| 'flex-start'
		| 'flex-end'
		| 'center'
		| 'space-between'
		| 'space-around'
		| 'space-evenly';
	gap?: number;
	wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
};
/**
 * Flex constructor.
 */
export const flex = ({ align, direction, gap, justify, wrap }: FlexProps) =>
  css`
		display: flex;
		${direction && `flex-direction: ${direction};`}
		${justify && `justify-content: ${justify};`}
    ${align && `align-items: ${align};`}
    ${gap && ` gap: ${gap}px;`}
    ${wrap && `flex-wrap: ${wrap};`}
	`;

type GridProps = {
	columns?: number;
	rows?: number;
	gap?: number;
	align?: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
};
/**
 * Grid constructor.
 */
export const grid = ({ align, columns = 2, gap }: GridProps) => css`
	display: grid;
	grid-template-columns: repeat(${columns}, 1fr);
	${gap && `gap: ${gap}px`};
	${align && `align-items: ${align}`};
`;
