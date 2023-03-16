import { css, FlattenSimpleInterpolation } from "styled-components";

/**
 * &:hover helper that accepts styles.
 */
export const onHover = (styles: FlattenSimpleInterpolation) => css`
  &:hover {
    ${styles}
  }
`;
