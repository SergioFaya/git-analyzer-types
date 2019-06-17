import { IRepo } from './IRepo';
import { IUserData } from './IUserData';

export interface ICodeReview {
	title?: string;
	created_at?: number;
	created_by?: IUserData;
	commentary?: string;
	repository?: IRepo;
	calification?: number;
}