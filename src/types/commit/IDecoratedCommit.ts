import { IUserData } from '../IUserData';
import { ICommit } from './ICommit';

export interface IDecoratedCommit {
	sha: string;
	node_id: string;
	commit: ICommit;
	html_url: string;
	author: IUserData;
	committer: IUserData;
}
