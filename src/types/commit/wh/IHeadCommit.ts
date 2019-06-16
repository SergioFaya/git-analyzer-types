export interface IHeadCommit {
	id: string;
	message: string;
	url: string;
	added: string[];
	removed: string[];
	modified: string[];
}