import router from 'next/router';
import queryString from 'query-string';
import { FC, useCallback, useEffect, useState } from 'react';
import { getProfile } from '../apiHelpers/auth/getProfile';
import { addMate, AddMateProps } from '../apiHelpers/mates/addMate';
import { GetMateProps, getMates } from '../apiHelpers/mates/getMates';
import { Button } from '../components/common/Button';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { Navigation } from '../components/common/Navigation';
import { PageLayout } from '../components/common/PageLayout';
import { Section } from '../components/common/Section';
import { Body, Heading4, Span } from '../design/typography/typography';
import { GetProfileResponse } from '../types/auth/users';
import { MatesResponse } from '../types/mates/mates';

type ProfileProps = {
	profileId: string;
};
/**
 * Render Profile component.
 */
const Profile: FC<ProfileProps> = () => {
	const [profileAuth, setProfileAuth] = useState<string | (string | null)[]>(
		''
	);
	const [profileInfo, setProfileInfo] = useState<GetProfileResponse | null>(
		null
	);
	const [mates, setMates] = useState<MatesResponse | undefined>();

	console.log('mates', mates);
	console.log('profileInfo', profileInfo?.data);
	const [loading, setLoading] = useState(false);
	console.log('loading', loading);

	useEffect(() => {
		const parsed = queryString.parse(location.search);
		console.log('parsed', parsed);
		const { auth } = parsed;
		console.log('auth', auth);
		if (auth) {
			setProfileAuth(auth);
		}
		router.replace('/profile', undefined, { shallow: true });
	}, []);

	const retrieveProfile = useCallback(
		async (profileAuth: string | (string | null)[]) => {
			const info = await getProfile(profileAuth);
			setProfileInfo(info);
		},
		[]
	);

	const requestMate = useCallback(async ({ token, username }: AddMateProps) => {
		const mateData = await addMate({ token, username });
		const mates = mateData.data.Mates;
		setMates(mates);
	}, []);

	const retrieveMates = useCallback(async ({ token }: GetMateProps) => {
		const mateData = await getMates({ token });
		const mates = mateData.data.Mates;
		setMates(mates);
	}, []);

	useEffect(() => {
		setLoading(true);
		if (profileAuth) {
			retrieveProfile(profileAuth);
			setLoading(false);
		}
	}, [profileAuth, retrieveProfile]);

	const addMateOnClick = (username: string) => {
		const token = profileAuth as string;
		requestMate({ token, username });
	};

	return (
		<PageLayout>
			<Section>
				<Navigation />
				<h1>This is a profile page</h1>
				{loading && <LoadingSpinner />}
				{profileInfo && (
					<>
						<Heading4>Info</Heading4>

						<Body>user since: {profileInfo?.data?.userSince}</Body>
						<Body>username: {profileInfo?.data?.username}</Body>
						<Body>id: {profileInfo?.data?.id}</Body>
						<Body>
							mates:{' '}
							{profileInfo.data.mates.Mates?.map((mate) => mate.username)}
						</Body>
						<Body>
							favourites:{' '}
							{profileInfo.data.favourites.favourites?.map(
								(mate) => mate.username
							)}
						</Body>

						<div>
							<Heading4>Add mate</Heading4>
							<Button onClick={() => addMateOnClick('bilbo2')}></Button>
							<Span>add logic here</Span>
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
