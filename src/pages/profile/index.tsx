import { Spinner } from 'grommet';
import jwt_decode from 'jwt-decode';
import { FC, ReactNode, useContext, useEffect, useState } from 'react';
import { getProfile } from '../../apiHelpers/auth/getProfile';
import { Navigation } from '../../components/common/Navigation';
import { PageLayout } from '../../components/common/PageLayout';
import { Panel } from '../../components/common/Panel';
import { Section } from '../../components/common/Section';
import { TabsWithIcons } from '../../components/grommety-things/TabsNav';
import { Profile as ProfileContext } from '../../context/context';
import { GetProfileResponse } from '../../types/auth/users';
import { setSessionItem } from '../../utils/base';
import { formatProfileData, FormattedProfileData } from '../../utils/profileHelpers';

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
			// const decoded = jwt_decode(authToken);
			// console.log('decoded', decoded);
			// setProfileInfo(decoded as GetProfileResponse);
			// setSessionItem('profileInfo', JSON.stringify(decoded));
		}
	});

	useEffect(() => {
		if (profileInfo) setUserInfo(formatProfileData(profileInfo));
	}, [profileInfo]);

	const profileUI = userInfo ? <TabsWithIcons {...userInfo} /> : <Spinner />;

	return (
		<PageLayout>
			<Navigation />
			<Section>
				<Panel padding="16px" background="animatedGradientBackground">
					{profileUI}
				</Panel>
			</Section>
		</PageLayout>
	);
};
export default Profile;
