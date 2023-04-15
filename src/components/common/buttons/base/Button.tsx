import { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';
import { StyledButton } from '@/design/components/buttons/base';
import { GenerateButtonStyleOptions, iconButtonStyles } from '@/design/components/buttons/styles';

export type ButtonStyleProps = Partial<GenerateButtonStyleOptions> & { onClick?: () => void };
export type ButtonProps = ButtonStyleProps & ButtonHTMLAttributes<ButtonStyleProps>;

const ButtonContainer = styled(StyledButton)`
	${iconButtonStyles()}
`;
/**
 * Render Component component.
 */
export const Button: FC<ButtonProps> = ({
	children,
	icon = undefined,
	onClick,
	shape = 'filled',
	theme = 'primary',
	...buttonProps
}) => {
	return (
		<ButtonContainer theme={theme} shape={shape} onClick={onClick} disabled={buttonProps.disabled}>
			{icon && icon}
			{children}
		</ButtonContainer>
	);
};
