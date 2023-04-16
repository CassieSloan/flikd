import styled from 'styled-components';
import Link from 'components/common/Link';
import { generateButtonStyle, GenerateButtonStyleOptions, sharedButtonStyles } from './styles';

export const UnstyledButton = styled.button`
	background: transparent;
	color: inherit;
	border: none;
	font-size: inherit;
	cursor: pointer;
	padding: 0px;
`;

export const StyledButton = styled(UnstyledButton)<GenerateButtonStyleOptions>`
	${({ shape, theme }) => generateButtonStyle({ shape, theme })}
	${sharedButtonStyles()};
`;

export const StyledLink = styled(Link)<GenerateButtonStyleOptions>`
	text-decoration: none;
	${({ shape, theme }) => generateButtonStyle({ shape, theme })}
	${sharedButtonStyles()};
`;
