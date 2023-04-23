import {
	createContext,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	useEffect,
	useState,
} from 'react';
import { decodedAuthToken } from 'utils/decodeAuthToken';
import { ProfileInfo, ProfileReference } from '../types/auth/users';
import { parseSessionProfileData } from '../utils/profileHelpers';
import { getSessionItem } from '../utils/sessionActions';

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

		if (!profileInfo && sessionProfileInfo) {
			console.log('no context on mount, using session: profileinfo');
			setProfileInfo(JSON.parse(sessionProfileInfo));
		}

		if (!authToken && sessionToken) {
			console.log('no context on mount, setting token from session');
			setAuthToken(sessionToken);
			console.log('no profile ref - settings from auth');
			setProfileRef(decodedAuthToken(sessionToken));
		}

		if (sessionToken && sessionProfileInfo) {
			console.log('setting context from session');
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
