import { Spinner } from 'grommet';
import { Favorite, Inspect, Time, View as Eye } from 'grommet-icons';
import { FC, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Navigation } from '@/components/common/Navigation';
import { PageLayout } from '@/components/common/PageLayout';
import { Panel } from '@/components/common/Panel';
import { Section } from '@/components/common/Section';
import { TabbedScreens } from '@/components/grommety-things/TabbedScreens';
import { FlikdList } from '@/components/profile/fliks/FlikdList';
import { ProfileInfo } from '@/components/profile/user/public/ProfileInfo';
import { Profile as ProfileContext } from '@/context/context';
import { primaryTint } from '@/design/colors/colors';
import { Heading2 } from '@/design/typography/typography';
import { GetProfileResponse } from '@/types/auth/users';
import { getProfile } from 'apiHelpers/auth/getProfile';
import { setSessionItem } from 'utils/sessionActions';

const Container = styled(Panel)`
	background: ${primaryTint};
`;

const profileTabData = [
	{
		children: <FlikdList listType="watchList" />,
		icon: <Eye />,
		label: 'Watch',
	},
	{
		children: <FlikdList listType="seenIts" />,
		icon: <Inspect />,
		label: 'Seen',
	},
	{
		children: <FlikdList listType="favourites" />,
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
	const onSuccess = ({ data: profileInfo }: GetProfileResponse) => {
		setSessionItem('profileInfo', JSON.stringify(profileInfo));
		setProfileInfo(profileInfo);
	};

	useEffect(() => {
		if (!profileInfo && authToken) {
			getProfile({ handleFail: (err) => console.log('err', err), onSuccess, token: authToken });
		}
	}, []);

	const ProfileUi = () => (profileInfo ? <TabbedScreens tabs={profileTabData} /> : <Spinner />);

	return (
		<PageLayout>
			<Navigation />
			<Section>
				<Container padding="16px" background="animatedGradientBackground">
					<ProfileInfo />
					<ProfileUi />
				</Container>
			</Section>
		</PageLayout>
	);
};
export default Profile;
