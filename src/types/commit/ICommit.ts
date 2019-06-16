import { ICommitAuthor } from './ICommitAuthor';

export interface ICommit {
	author: ICommitAuthor;
	committer: ICommitAuthor;
	message: string;
}

