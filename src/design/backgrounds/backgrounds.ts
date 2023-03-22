import { css } from 'styled-components';

/**
 * Frosted glass effect.
 */
export const glassBackground = () => css`
	background: rgba(255, 255, 255, 0.2);
	box-shadow: 1px 1px 0px 0px rgba(255, 255, 255, 0.3);
	backdrop-filter: blur(3px);
`;
