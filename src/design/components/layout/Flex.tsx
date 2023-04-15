import { CSSProperties } from 'react';
import styled from 'styled-components';

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
	flex?: CSSProperties['flex'];
};

export const Flex = styled.div<FlexProps>`
	display: flex;
	${(props) => props.direction && `flex-direction: ${props.direction}`};
	${(props) => props.justify && `justify-content: ${props.justify}`};
	${(props) => props.align && `align-items: ${props.align}`};
	${(props) => props.wrap && `flex-wrap: ${props.wrap}`};
	${(props) => props.gap && `gap: ${props.gap}px`};
	${(props) => props.flex && `flex: ${props.flex}`};
`;
