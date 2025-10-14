import {EditorNodeTypes} from "@/types/EditorNodeTypes";

export type NodeType = {
    id: string,
    nodeName: string,
    position : {x:number, y:number},
    data: object | null,
    executionEndpoint: string | null,
    type: keyof typeof EditorNodeTypes,
}