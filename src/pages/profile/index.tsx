import { FC, SetStateAction, useContext, useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { getProfile } from '../../apiHelpers/auth/getProfile';
import { Button } from '../../components/common/Buttons';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';
import { Navigation } from '../../components/common/Navigation';
import { PageLayout } from '../../components/common/PageLayout';
import { Panel } from '../../components/common/Panel';
import { Section } from '../../components/common/Section';
import { TabsWithIcons } from '../../components/library/TabsNav';
import { Profile as ProfileContext } from '../../context/context';
import {
	animatedGradientBackground,
	glassBackground,
} from '../../design/backgrounds/backgrounds';
import { Body, Heading4, Span } from '../../design/typography/typography';
import { GetProfileResponse } from '../../types/auth/users';
import { EmptyObj } from '../../types/global';
import { requestMate } from '../../utils/apiHelpers';

type ProfileProps = {
	profileId: string;
};

const BackgroundStyle = createGlobalStyle`
	body {
		${animatedGradientBackground()};
	}
`;

const Container = styled(Panel)`
	background: ${glassBackground()};
`;
/**
 * Render Profile component.
 */
const Profile: FC<ProfileProps> = () => {
	const [profileInfo, setProfileInfo] = useState<GetProfileResponse | EmptyObj>(
		{}
	);
	const [mates, setMates] = useState<string[]>();
	const [loading, setLoading] = useState(false);
	const { authToken } = useContext(ProfileContext);
	console.log('authToken in profile', authToken);
	console.log('authToken in profile json', JSON.stringify(authToken));
	console.log('profileInfo', profileInfo);
	const onSuccess = (
		profileInfo: SetStateAction<GetProfileResponse | EmptyObj>
	) => setProfileInfo(profileInfo);
	const handleFail = (something: any) => console.log(something);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		console.log('hit on mount for profile');
		if (authToken) {
			setLoading(true);
			console.log('here it is:', authToken);

			getProfile({ handleFail, onSuccess, token: authToken });

			console.log('found the data!');
			setLoading(false);
		}
		console.log('couldnt find it');
	});

	const onClick = (username: string, token: string) => {
		requestMate({ token, username }).then((mates) => setMates(mates));
	};

	return (
		<PageLayout>
			<BackgroundStyle />
			<Navigation />
			<Section>
				<Container>
					{loading && <LoadingSpinner />}

					<TabsWithIcons />

					{profileInfo?.data && (
						<>
							<Panel padding="16px" background="glassBackground">
								<Body>user since: {profileInfo?.data?.userSince}</Body>
								<Body>username: {profileInfo?.data?.username}</Body>
								<Body>id: {profileInfo?.data?.id}</Body>
								<Body>
									mates:
									{mates?.length ? mates?.map((mate) => mate) : 'no mates :('}
								</Body>
								<Body>
									favourites:
									{profileInfo.data.favourites.favourites
										? profileInfo.data.favourites.favourites?.map(
												(favourite) => favourite.title
										  )
										: 'no favourites :('}
								</Body>
							</Panel>
							<Heading4>Info</Heading4>

							<div>
								<Heading4>Add mate</Heading4>
								<Button onClick={() => onClick('bilbo2', authToken)}>
									Add Mate
								</Button>
							</div>

							<div>
								<Heading4>Add movies</Heading4>
								<Span>add logic here</Span>
							</div>
						</>
					)}
				</Container>
			</Section>
		</PageLayout>
	);
};
export default Profile;
