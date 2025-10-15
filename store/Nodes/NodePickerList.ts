import {atom} from "jotai";
import {NodePickerListType} from "@/types/NodePickerListType";
import {Zap, Send, Braces, Route} from "lucide-react";

export const NodePickerListAtom = atom<NodePickerListType[]>(
    [
        {
            nodeGroup:"Trigger",
            nodesList: [
                {
                    nodeName:"Trigger",
                    nodeType:"triggerNode",
                    nodeIcon: Zap
                },
                {
                    nodeName:"Request Router",
                    nodeType:"requestRouterNode",
                    nodeIcon: Route
                },
            ]
        },
        {
            nodeGroup:"Response",
            nodesList: [
                {
                    nodeName:"Response",
                    nodeType:"resposeNode",
                    nodeIcon: Send
                },
                {
                    nodeName:"Json",
                    nodeType:"jsonNode",
                    nodeIcon: Braces
                },
            ]
        },
    ]
);