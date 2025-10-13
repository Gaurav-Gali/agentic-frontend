import {atom} from "jotai";
import {NodeType} from "@/types/NodeType";
import {EdgeType} from "@/types/EdgeType";

export const NodesAtom = atom<NodeType[]>(
    [
        {
            id:"1",
            position: {
                x:0,
                y:0
            },
            type:"triggerNode",
            data:null
        },
        {
            id:"2",
            position: {
                x:100,
                y:0
            },
            type:"resposeNode",
            data:null
        },
    ]
);

export const EdgesAtom = atom<EdgeType[]>([]);