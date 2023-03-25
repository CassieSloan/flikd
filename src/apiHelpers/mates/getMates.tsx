// eslint-disable-next-line import/no-named-as-default

export type GetMateProps = {
	token: string;
};
/**
 * Login Function.
 */
export const getMates = async ({ token }: GetMateProps) => {
	const getMateUrl = `${process.env.NEXT_PUBLIC_GET_MATE_URL}`;

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
			'x-api-key': `${process.env.NEXT_PUBLIC_RENDER_API_KEY}`,
			'X-Requested-With': 'XMLHttpRequest',
		},
		method: 'GET',
	};

	const response = await fetch(getMateUrl, config);
	console.log('response', response);
	const json = await response.json();
	console.log('json', json);
	if (response.ok) {
		console.log('json', json);
		return json;
	}
};
