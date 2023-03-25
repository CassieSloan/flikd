// eslint-disable-next-line import/no-named-as-default

export type AddMateProps = {
	username: string;
	token: string;
};
/**
 * Login Function.
 */
export const addMate = async ({ token, username }: AddMateProps) => {
	const addMateUrl = `${process.env.NEXT_PUBLIC_ADD_MATE_URL}`;
	console.log('username', username);

	const config = {
		body: JSON.stringify({ username }),
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
			'x-api-key': `${process.env.NEXT_PUBLIC_RENDER_API_KEY}`,
			'X-Requested-With': 'XMLHttpRequest',
		},
		method: 'POST',
	};

	const response = await fetch(addMateUrl, config);
	console.log('response', response);
	const json = await response.json();
	console.log('json', json);
	if (response.ok) {
		console.log('json', json);
		return json;
	}
};
