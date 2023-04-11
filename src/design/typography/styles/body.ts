import { PropsWithChildren } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

export const bodyLRegular = css`
	font-size: 18px;
	font-weight: 400;
	line-height: 22px;
	letter-spacing: 0.01em;
`;

export const bodyLMedium = css`
	font-size: 18px;
	font-weight: 500;
	line-height: 22px;
	letter-spacing: 0.01em;
`;

export const bodyMRegular = css`
	font-size: 16px;
	font-weight: 400;
	line-height: 19px;
	letter-spacing: 0.01em;
`;

export const bodyMMedium = css`
	font-size: 16px;
	font-weight: 500;
	line-height: 19px;
	letter-spacing: 0.01em;
`;

export const bodySRegular = css`
	font-size: 14px;
	font-weight: 400;
	line-height: 17px;
	letter-spacing: 0.01em;
`;

export const bodySMedium = css`
	font-size: 14px;
	font-weight: 500;
	line-height: 17px;
	letter-spacing: 0.01em;
`;

const bodyStyles: Record<string, FlattenSimpleInterpolation> = {
	bodyLMedium,
	bodyLRegular,
	bodyMMedium,
	bodyMRegular,
	bodySMedium,
	bodySRegular,
};

type BodyType =
	| 'bodyLMedium'
	| 'bodyLRegular'
	| 'bodyMMedium'
	| 'bodyMRegular'
	| 'bodySMedium'
	| 'bodySRegular';

export type BodyStyleProps = { style: BodyType };
type BodyProps = BodyStyleProps & PropsWithChildren;

// export const Paragraph = styled.p<BodyProps>`
// 	${({ style }) =>
// 		style &&
// 		css`
// 			${bodyStyles[style]}
// 		`}/* ${bodyMMedium} */
// `;
export const BodyMMedium = styled.p`
	${bodyMMedium}
`;
export const BodyMRegular = styled.p`
	${bodyMRegular}
`;
