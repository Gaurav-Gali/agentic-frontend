import React from 'react';
import {HandleType} from "@/types/HandleType";
import NodeWrapper from "@/components/Nodes/NodeWrapper";
import {Send} from "lucide-react";

const ResponseNode = ({id}:{id:string}) => {
    const targetHandles:HandleType[] = [
        {
            id:"response-input",
            type:"target",
        }
    ]

    return (
        <NodeWrapper nodeName={"Response"} nodeId={id} targetHandles={targetHandles} sourceHandles={null}>
            <div>
                <Send className={"text-indigo-400"} strokeWidth={1.5} size={16}/>
            </div>
        </NodeWrapper>
    );
};

export default ResponseNode;