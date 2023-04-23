import queryString from 'query-string';
import { ProfileInfo } from '../types/auth/users';
import { getSessionItem } from './sessionActions';

type UpdateProfileProps = Omit<ProfileInfo, 'id' | 'userSince' | 'username'>;

export type UpdateProfileOptions = Partial<UpdateProfileProps>;

/**
 * Return profile object from session data.
 */
export const parseSessionProfileData = () => {
	const json = getSessionItem('profileInfo');
	return json ? (JSON.parse(json) as ProfileInfo) : undefined;
};
/**
 * Parse current location query params.
 */
export const parseQueryParams = () => {
	return queryString.parse(location.search);
};
