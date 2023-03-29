import { addMate, AddMateProps } from '../apiHelpers/mates/addMate';

/**
 * Request and return formatted mates.
 */
export const requestMate = async ({ token, username }: AddMateProps) => {
	const mateData = await addMate({ token, username });
	console.log('mateData', mateData);
	const mates = mateData?.Mates;
	console.log('mates', mates);
	return mates;
};

// /**
//  * Request and return formatted mates.
//  */
// export const retrieveMates = async ({ token }: GetMateProps) => {
// 	const mateData = await getMates({ token });
// 	return mateData.data.Mates;
// };
