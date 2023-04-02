import { FC, useContext, useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { getProfile } from '../../apiHelpers/auth/getProfile';
import { Navigation } from '../../components/common/Navigation';
import { PageLayout } from '../../components/common/PageLayout';
import { Panel } from '../../components/common/Panel';
import { Section } from '../../components/common/Section';
import { TabsWithIcons } from '../../components/library/TabsNav';
import { Profile as ProfileContext } from '../../context/context';
import { animatedGradientBackground } from '../../design/backgrounds/backgrounds';
import { GetProfileResponse } from '../../types/auth/users';
import { setSessionItem } from '../../utils/base';
import { formatProfileData, FormattedProfileData } from '../../utils/profileHelpers';

const BackgroundStyle = createGlobalStyle`
	body {
		${animatedGradientBackground()};
	}
`;
/**
 * Render Profile component.
 */
const Profile: FC = () => {
	const [userInfo, setUserInfo] = useState<FormattedProfileData>();
	const { authToken, profileInfo, setProfileInfo } = useContext(ProfileContext);
	console.log('profileInfo in profile', profileInfo);
	const handleFail = (something: GetProfileResponse) => console.log(something);
	console.log('userInfo', userInfo);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const onSuccess = (profileInfo: GetProfileResponse | undefined) => {
		if (profileInfo) {
			setProfileInfo(profileInfo);
			setSessionItem('profileInfo', JSON.stringify(profileInfo));
		}
	};

	useEffect(() => {
		if (!profileInfo?.data && authToken) {
			getProfile({ handleFail, onSuccess, token: authToken });
		}
	});

	useEffect(() => {
		if (profileInfo) setUserInfo(formatProfileData(profileInfo));
	}, [profileInfo]);

	return (
		<PageLayout>
			<BackgroundStyle />
			<Navigation />
			<Section>
				<Panel padding="16px" background="glassBackground">
					{userInfo && <TabsWithIcons {...userInfo} />}
				</Panel>
			</Section>
		</PageLayout>
	);
};
export default Profile;
