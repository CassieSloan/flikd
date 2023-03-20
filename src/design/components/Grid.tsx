import styled from 'styled-components';

type GridProps = {
	columns?: number;
	rows?: number;
	gap?: number;
	align?: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
};

/**
 * Grid constructor.
 */
export const Grid = styled.div<GridProps>`
	display: grid;
	${(props) => props.columns && `grid-template-columns: ${props.columns}, 1fr`};
	${(props) => props.gap && `gap: ${props.gap}px`};
	${(props) => props.align && `align-items: ${props.align}`};
`;
