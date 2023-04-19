import { Spinner } from 'grommet';
import { Favorite, Inspect, Time, View as Eye } from 'grommet-icons';
import { FC, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Navigation } from '@/components/common/Navigation';
import { PageLayout } from '@/components/common/PageLayout';
import { Panel } from '@/components/common/Panel';
import { Section } from '@/components/common/Section';
import { TabbedScreens } from '@/components/grommety-things/TabbedScreens';
import { WatchList } from '@/components/profile/watchList/WatchList';
import { Profile as ProfileContext } from '@/context/context';
import { primaryTint } from '@/design/colors/colors';
import { Heading2 } from '@/design/typography/typography';
import { GetProfileResponse } from '@/types/auth/users';
import { getProfile } from 'apiHelpers/auth/getProfile';
import { setSessionItem } from 'utils/base';

const Container = styled(Panel)`
	background: ${primaryTint};
`;

const profileTabData = [
	{
		children: <WatchList />,
		icon: <Eye />,
		label: 'Watch',
	},
	{
		children: <Heading2>No Seen its yet</Heading2>,
		icon: <Inspect />,
		label: 'Seen',
	},
	{
		children: <Heading2>No Favourites yet</Heading2>,
		icon: <Favorite />,
		label: 'Favourites',
	},
	{
		children: <Heading2>Timeline UI</Heading2>,
		icon: <Time />,
		label: 'Timeline',
	},
];

/**
 * Render Profile component.
 */
const Profile: FC = () => {
	const { authToken, profileInfo, setProfileInfo } = useContext(ProfileContext);
	// const userInfo = profileInfo && formatProfileData(profileInfo);
	const onSuccess = ({ data: profileInfo }: GetProfileResponse) => {
		setSessionItem('profileInfo', JSON.stringify(profileInfo));
		setProfileInfo(profileInfo);
	};

	useEffect(() => {
		if (!profileInfo && authToken) {
			console.log('finds use effect');
			getProfile({ handleFail: (err) => console.log('err', err), onSuccess, token: authToken });
		}
	}, []);

	const ProfileUi = () => (profileInfo ? <TabbedScreens tabs={profileTabData} /> : <Spinner />);

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
