export type Mate = {
	createDate: string;
	id: string;
	username: string;
	profilePhoto: string | null;
	pronouns: string | null;
};

export type Mates = Mate[];

export type MatesResponse = {
	id: string;
	Mates: Mates;
};
