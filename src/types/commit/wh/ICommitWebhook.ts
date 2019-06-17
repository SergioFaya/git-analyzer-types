import { IUserData } from '../../IUserData';
import { IHeadCommit } from './IHeadCommit';
import { IPusher } from './IPusher';
import { IRepo } from '../../IRepo';

export interface ICommitWebhook {
	/**
	 * The branch name where the head_commit is performed
	 */
	ref?: string;
	head_commit?: IHeadCommit;
	repository?: IRepo;
	pusher?: IPusher;
	timestamp?: number;
}

