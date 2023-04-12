/* eslint-disable react-hooks/exhaustive-deps */
import { View } from 'grommet-icons';
import { ButtonHTMLAttributes, FC, MouseEventHandler, PropsWithChildren, useContext } from 'react';
import styled, { css, IntrinsicElementsKeys } from 'styled-components';
import { addFlikToList } from '../../../apiHelpers/fliks/addFlikToList';
import { Profile } from '../../../context/context';
import * as colors from '../../../design/colors/colors';
import { StrippedButton } from '../../../design/components/StrippedButton';
import { labelMediumStyles } from '../../../design/typography/styles/labels';
import PlusTile from '../../../images/icons/plusTile.svg';
import Link, { LinkProps } from '../Link';
import { getButtonStyles, sharedButtonStyles } from './styles';

type StyledButtonProps = { theme?: Theme; shape?: ButtonType };
export type Theme = 'primary' | 'secondary' | 'tertiary';
export type ButtonType = 'filled' | 'outline' | 'text';

const StyledButton = styled(StrippedButton)<StyledButtonProps>`
	${sharedButtonStyles()};
	${({ theme }) => getButtonStyles(theme || 'tertiary')}
`;

const StyledLink = styled(Link)<StyledButtonProps>`
	${({ theme }) => getButtonStyles(theme || 'tertiary')};
`;

type ButtonProps = {
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
} & PropsWithChildren;
/**
 * Render Component component.
 */
export const Button: FC<StyledButtonProps & ButtonHTMLAttributes<ButtonProps>> = ({
	children,
	onClick,
	shape,
	theme,
	...buttonProps
}) => {
	console.log('shape', shape);
	console.log('theme', theme);
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
/**
 * Render Component component.
 */
export const ButtonLink: FC<LinkProps & StyledButtonProps> = ({
	children,
	theme,
	to,
}: LinkProps & StyledButtonProps) => {
	return (
		<StyledLink theme={theme} to={to}>
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
