import { css } from 'styled-components';
import { primary700 } from './colors';

/**
 * Create gredient helper.
 */
export const createGradient = (color: string, color2: string) =>
	css`linear-gradient(to left, ${color}, ${color2})`;

export const primaryTints = createGradient(primary700, primary700);
