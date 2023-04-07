/* eslint-disable react-hooks/exhaustive-deps */
import { View } from 'grommet-icons';
import { FC, MouseEventHandler, PropsWithChildren, useContext } from 'react';
import styled, { css } from 'styled-components';
import { addFlikToList } from '../../apiHelpers/fliks/addFlikToList';
import { Profile } from '../../context/context';
import * as colors from '../../design/colors/colors';
import { StrippedButton } from '../../design/components/StrippedButton';
import PlusTile from '../../images/icons/plusTile.svg';
import Link, { LinkProps } from './Link';

type Color = keyof typeof colors;
type StyledButtonProps = { background?: Color };

const buttonStyles = (background?: Color) => css`
	padding: 8px 12px;
	background: ${background ? colors[background] : colors.tertiary300};
	color: white;
	text-decoration: none;
	border-radius: 12px;
	text-align: center;
`;

const StyledButton = styled(StrippedButton)<StyledButtonProps>`
	${({ background }) => buttonStyles(background || 'tertiary300')}
`;

const StyledLink = styled(Link)<StyledButtonProps>`
	${({ background }) => buttonStyles(background || 'tertiary300')};
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
