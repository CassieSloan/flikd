export type MediaType = 'movie' | 'tv';

export type Flik = {
	flikId: number;
	id: string;
	imageUrl: string;
	mediaType: MediaType;
	title: string;
	userListId: string | number | null;
};

export type Fliks = Flik[];
