import {IEdgeNetworkChart} from './IEdgeNetworkChart';
import {INodeNetworkChart} from './INodeNetworkChart';
import {ITooltipNode} from './ITooltipNode';

export interface INetWorkChart {
	nodes: INodeNetworkChart[],
	edges: IEdgeNetworkChart[],
	height: number,
	toolTips: ITooltipNode[],
}