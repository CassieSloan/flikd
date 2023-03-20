import { css } from 'styled-components';
import { primary30, primary100 } from './colors';

/**
 * Create gredient helper.
 */
export const createGradient = (color: string, color2: string) =>
	css`linear-gradient(to left, ${color}, ${color2})`;

export const primaryTints = createGradient(primary100, primary30);
