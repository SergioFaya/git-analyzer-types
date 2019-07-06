export interface IRepo {
	id?: number;
	node_id?: string;
	name?: string;
	full_name?: string;
	private?: boolean;
	owner?: Owner;
	html_url?: string;
	description?: string;
	constributors?: Array<Owner>;
	url?: string;
	updated_at?: string;
	open_issues?: number;
}

export interface Owner {
	login: string;
	id: number;
	type?: OwnerType;
}

export enum OwnerType {
	ORG = 'Organization', USER = 'User'
}