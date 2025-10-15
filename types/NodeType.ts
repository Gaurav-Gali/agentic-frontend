import {EditorNodeTypes} from "@/types/EditorNodeTypes";

export type NodeData = {
    [handleId: string]: object;
}

export type NodeType = {
    id: string,
    nodeName: string,
    position : {x:number, y:number},
    data: NodeData | null,
    executionEndpoint: string | null,
    type: keyof typeof EditorNodeTypes,
}