import { IUserData } from '../../IUserData';
import { IHeadCommit } from './IHeadCommit';
import { IPusher } from './IPusher';

export interface ICommitWebhook {
	ref: string;
	head_commit: IHeadCommit;
	repository: IUserData;
	pusher: IPusher;
}

