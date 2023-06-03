import { Spinner } from 'grommet';
import { Group, User } from 'grommet-icons';
import { FC, useContext } from 'react';
import { Navigation } from '@/components/common/Navigation';
import { PageLayout } from '@/components/common/PageLayout';
import { Panel } from '@/components/common/Panel';
import { Section } from '@/components/common/Section';
import { TabbedScreens } from '@/components/grommety-things/TabbedScreens';
import { MatesDetails } from '@/components/profile/mates/MatesDetails';
import { UserDetails } from '@/components/profile/user/admin/UserDetails';
import { Profile as ProfileContext } from '@/context/context';

/**
 * Render Profile component.
 */
const Profile: FC = () => {
	const { profileInfo } = useContext(ProfileContext);

	const adminTabData = [
		{
			children: <UserDetails username={profileInfo?.username} />,
			icon: <User />,
			label: 'Profile',
		},
		{
			children: <MatesDetails />,
			icon: <Group />,
			label: 'Mates',
		},
	];

	const ProfileUi = () => (profileInfo ? <TabbedScreens tabs={adminTabData} /> : <Spinner />);

	return (
		<PageLayout>
			<Navigation />
			<Section>
				<Panel padding="16px" background="glassBackground">
					<ProfileUi />
				</Panel>
			</Section>
		</PageLayout>
	);
};
export default Profile;
