export type Mate = {
	createDate: string;
	id: string;
	mateListId: string;
	username: string;
};

export type Mates = Mate[];

export type MatesResponse = {
	id: string;
	Mates: Mates;
};
