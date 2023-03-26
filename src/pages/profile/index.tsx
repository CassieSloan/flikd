import { FC, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, ButtonLink } from '../../components/common/Buttons';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';
import { Navigation } from '../../components/common/Navigation';
import { PageLayout } from '../../components/common/PageLayout';
import { Panel } from '../../components/common/Panel';
import { Section } from '../../components/common/Section';
import { Profile as ProfileContext } from '../../context/context';
import { Body, Heading4, Span } from '../../design/typography/typography';
import { flex } from '../../design/utils';
import { GetProfileResponse } from '../../types/auth/users';
import { EmptyObj } from '../../types/global';
import { requestMate, retrieveProfile } from '../../utils/apiHelpers';

type ProfileProps = {
	profileId: string;
};

const SidePanel = styled(Panel)`
	${flex({ direction: 'column', gap: 8 })}
	max-width: 400px;
`;
const NavButton = styled(ButtonLink)`
	width: 100%;
`;
/**
 * Render Profile component.
 */
const Profile: FC<ProfileProps> = () => {
	// const [profileAuth, setProfileAuth] = useState<string>('');
	const [profileInfo, setProfileInfo] = useState<GetProfileResponse | EmptyObj>(
		{}
	);
	const [mates, setMates] = useState<string[]>();
	const [loading, setLoading] = useState(false);
	const { authToken } = useContext(ProfileContext);
	console.log('authToken in profile', authToken);
	console.log('authToken in profile json', JSON.stringify(authToken));

	useEffect(() => {
		console.log('hit on mount for profile');
		setLoading(true);
		if (authToken) {
			console.log('here it is:', authToken);
			retrieveProfile(authToken).then(
				(profileInfo) => profileInfo && setProfileInfo(profileInfo)
			);
			console.log('found the data!');
			setLoading(false);
		}
		console.log('couldnt find it');

		setLoading(false);
	}, []);
	// useEffect(() => {

	// 	// const authParams = formatAuthParams(parseQueryParams());
	// 	// const isLoggedIn = sessionStorage.getItem('user');
	// 	// if (authParams && !isLoggedIn) {
	// 	// 	console.log('auth on params');
	// 	// 	setProfileAuth(authParams);
	// 	// 	sessionStorage.setItem('user', authParams);
	// 	// }

	// 	// if (!authParams && !isLoggedIn) {
	// 	// 	console.log('not authed');
	// 	// 	redirect('/');
	// 	// }
	// 	// console.log('using session auth');
	// 	// if (isLoggedIn) setProfileAuth(isLoggedIn);

	// 	refreshAndStripParams();
	// }, []);

	const onClick = (username: string, token: string) => {
		requestMate({ token, username }).then((mates) => setMates(mates));
	};

	return (
		<PageLayout>
			<Section>
				<Navigation />
				<h1>This is a profile page</h1>
				{loading && <LoadingSpinner />}

				<SidePanel padding="16px" background="glassBackground">
					<NavButton to="/profile">Profile</NavButton>
					<NavButton to="/profile?mates">Mates</NavButton>
					<NavButton to="/profile?invite">Invite</NavButton>
				</SidePanel>

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
			</Section>
		</PageLayout>
	);
};
export default Profile;
