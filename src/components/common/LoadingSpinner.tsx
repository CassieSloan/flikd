import { FC } from 'react';
import styled from 'styled-components';
import { rotate360 } from '../../design/fonts/micro-interactions';

const LoadingSpin = styled.div`
  width: 4rem;
  height: 4rem;
  box-sizing: border-box;
  position: relative;
  border-radius: 50%;
  border-top: 6px solid #00acc1;
  border-left: 6px solid transparent;
  border-bottom: 6px solid #00acc1;
  border-right: 6px solid transparent;
  animation: 1.5s infinite rotateMe;
  animation-delay: 0.2s;
    &:after {
    content: "";
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    left: 0.4rem;
    top: 0.4rem;
    box-sizing: border-box;
    border-radius: 50%;
    border-top: 5px solid #60dbeb;
    border-left: 5px solid transparent;
    border-bottom: 5px solid #60dbeb;
    border-right: 5px solid transparent;
    animation: 1.5s infinite rotateMe;
    }
  ${rotate360()}
`

/**
 * Render LoadingSpinner component.
 */
export const LoadingSpinner: FC = () => <LoadingSpin />
