import { css, FlattenSimpleInterpolation } from 'styled-components';

/**
 * &:hover helper that accepts styles.
 */
export const onHover = (styles: FlattenSimpleInterpolation) => css`
  &:hover {
    ${styles}
  }
`;

export const alignCenterHorizontal = css`
  left: 50%;
  transform: translateX(-50%);
`;

export const alignCenterVertical = css`
  top: 50%;
  transform: translateY(-50%);
`;
