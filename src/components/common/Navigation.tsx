import Router from 'next/router';
import { FC, useContext } from 'react';
import styled from 'styled-components';
import { Profile } from '../../context/context';
import { Flex } from '../../design/components/Flex';
import { Button } from './buttons/base';
import Link from './Link';
import { Section } from './Section';

const headerNavLinks = [
	{ link: '/profile', text: 'Profile' },
	{ link: '/explore', text: 'Discover' },
];

const NavLink = styled(Link)`
	padding: 16px;
`;
/**
 * Render Navigation Navigation.
 */
export const Navigation: FC = () => {
	const { setAuthToken, setProfileInfo } = useContext(Profile);
	const logout = () => {
		setAuthToken(undefined);
		setProfileInfo(undefined);
		Router.push('/');
	};
	return (
		<Section padding={24}>
			<Flex justify="space-between">
				<div>
					{headerNavLinks.map((navItem) => {
						const { link, text } = navItem;
						return (
							<NavLink key={text} to={link}>
								{text}
							</NavLink>
						);
					})}
				</div>
				<Button onClick={logout}>Logout</Button>
			</Flex>
			{/* <SettingsCog /> */}
		</Section>
	);
};
