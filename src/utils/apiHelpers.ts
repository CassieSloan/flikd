import { addMate, AddMateProps } from '../apiHelpers/mates/addMate';

/**
 * Request and return formatted mates.
 */
export const requestMate = async ({ token, username }: AddMateProps) => {
	const mateData = await addMate({ token, username });
	return mateData?.Mates;
};
