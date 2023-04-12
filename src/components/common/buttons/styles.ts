import { css } from 'styled-components';
import * as colors from '../../../design/colors/colors';
import { grey200, grey500, grey600, grey800, white } from '../../../design/colors/shades';
import { labelMediumStyles } from '../../../design/typography/styles/labels';
import { ButtonType, Theme } from './base';

type ButtonThemeStates = { base: string; focus: string; hover: string };
type ButtonThemesType = Record<Theme, ButtonThemeStates>;

const buttonThemes: ButtonThemesType = {
	primary: {
		base: colors.primary500,
		focus: colors.primaryTint,
		hover: colors.primary700,
	},
	secondary: {
		base: colors.secondary500,
		focus: colors.secondaryTint,
		hover: colors.secondary700,
	},
	tertiary: {
		base: colors.tertiary500,
		focus: colors.tertiaryTint,
		hover: colors.tertiary700,
	},
};

type BorderBackgroundValues = { background: string; border: string };
const getBorderBackground = ({ background, border }: BorderBackgroundValues) => css`
	background: ${background};
	border: 2px solid ${border};
`;
// get button theme
// get button type
const getFilledButtonStyle = ({ base, focus, hover }: ButtonThemeStates) => css`
	${getBorderBackground({ background: base, border: base })}
	color: ${white};
	transition: all 0.5s ease;
	&:hover {
		${getBorderBackground({ background: hover, border: hover })}
	}
	&:disabled {
		color: ${grey600};
		${getBorderBackground({ background: grey200, border: grey200 })}
	}
	&:focus {
		${getBorderBackground({ background: hover, border: hover })}
		box-shadow: 0px 0px 0px 4px ${focus};
	}
`;

const getOutlinedButtonStyle = ({ base, focus, hover }: ButtonThemeStates) => css`
	${getBorderBackground({ background: 'transparent', border: base })}
	color: ${focus};
	transition: all 0.5s ease;
	&:hover {
		${getBorderBackground({ background: hover, border: hover })}
	}
	&:focus {
		${getBorderBackground({ background: 'transparent', border: hover })}
		box-shadow: 0px 0px 0px 4px ${focus};
	}
	&:disabled {
		${getBorderBackground({ background: grey200, border: grey200 })};
	}
`;

/**
 * Get button styles by theme and shape.
 */
export const getButtonStyles = (theme: Theme, shape: ButtonType) => {
	if (shape === 'outline')  return getOutlinedButtonStyle((theme && buttonThemes[theme]));
	if (shape === 'filled') return getFilledButtonStyle((theme && buttonThemes[theme]))};
}

/**
 * Styles shared by all button shapes and themes.
 */
export const sharedButtonStyles = () => css`
	${labelMediumStyles};
	padding: 12px 24px;
	border-radius: 100vw;
	text-align: center;
	text-decoration: none;
`;
