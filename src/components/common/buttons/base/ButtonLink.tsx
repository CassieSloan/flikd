import { FC } from 'react';
import { StyledLink } from '@/design/components/buttons/base';
import { GenerateButtonStyleOptions } from '@/design/components/buttons/styles';
import { LinkProps } from '../../Link';

type ButtonStyleProps = Partial<GenerateButtonStyleOptions>;
/**
 * Render Component component.
 */
export const ButtonLink: FC<LinkProps & ButtonStyleProps> = ({
	children,
	shape = 'filled',
	theme = 'primary',
	to,
}) => {
	return (
		<StyledLink theme={theme} shape={shape} to={to}>
			{children}
		</StyledLink>
	);
};
