import {atom} from "jotai";
import {NodeFeatureType} from "@/types/NodeFeatureType";
import TriggerNodeInfo from "@/components/NodeInfo/TriggerNodeInfo";
import ResponseNodeInfo from "@/components/NodeInfo/ResponseNodeInfo";
import JSONNodeInfo from "@/components/NodeInfo/JSONNodeInfo";

export const NodeFeatureAtom = atom<NodeFeatureType[]>(
    [
        {
            nodeType:"triggerNode",
            nodeName:"Trigger",
            nodeInfoComp:TriggerNodeInfo
        },
        {
            nodeType:"resposeNode",
            nodeName:"Response",
            nodeInfoComp:ResponseNodeInfo
        },
        {
            nodeType:"jsonNode",
            nodeName:"JSON",
            nodeInfoComp:JSONNodeInfo
        }
    ]
);