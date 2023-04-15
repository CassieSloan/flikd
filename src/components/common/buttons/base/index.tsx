/* eslint-disable react-hooks/exhaustive-deps */
import { View } from 'grommet-icons';
import { ButtonHTMLAttributes, FC, PropsWithChildren, useContext } from 'react';
import styled from 'styled-components';
import { addFlikToList } from '../../../../apiHelpers/fliks/addFlikToList';
import { Profile } from '../../../../context/context';
import * as colors from '../../../../design/colors/colors';
import { StrippedButton } from '../../../../design/components/StrippedButton';
import Link, { LinkProps } from '../../Link';
import {
	ButtonTheme,
	generateButtonStyle,
	GenerateButtonStyleOptions,
	sharedButtonStyles,
} from './styles';

const StyledButton = styled(StrippedButton)<GenerateButtonStyleOptions>`
	${({ shape, theme }) => generateButtonStyle({ shape, theme })}
	${sharedButtonStyles()};
`;

const StyledLink = styled(Link)<GenerateButtonStyleOptions>`
	text-decoration: none;
	${({ shape, theme }) => generateButtonStyle({ shape, theme })}
	${sharedButtonStyles()};
`;

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

type FlikActionButton = { id: number } & PropsWithChildren;
/**
 * Render Component component.
 */
export const ToWatchButton: FC<FlikActionButton> = ({ id }) => {
	console.log('id', id);
	const { authToken: token, profileInfo, setProfileInfo } = useContext(Profile);

	const formattedId = id.toString();
	const onSuccess = (res) => {
		console.log('res', res);
		const fliksToWatch = res.data;
		if (fliksToWatch && profileInfo) {
			const clonedProfile = profileInfo;
			clonedProfile.data.toWatch.Watchs = fliksToWatch;
			console.log('clonedProfile', clonedProfile);
			setProfileInfo(clonedProfile);
		}
	};

	console.log('profileInfo', profileInfo);

	const onClick = (e) => {
		e.preventDefault();
		if (token) {
			addFlikToList({
				handleFail: (err) => console.log('err', err),
				onSuccess,
				token,
				values: { id, listType: 'watchList', mediaType: 'movie' },
			});
		}
		// send api req
	};

	return (
		<StrippedButton id={formattedId} onClick={onClick}>
			<View color={colors.tertiary100} fill="transparent" />
		</StrippedButton>
	);
};
