import { FC, useEffect, useState } from 'react';
import { Button } from '../../components/common/Button';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';
import { Navigation } from '../../components/common/Navigation';
import { PageLayout } from '../../components/common/PageLayout';
import { Section } from '../../components/common/Section';
import { Body, Heading4, Span } from '../../design/typography/typography';
import { GetProfileResponse } from '../../types/auth/users';
import { EmptyObj } from '../../types/global';
import { requestMate, retrieveProfile } from '../../utils/apiHelpers';
import {
	formatAuthParams,
	parseQueryParams,
	refreshAndStripParams,
} from './helpers';

type ProfileProps = {
	profileId: string;
};
/**
 * Render Profile component.
 */
const Profile: FC<ProfileProps> = () => {
	const [profileAuth, setProfileAuth] = useState<string>('');
	const [profileInfo, setProfileInfo] = useState<GetProfileResponse | EmptyObj>(
		{}
	);
	const [mates, setMates] = useState<string[]>();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const auth = formatAuthParams(parseQueryParams());
		if (auth) setProfileAuth(auth);
		refreshAndStripParams();
	}, []);

	useEffect(() => {
		setLoading(true);
		if (profileAuth) {
			retrieveProfile(profileAuth).then(
				(profileInfo) => profileInfo && setProfileInfo(profileInfo)
			);
			setLoading(false);
		}
	}, [profileAuth]);

	const onClick = (username: string) => {
		const token = profileAuth as string;
		requestMate({ token, username }).then((mates) => setMates(mates));
	};

	return (
		<PageLayout>
			<Section>
				<Navigation />
				<h1>This is a profile page</h1>
				{loading && <LoadingSpinner />}
				{profileInfo?.data && (
					<>
						<Heading4>Info</Heading4>

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

						<div>
							<Heading4>Add mate</Heading4>
							<Button onClick={() => onClick('bilbo2')}>Add Mate</Button>
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
