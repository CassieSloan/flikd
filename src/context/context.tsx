import {
	createContext,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	useState,
} from 'react';

type ProfileContext = {
	authToken: string;
	setAuthToken: Dispatch<SetStateAction<string>>;
} & PropsWithChildren;

export const Profile = createContext<ProfileContext>({
	authToken: '',
	setAuthToken: () => {},
});

/**
 * Context.
 */
const Context = ({ children }) => {
	const [authToken, setAuthToken] = useState<string>('');
	console.log('authToken in context', authToken);
	return (
		<Profile.Provider value={{ authToken, setAuthToken }}>
			{children}
		</Profile.Provider>
	);
};

export default Context;
