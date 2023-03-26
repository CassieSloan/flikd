// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import axios from 'axios';
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { generateConfig } from '../../apiHelpers/sharedConfig';
// import { GetProfileResponse } from '../../types/auth/users';

// /**
//  * GetProfile Function.
//  */
// export const getProfile = async () => {
// 	// const token =
// 	if (!token) return {};

// 	const config = generateConfig({ method: 'GET' });
// 	await axios(urls.getProfile, config)
// 		.then((response) => {
// 			console.log('response', response);
// 			const { data, status } = response;
// 			if (status === 200) {
// 				const formattedResponse = data as GetProfileResponse;
// 				return formattedResponse;
// 			}
// 		})
// 		.catch((err) => {
// 			console.log('couldnt find profile information', err);
// 		});
// };
// /**
//  * Default api export.
//  */
// export default function handler(
// 	req: NextApiRequest,
// 	res: NextApiResponse<Data>
// ) {
// 	res.status(200).json({ name: 'John Doe' });
// }
