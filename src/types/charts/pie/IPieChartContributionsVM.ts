import {IUserRepoStats} from './IUserRepoStats';


export interface IPieChartContributionsVM {
	avatar_url: string;
	contributions: number;
	login: string;
	modifications: IUserRepoStats;
	total: number;
};
