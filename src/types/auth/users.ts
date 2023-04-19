/* eslint-disable @typescript-eslint/no-explicit-any */

import { Avatar } from '@/components/grommety-things/Avatar';
import { FavouritesResponse } from '../lists/favourites';
import { SeenItsCollection } from '../lists/seenIts';
import { WatchesResponse } from '../lists/watches';
import { MatesResponse } from '../mates/mates';

export type ProfileInfo = {
	id: string;
	userSince: string;
	username: string;
	mates: MatesResponse;
	favourites: FavouritesResponse;
	seenIts: SeenItsCollection;
	toWatch: WatchesResponse;
	profilePhoto: Avatar | null;
	pronouns: string;
};

export type GetProfileResponse = {
	data: ProfileInfo;
};

export type DecodedAuthToken = {
	iat: number;
	id: string;
	profile: ProfileReference;
	profileId: string;
	username: string;
};

// type UserPronouns = 'She/Her' | 'He/Him' | 'They/Them';

interface ListReference {
	id: string;
	count: number;
}

export type ProfileReference = {
	favourites: ListReference;
	id: string;
	mates: ListReference;
	profilePhoto: Avatar | null;
	pronouns: string | null;
	seenIt: ListReference;
	toWatch: ListReference;
	username: string;
	verified: false;
};

export type UserInfo = {
	userSince: string;
	username: string;
	id: string;
	pronouns: string | null;
	profilePhoto: string | null;
};
