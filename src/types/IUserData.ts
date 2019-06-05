export interface IUserData {
	id: number | undefined;
	username: string | undefined;
	login: string | undefined;
	email: string | undefined;
	imageUrl: string | undefined;
	type: UserType | undefined;
	name: string | undefined;
}

export enum UserType {
	Org = 'Org',
	User = 'User',
}