import { IUserData } from '../IUserData';

export interface Iissue {
	html_url: string;
	id: number;
	node_id: string;
	number: number;
	title: string;
	user: IUserData;
	labels: any[];
	state: string;
	created_at: string;
	updated_at: string;
	body: string;
}
