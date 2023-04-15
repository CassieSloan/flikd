import Router from 'next/router';
import { FC, useContext } from 'react';
import { Profile } from '../../context/context';
import { Flex } from '../../design/components/layout/Flex';
import { Button } from './buttons/base/Button';
import { ButtonLink } from './buttons/base/ButtonLink';
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
