import { css, FlattenSimpleInterpolation } from 'styled-components';
import * as colors from 'design/colors/colors';
import { grey100, grey200, grey300, grey600, transparent, white } from 'design/colors/shades';
import { Background, Border, TextColor } from 'design/types';
import { labelMediumStyles } from 'design/typography/styles/labels';

export type ButtonTheme = 'primary' | 'secondary' | 'tertiary';
export type ButtonShape = 'filled' | 'outlined' | 'text';

type ButtonState = { base: string; focus: string; hover: string; disabled: string };
type ButtonColorState = Omit<ButtonState, 'disabled'>;
type ButtonColorTheme = Record<ButtonTheme, ButtonColorState>;

export const buttonColorThemes: ButtonColorTheme = {
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

type GenerateButtonThemeOptions = {
	background: Background;
	border: Border;
	color?: TextColor;
};
const generateButtonTheme = ({ background, border, color }: GenerateButtonThemeOptions) => css`
	background: ${background};
	border: 1px solid ${border};
	${color && `color: ${color}`};
`;

type ButtonStyles = Record<keyof ButtonState, FlattenSimpleInterpolation>;
const filledButtonStyles = ({ base, focus, hover }: ButtonColorState): ButtonStyles => ({
	base: generateButtonTheme({ background: base, border: base, color: white }),
	disabled: generateButtonTheme({ background: grey200, border: grey200, color: grey600 }),
	focus: generateButtonTheme({ background: hover, border: focus }),
	hover: generateButtonTheme({ background: hover, border: hover }),
});

const outlinedButtonStyles = ({ base, hover }: ButtonColorState): ButtonStyles => ({
	base: generateButtonTheme({ background: transparent, border: base, color: base }),
	disabled: generateButtonTheme({ background: transparent, border: grey300, color: grey300 }),
	focus: generateButtonTheme({ background: transparent, border: transparent, color: base }),
	hover: generateButtonTheme({ background: hover, border: hover, color: white }),
});

const textButtonStyles = ({ base }: ButtonColorState): ButtonStyles => ({
	base: generateButtonTheme({ background: transparent, border: transparent, color: base }),
	disabled: generateButtonTheme({
		background: transparent,
		border: transparent,
		color: grey300,
	}),
	focus: generateButtonTheme({ background: grey100, border: grey100, color: base }),
	hover: generateButtonTheme({ background: grey100, border: grey100, color: base }),
});

type ThemeStyles = {
	[theme in ButtonTheme]: ButtonStyles;
};
type ButtonStylesRef = { [shape in ButtonShape]: ThemeStyles };

const buttonStyles: ButtonStylesRef = {
	filled: {
		primary: filledButtonStyles(buttonColorThemes.primary),
		secondary: filledButtonStyles(buttonColorThemes.secondary),
		tertiary: filledButtonStyles(buttonColorThemes.tertiary),
	},
	outlined: {
		primary: outlinedButtonStyles(buttonColorThemes.primary),
		secondary: outlinedButtonStyles(buttonColorThemes.secondary),
		tertiary: outlinedButtonStyles(buttonColorThemes.tertiary),
	},
	text: {
		primary: textButtonStyles(buttonColorThemes.primary),
		secondary: textButtonStyles(buttonColorThemes.secondary),
		tertiary: textButtonStyles(buttonColorThemes.tertiary),
	},
};

export type GenerateButtonStyleOptions = { theme: ButtonTheme; shape: ButtonShape };
/**
 * Generate filled buttom styles.
 */
export const generateButtonStyle = ({ shape, theme }: GenerateButtonStyleOptions) => css`
	${buttonStyles?.[shape]?.[theme].base}
	&:hover {
		${buttonStyles?.[shape]?.[theme].hover}
	}
	&:focus {
		${buttonStyles?.[shape]?.[theme].focus}
		box-shadow: 0px 0px 0px 4px ${buttonColorThemes[theme].focus};
	}
	&:disabled {
		cursor: not-allowed;
		${buttonStyles?.[shape]?.[theme].disabled}
	}
`;

/**
 * Styles shared by all button shapes and themes.
 */
export const sharedButtonStyles = () => css`
	${labelMediumStyles};
	padding: 12px 24px;
	border-radius: 100vw;
	text-align: center;
	text-decoration: none;
	transition: all 0.5s ease;
`;
