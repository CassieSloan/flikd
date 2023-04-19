import jwt_decode from 'jwt-decode';
import {
	createContext,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	useEffect,
	useState,
} from 'react';
import { DecodedAuthToken, ProfileInfo, ProfileReference } from '../types/auth/users';
import { getSessionItem } from '../utils/base';
import { parseSessionProfileData } from '../utils/profileHelpers';

type ProfileContext = {
	authToken?: string;
	setAuthToken: Dispatch<SetStateAction<string | undefined>>;
	profileInfo?: ProfileInfo;
	setProfileInfo: Dispatch<ProfileInfo | undefined>;
	profileRef?: ProfileReference;
	setProfileRef: Dispatch<ProfileReference | undefined>;
} & PropsWithChildren;

export const Profile = createContext<ProfileContext>({
	setAuthToken: () => {},
	setProfileInfo: () => {},
	setProfileRef: () => {},
});

/**
 * Context.
 */
const Context = ({ children }: PropsWithChildren) => {
	const [authToken, setAuthToken] = useState<string | undefined>();
	const [profileRef, setProfileRef] = useState<ProfileReference | undefined>();
	const [profileInfo, setProfileInfo] = useState<ProfileInfo | undefined>();
	console.log('authToken in context', authToken);
	console.log('profileInfo in  context', profileInfo);

	useEffect(() => {
		const sessionToken = getSessionItem('userAuth');
		const sessionProfileInfo = getSessionItem('profileInfo');
		if (authToken && !profileInfo) {
			const { profile }: DecodedAuthToken = jwt_decode(authToken);
			setProfileRef(profile);
		}

		if (!profileInfo && sessionProfileInfo) {
			console.log('no state, using session: profileinfo');
			setProfileInfo(JSON.parse(sessionProfileInfo));
		}

		if (!authToken && sessionToken) {
			console.log('no state, using session: authtoken');
			setAuthToken(sessionToken);
		}

		if (sessionToken && sessionProfileInfo) {
			setAuthToken(sessionToken);
			setProfileInfo(parseSessionProfileData());
		}
	}, []);

	return (
		<Profile.Provider
			value={{ authToken, profileInfo, profileRef, setAuthToken, setProfileInfo, setProfileRef }}
		>
			{children}
		</Profile.Provider>
	);
};

export default Context;
