import { ButtonHTMLAttributes, FC } from 'react';
import { StyledButton } from '@/design/components/buttons/base';
import { GenerateButtonStyleOptions } from '@/design/components/buttons/styles';

type ButtonProps = Partial<GenerateButtonStyleOptions>;
/**
 * Render Component component.
 */
export const Button: FC<ButtonProps & ButtonHTMLAttributes<ButtonProps>> = ({
	children,
	onClick,
	shape = 'filled',
	theme = 'primary',
	...buttonProps
}) => {
	return (
		<StyledButton
			theme={theme}
			shape={shape}
			onClick={() => onClick}
			disabled={buttonProps.disabled}
		>
			{children}
		</StyledButton>
	);
};
