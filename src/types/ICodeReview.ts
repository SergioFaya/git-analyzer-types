import { IUserData } from './IUserData';

export interface ICodeReview {
	title?: string,
	created_at?: Date,
	created_by?: IUserData,
	commentary?: string,
	//	userEvaluations?: Array<IUserEvaluation>
	calification?: number,
}

/*
export interface IUserEvaluation {
	user: UserData,
	calification: number,
}
*/