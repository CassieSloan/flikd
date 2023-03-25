import router from 'next/router';
import queryString from 'query-string';

/**
 * Format profile token from query params on /profile.
 */
export const formatAuthParams = (
	parsed: queryString.ParsedQuery<string>
): string => {
	const { auth } = parsed;
	return auth && auth?.length && auth[0] ? auth[0] : (auth as string);
};

/**
 * Refresh /profile page and strip query params.
 */
export const refreshAndStripParams = () =>
	router.replace('/profile', undefined, { shallow: true });

/**
 * Parse current location query params.
 */
export const parseQueryParams = () => {
	return queryString.parse(location.search);
};
