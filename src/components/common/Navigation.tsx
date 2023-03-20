import { FC } from 'react';
import styled from 'styled-components';
import { SettingsCog } from '../navigation/SettingsCog';
import Link from './Link';
import { Section } from './Section';

const headerNavLinks = [
	{ link: '/', text: 'Home' },
	{ link: '/my-movies', text: 'My Movies' },
	{ link: '/friends', text: 'Friends' },
	{ link: '/expore', text: 'Discover' },
];

const NavLink = styled(Link)`
	padding: 16px;
`;

/**
 * Render Navigation Navigation.
 */
export const Navigation: FC = () => {
	return (
		<Section padding={24}>
			{headerNavLinks.map((navItem) => {
				const { link, text } = navItem;
				return (
					<NavLink key={text} to={link}>
						{text}
					</NavLink>
				);
			})}
			<SettingsCog />
		</Section>
	);
};
