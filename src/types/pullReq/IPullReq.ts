import { IBranch } from '../IBranch';
import { IUserData } from '../IUserData';

export interface IPullReq {
	id: number;
	node_id: string;
	html_url: string;
	state: string;
	title: string;
	user: IUserData;
	body: string;
	head: IBranch;
	base: IBranch;
}

