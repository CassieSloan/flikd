// eslint-disable-next-line import/no-named-as-default

export type GetMateProps = {
	token: string;
};
// /**
//  * Login Function.
//  */
// export const getMates = async ({ token }: GetMateProps) => {
// 	const config = generateConfig({ authToken: token, method: 'GET' });
// 	await axios(urls.getMates, config).then((response) => {
// 			console.log('response', response);
// 			const {
// 				data: { username },
// 				status,
// 			} = response;
// 			if (status === 200) {
// 				accessToken ? return  : handleFail(response);
// 			}
// 		})
// 		.catch((err) => {
// 			handleFail(err);
// 		});

// 	console.log('response', response);
// 	const json = await response.json();
// 	console.log('json', json);
// 	if (response.ok) {
// 		console.log('json', json);
// 		return json;
// 	}
// };
