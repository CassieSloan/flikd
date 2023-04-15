import Router from 'next/router';
import { FC, useContext } from 'react';
import styled from 'styled-components';
import { Profile } from '../../context/context';
import { Flex } from '../../design/components/Flex';
import { Button, ButtonLink } from './buttons/base';
import Link from './Link';
import { Section } from './Section';

const headerNavLinks = [
	{ link: '/profile', text: 'Profile' },
	{ link: '/explore', text: 'Discover' },
];
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
				<Button onClick={logout}>Logout</Button>
			</Flex>
			{/* <SettingsCog /> */}
		</Section>
	);
};
