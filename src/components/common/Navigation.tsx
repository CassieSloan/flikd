import Router from 'next/router';
import { FC, useContext, useState } from 'react';
import styled, { css } from 'styled-components';
import { secondary700 } from '@/design/colors/colors';
import { grey900 } from '@/design/colors/shades';
import { lightBoxShadow } from '@/design/colors/shadows';
import { UnstyledButton } from '@/design/components/buttons/base';
import { toggleShow } from '@/design/micro-interactions';
import { labelAltM } from '@/design/typography/styles/labels';
import { navIndex } from '@/design/zIndexes';
import PowerIcon from '@/images/icons/power-symbol.svg';
import SettingsIcon from '@/images/icons/settings-cog.svg';
import { Profile } from '../../context/context';
import { Flex } from '../../design/components/layout/Flex';
import { Avatar } from '../grommety-things/Avatar';
import { ButtonLink } from './buttons/base/ButtonLink';
import Link from './Link';
import { Section } from './Section';

const closedStyles = css`
	${toggleShow(false)}
	bottom: -10px;
	right: 0;
`;

const DropDown = styled.nav`
	${closedStyles}
	position: absolute;
	right: 0;
	background: ${grey900};
	padding: 16px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	${lightBoxShadow()}
`;
const openStyles = css`
	${toggleShow(true)}
	bottom: -50px;
`;

const DropDownContainer = styled.div`
	padding-bottom: 2.5em;
	margin-bottom: -2.5em;
	position: relative;
	z-index: ${navIndex};
	&:hover {
		${DropDown} {
			${openStyles}
		}
	}
`;

const dropdownLinkStyles = () => css`
	${labelAltM};
	display: flex;
	align-items: center;
	gap: 8px;
	text-decoration: none;
	color: ${secondary700};
	transition: font-weight 0.3s ease;
	&:hover {
		font-weight: 700;
	}
`;

const DropDownLink = styled(Link)`
	${dropdownLinkStyles()}
`;
const DropDownButton = styled(UnstyledButton)`
	${dropdownLinkStyles()}
`;

const headerNavLinks = [
	{ link: '/profile', text: 'Profile' },
	{ link: '/explore', text: 'Discover' },
];
/**
 * Render Navigation Navigation.
 */
export const Navigation: FC = () => {
	const { profileInfo, setAuthToken, setProfileInfo } = useContext(Profile);
	const [open, setOpen] = useState<boolean>(false);

	const logout = () => {
		setAuthToken(undefined);
		setProfileInfo(undefined);
		Router.push('/');
	};

	return (
		<Section padding={24}>
			<Flex justify="space-between" align="center">
				<Flex gap={8}>
					{headerNavLinks.map((navItem) => {
						const { link, text } = navItem;
						return (
							<ButtonLink key={text} to={link} shape="outlined">
								{text}
							</ButtonLink>
						);
					})}
				</Flex>
				<DropDownContainer>
					<UnstyledButton onClick={() => setOpen(!open)}>
						<Avatar avatar={profileInfo?.data.profilePhoto as Avatar} />
					</UnstyledButton>
					<DropDown>
						<DropDownLink to="/admin">
							<SettingsIcon />
							Settings
						</DropDownLink>
						<DropDownButton onClick={logout}>
							<PowerIcon />
							Logout
						</DropDownButton>
					</DropDown>
				</DropDownContainer>
			</Flex>
		</Section>
	);
};
