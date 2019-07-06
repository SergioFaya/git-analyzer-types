import { IUserData } from '../../IUserData';
import { IHeadCommit } from './IHeadCommit';
import { IPusher } from './IPusher';
import { IRepo } from '../../IRepo';
import { WebHookEvent } from '../../wh/WebHookEvent';

export interface ICommitWebhook extends WebHookEvent {
	/**
	 * The branch name where the head_commit is performed
	 */
	ref?: string;
	head_commit?: IHeadCommit;
	repository?: IRepo;
	pusher?: IPusher;
	timestamp?: number;
}

