import jwt_decode from 'jwt-decode';
import { DecodedAuthToken } from '@/types/auth/users';

/**
 * Decode user JWT token.
 */
export const decodedAuthToken = (token: string) => {
	const { profile }: DecodedAuthToken = jwt_decode(token);
	return profile;
};
