import {
	createContext,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	useEffect,
	useState,
} from 'react';
import { GetProfileResponse } from '../types/auth/users';
import { getSessionItem } from '../utils/base';

type ProfileContext = {
	authToken?: string;
	setAuthToken: Dispatch<SetStateAction<string | undefined>>;
	profileInfo?: GetProfileResponse;
	setProfileInfo: Dispatch<GetProfileResponse>;
} & PropsWithChildren;

export const Profile = createContext<ProfileContext>({
	setAuthToken: () => {},
	setProfileInfo: () => {},
});

/**
 * Context.
 */
const Context = ({ children }: PropsWithChildren) => {
	const [authToken, setAuthToken] = useState<string | undefined>();
	const [profileInfo, setProfileInfo] = useState<GetProfileResponse>();

	useEffect(() => {
		const sessionToken = getSessionItem('userAuth');
		const sessionProfileInfo = getSessionItem('profileInfo');

		if (!profileInfo && sessionProfileInfo) {
			console.log('no state, using session: profileinfo');
			setProfileInfo(JSON.parse(sessionProfileInfo));
		}
		if (!authToken && sessionToken) {
			console.log('no state, using session: authtoken');
			setAuthToken(sessionToken);
		}
	}, []);

	console.log('authToken in context', authToken);
	console.log('profileInfo', profileInfo);
	return (
		<Profile.Provider value={{ authToken, profileInfo, setAuthToken, setProfileInfo }}>
			{children}
		</Profile.Provider>
	);
};

export default Context;
