import { FC, MouseEventHandler, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import * as colors from '../../design/colors/colors';
import { StrippedButton } from '../../design/components/StrippedButton';
import PlusTile from '../../images/icons/plusTile.svg';
import Link, { LinkProps } from './Link';

type Color = keyof typeof colors;
type StyledButtonProps = { background?: Color };

const buttonStyles = (background?: Color) => css`
	padding: 8px 12px;
	background: ${background ? colors[background] : colors.tertiary50};
	color: white;
	text-decoration: none;
	border-radius: 12px;
	text-align: center;
`;

const StyledButton = styled(StrippedButton)<StyledButtonProps>`
	${({ background }) => buttonStyles(background || 'tertiary50')}
`;

const StyledLink = styled(Link)<StyledButtonProps>`
	${({ background }) => buttonStyles(background || 'tertiary50')};
`;

type ButtonProps = {
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
} & PropsWithChildren;
/**
 * Render Component component.
 */
export const Button: FC<ButtonProps & StyledButtonProps> = ({
	background,
	children,
	onClick,
}: ButtonProps & StyledButtonProps) => {
	return (
		<StyledButton background={background} onClick={onClick}>
			{children}
		</StyledButton>
	);
};
/**
 * Render Component component.
 */
export const ButtonLink: FC<LinkProps & StyledButtonProps> = ({
	background,
	children,
	to,
}: LinkProps & StyledButtonProps) => {
	return (
		<StyledLink background={background} to={to}>
			{children}
		</StyledLink>
	);
};

/**
 * Render Component component.
 */
export const PlusButton: FC<ButtonProps> = ({ onClick }: ButtonProps) => {
	return (
		<StyledButton onClick={onClick}>
			<PlusTile />
		</StyledButton>
	);
};
