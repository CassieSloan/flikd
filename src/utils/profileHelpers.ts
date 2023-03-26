import router from 'next/router';
import queryString from 'query-string';
import { GetProfileResponse } from '../types/auth/users';
import { Fliks } from '../types/fliks/fliks';
import { Mates } from '../types/mates/mates';

/**
 * Format profile token from query params on /profile.
 */
export const formatAuthParams = (parsed: queryString.ParsedQuery<string>): string => {
	const { auth } = parsed;
	return auth && auth?.length && auth[0] ? auth[0] : (auth as string);
};

/**
 * Refresh /profile page and strip query params.
 */
export const refreshAndStripParams = () => router.replace('/profile', undefined, { shallow: true });

/**
 * Parse current location query params.
 */
export const parseQueryParams = () => {
	return queryString.parse(location.search);
};

export type FormattedProfileData = {
	favourites: Fliks;
	mates: Mates;
	seenIts: Record<string, any>[];
	toWatch: Record<string, any>[];
	user: {
		profilePhoto: string;
		pronouns: string;
		uid: string;
		username: string;
		userSince: string;
	};
};
/**
 * Format raw Profile data.
 */
export const formatProfileData = (profileInfo: GetProfileResponse): FormattedProfileData => {
	const {
		favourites: { favourites },
		id: uid,
		mates: { Mates: mates },
		profilePhoto,
		pronouns,
		seenIts: { seenIts },
		toWatch: { Watchs: toWatch },
		username,
		userSince,
	} = profileInfo.data;
	const user = { profilePhoto, pronouns, uid, username, userSince };

	return {
		favourites,
		mates,
		seenIts,
		toWatch,
		user,
	};
};
