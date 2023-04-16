import { ButtonHTMLAttributes, FC } from 'react';
import { StyledButton } from '@/design/components/buttons/base';
import { GenerateButtonStyleOptions } from '@/design/components/buttons/styles';

export type ButtonStyleProps = Partial<GenerateButtonStyleOptions> & { onClick?: () => void };
export type ButtonProps = ButtonStyleProps & ButtonHTMLAttributes<ButtonStyleProps>;
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
		<StyledButton theme={theme} shape={shape} onClick={onClick} disabled={buttonProps.disabled}>
			{icon && icon}
			{children}
		</StyledButton>
	);
};
