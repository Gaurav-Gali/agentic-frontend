import {EditorNodeTypes} from "@/types/EditorNodeTypes";
import React from "react";

export type nodesListType = {
    nodeName:string;
    nodeIcon:React.ComponentType<{ size?: number; className?: string }>;
    nodeType:keyof typeof EditorNodeTypes;
};

export type NodePickerListType = {
    nodeGroup: string,
    nodesList: nodesListType[]
};