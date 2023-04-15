import { css } from 'styled-components';
import { tertiary700 } from './colors';

/**
 * Create gredient helper.
 */
export const createGradient = (color: string, color2: string) =>
	css`linear-gradient(to left, ${color}, ${color2})`;

export const tertiaryTints = createGradient(tertiary700, tertiary700);
