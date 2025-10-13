import {EditorNodeTypes} from "@/types/EditorNodeTypes";
import React from "react";

export type NodeFeatureType = {
    nodeName:string;
    nodeType:keyof typeof EditorNodeTypes;
    nodeInfoComp:React.FC<{nodeId:string}>;
}