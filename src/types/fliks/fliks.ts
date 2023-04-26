export type MediaType = 'movie' | 'tv';
export type SearchMediaType = MediaType | 'person';
export type FlikList = 'watchList' | 'favourites' | 'seenIts';

export type Flik = {
	flikId: number;
	id: string;
	imageUrl: string;
	mediaType: MediaType;
	title: string;
	userListId: string | number | null;
};
export type Fliks = Flik[];

export type UpcomingFlik = {
	genreIds: number[];
	genres: string[];
	id: number;
	language: string;
	mainImage: string;
	releaseDate: string;
	synopsis: string;
	mediaType: MediaType;
	title: string;
	trailer: string;
};

export type DiscoverItems = {
	trending: UpcomingFlik[];
	upcoming: UpcomingFlik[];
	nowPlaying: UpcomingFlik[];
};

export type UpcomingFliks = UpcomingFlik[];

export type UpcomingFliksResponse = {
	dates: string;
	page: number;
	totalPages: number;
	totalResults: number;
	upcomingFliks: UpcomingFliks;
};

export type SearchedFlik = {
	adult: boolean;
	genreIds: number[];
	id: number;
	mainImage: string;
	mediaType: SearchMediaType;
	releaseDate: string;
	synopsis: string;
	title: string;
};

export type SearchedFliks = SearchedFlik[];

export type SearchFliksResponse = {
	page: 1;
	totalPages: 60;
	totalResults: 1200;
	searchResults: SearchedFliks;
};
