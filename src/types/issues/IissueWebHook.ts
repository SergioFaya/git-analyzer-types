import { IRepo } from '../IRepo';
import { WebHookEvent } from '../wh/WebHookEvent';
import { Iissue } from './Iissue';

export interface IissueWebHook extends WebHookEvent {
	issue?: Iissue;
	repo?: IRepo;
}