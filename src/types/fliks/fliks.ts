export type MediaType = 'movie' | 'tv';

export type Flik = {
	flikId: number;
	id: string;
	imageUrl: string;
	mediaType: MediaType;
	title: string;
	userListId: string | number | null;
};

export type FlikList = 'watchList' | 'favourites' | 'seenIt';

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

export type UpcomingFliksResponse = {
	dates: string;
	page: number;
	totalPages: number;
	totalResults: number;
	upcomingFliks: UpcomingFliks;
};

export type Fliks = Flik[];
export type UpcomingFliks = UpcomingFlik[];
