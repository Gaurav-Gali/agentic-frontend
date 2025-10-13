import {EditorNodeTypes} from "@/types/EditorNodeTypes";

export type datasType = Record<string, string> | null;

export type NodeType = {
    id: string,
    nodeName: string,
    position : {x:number, y:number},
    data: datasType,
    executionEndpoint: string | null,
    type: keyof typeof EditorNodeTypes,
}