import { IRepo } from '../IRepo';
import { WebHookEvent } from '../wh/WebHookEvent';
import { IPullReq } from './IPullReq';

export interface IPullReqWebHook extends WebHookEvent {
	pull_req?: IPullReq;
	repository?: IRepo;
}