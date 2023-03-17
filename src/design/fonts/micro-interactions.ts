import { css } from 'styled-components';

/**
 * Changes color of browser text background when highlighted.
 */
export const textSelect = ({ background = '#000000', color = '#ffffff' }) => css`
  * {
    ::selection {
      background: ${background};
      color: ${color};
    }
  }
`;
/**
 * Element does gentle jump on hover.
 */
export const jump = ({ height = '8px', position = 'relative' }) => css`
  position: ${position};
  top: 0;
  transition: 0.3s ease top;
  &:hover {
    top: -${height};
  }
`;
/**
 * Element gently grows on hover.
 */
export const grow = ({ amount = 1.045 }) => css`
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(${amount});
  }
`;
/**
 * Generates gentle fade-up-down style.
 */
export const toggleFadeUp = (fadeUp?: boolean) => css`
  transition: opacity 0.5s ease, transform 0.3s ease;
  ${fadeUp
    ? css`
        transform: translateY(0);
        opacity: 1;
      `
    : css`
        transform: translateY(4px);
        opacity: 0;
      `}
`;
