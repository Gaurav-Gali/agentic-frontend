import {EditorNodeTypes} from "@/types/EditorNodeTypes";

export type datasType = Record<string, string> | null;

export type NodeType = {
    id: string,
    position : {x:number, y:number},
    data: datasType,
    type: keyof typeof EditorNodeTypes,
}