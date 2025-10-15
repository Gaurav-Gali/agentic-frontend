import {atom} from "jotai";
import {NodeFeatureType} from "@/types/NodeFeatureType";
import TriggerNodeInfo from "@/components/NodeInfo/TriggerNodeInfo";
import ResponseNodeInfo from "@/components/NodeInfo/ResponseNodeInfo";
import JSONNodeInfo from "@/components/NodeInfo/JSONNodeInfo";
import RequestRouterNodeInfo from "@/components/NodeInfo/RequestRouterNodeInfo";

export const NodeFeatureAtom = atom<NodeFeatureType[]>(
    [
        {
            nodeType:"triggerNode",
            nodeName:"Trigger",
            nodeInfoComp:TriggerNodeInfo
        },
        {
            nodeType:"requestRouterNode",
            nodeName:"Request Router",
            nodeInfoComp:RequestRouterNodeInfo
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