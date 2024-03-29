export interface IEdgeNetworkChart {
	id: string
	label: string,
	source: string,
	target: string,
	size: number,
	// with hex format '#fffff'
	color: string,
	type: EdgeType
}

export enum EdgeType {
	ARROW = 'arrow', LINE = 'line'
}