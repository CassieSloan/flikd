import { css } from 'styled-components';
import { grey200 } from './shades';

/**
 * Light box shadow using grey200/#E7E0EC;.
 */
export const lightBoxShadow = () =>
	css`
		box-shadow: 0px 2px 4px ${grey200};
	`;
