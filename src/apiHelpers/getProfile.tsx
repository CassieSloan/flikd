/**
 * GetProfile Function.
 */
export const getProfile = async (token: string | (string | null)[]) => {
	if (!token) return { status: 'fail' };

	const getProfileUrl = `${process.env.NEXT_PUBLIC_PROFILE_URL}`;

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
			'OriginX-Requested-With': 'XMLHttpRequest',
			'x-api-key': `${process.env.NEXT_PUBLIC_RENDER_API_KEY}`,
			'X-Requested-With': 'XMLHttpRequest',
		},
		method: 'GET',
	};

	try {
		const response = await fetch(getProfileUrl, config);
		const json = await response.json();
		if (response.ok) {
			return json;
		}
	} catch {
		return { status: 'fail' };
	}
};
