import { CSSProperties } from 'react';
import styled from 'styled-components';

type Props = {
  direction?: CSSProperties['flexDirection'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignContent'];
  wrap?: CSSProperties['flexWrap'];
  gap?: CSSProperties['gap'];
  flex?: CSSProperties['flex'];
};

const blep = 'hello';

export const Flex = styled.div<Props>`
  display: flex;
  ${(props) => props.direction && `flex-direction: ${props.direction}`};
  ${(props) => props.justify && `justify-content: ${props.justify}`};
  ${(props) => props.align && `align-items: ${props.align}`};
  ${(props) => props.wrap && `flex-wrap: ${props.wrap}`};
  ${(props) => props.gap && `gap: ${props.gap}`};
  ${(props) => props.flex && `flex: ${props.flex}`};
`;
