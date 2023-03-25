import { GetProfileResponse } from '../../types/auth/users';

/**
 * GetProfile Function.
 */
export const getProfile = async (token: string) => {
	if (!token) return {};

	const getProfileUrl = `${process.env.NEXT_PUBLIC_PROFILE_URL}`;

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
			'x-api-key': `${process.env.NEXT_PUBLIC_RENDER_API_KEY}`,
			'X-Requested-With': 'XMLHttpRequest',
		},
		method: 'GET',
	};

	try {
		const response = await fetch(getProfileUrl, config);
		const json = await response.json();
		if (response.ok) {
			const formattedResponse = json as GetProfileResponse;
			return formattedResponse;
		}
		return {};
	} catch {
		return {};
	}
};
