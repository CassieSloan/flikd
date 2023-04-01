/* eslint-disable @typescript-eslint/no-explicit-any */

import { FavouritesResponse } from '../lists/favourites';
import { SeenItsCollection } from '../lists/seenIts';
import { WatchesResponse } from '../lists/watches';
import { MatesResponse } from '../mates/mates';

export type GetProfileResponse = {
	data: {
		id: string;
		userSince: string;
		username: string;
		mates: MatesResponse;
		favourites: FavouritesResponse;
		seenIts: SeenItsCollection;
		toWatch: WatchesResponse;
		profilePhoto: string;
		pronouns: string;
	};
};

export type UserInfo = {
	userSince: string;
	username: string;
	id: string;
	pronouns: string | null;
	profilePhoto: string | null;
};
