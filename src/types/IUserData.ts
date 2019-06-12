export interface IUserData {
	id?: number;
	/**
	 * @deprecated
	 */
	username?: string;
	login?: string;
	email?: string;
	imageUrl?: string;
	type?: UserType;
	name?: string;
}

export enum UserType {
	Org = 'Org',
	User = 'User',
}