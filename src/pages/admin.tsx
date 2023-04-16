import { Spinner } from 'grommet';
import { Group, User } from 'grommet-icons';
import { userInfo } from 'os';
import { FC, useContext } from 'react';
import styled from 'styled-components';
import { Navigation } from '@/components/common/Navigation';
import { PageLayout } from '@/components/common/PageLayout';
import { Panel } from '@/components/common/Panel';
import { Section } from '@/components/common/Section';
import { TabbedScreens } from '@/components/grommety-things/TabbedScreens';
import { MatesDetails } from '@/components/profile/mates/MatesDetails';
import { UserDetails } from '@/components/profile/user/UserDetails';
import { Profile as ProfileContext } from '@/context/context';
import { primaryTint } from '@/design/colors/colors';
import { formatProfileData } from '../utils/profileHelpers';

const Container = styled(Panel)`
	background: ${primaryTint};
`;

const adminTabData = [
	{
		children: <UserDetails {...userInfo} />,
		icon: <User />,
		label: 'Profile',
	},
	{
		children: <MatesDetails />,
		icon: <Group />,
		label: 'Mates',
	},
];

/**
 * Render Profile component.
 */
const Profile: FC = () => {
	const { profileInfo } = useContext(ProfileContext);
	const userInfo = profileInfo && formatProfileData(profileInfo);
	const ProfileUi = () => (userInfo ? <TabbedScreens tabs={adminTabData} /> : <Spinner />);

	return (
		<PageLayout>
			<Navigation />
			<Section>
				<Container padding="16px" background="animatedGradientBackground">
					<ProfileUi />
				</Container>
			</Section>
		</PageLayout>
	);
};
export default Profile;
