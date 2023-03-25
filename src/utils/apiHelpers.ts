import { getProfile } from '../apiHelpers/auth/getProfile';
import { addMate, AddMateProps } from '../apiHelpers/mates/addMate';
import { GetMateProps, getMates } from '../apiHelpers/mates/getMates';

/**
 * Retrieve profile data.
 */
export const retrieveProfile = async (profileAuth: string) =>
	await getProfile(profileAuth);

/**
 * Request and return formatted mates.
 */
export const requestMate = async ({ token, username }: AddMateProps) => {
	const mateData = await addMate({ token, username });
	const mates = mateData?.Mates || [];
	return mates.map(({ username }) => username);
};

/**
 * Request and return formatted mates.
 */
export const retrieveMates = async ({ token }: GetMateProps) => {
	const mateData = await getMates({ token });
	return mateData.data.Mates;
};
