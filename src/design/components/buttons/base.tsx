import styled from 'styled-components';
import Link from 'components/common/Link';
import { generateButtonStyle, GenerateButtonStyleOptions, sharedButtonStyles } from './styles';

export const StrippedButton = styled.button`
	background: transparent;
	color: inherit;
	border: none;
	font-size: inherit;
	cursor: pointer;
`;

export const StyledButton = styled(StrippedButton)<GenerateButtonStyleOptions>`
	${({ shape, theme }) => generateButtonStyle({ shape, theme })}
	${sharedButtonStyles()};
`;

export const StyledLink = styled(Link)<GenerateButtonStyleOptions>`
	text-decoration: none;
	${({ shape, theme }) => generateButtonStyle({ shape, theme })}
	${sharedButtonStyles()};
`;
