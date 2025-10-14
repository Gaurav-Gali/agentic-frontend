import React from 'react';
import NodeWrapper from "@/components/Nodes/NodeWrapper";
import {Zap} from "lucide-react";
import {HandleType} from "@/types/HandleType";

const TriggerNode = ({id}:{id:string}) => {
    const sourceHandles:HandleType[] = [
        {
            id:"trigger-output",
            type:"source",
        }
    ]

    return (
        <NodeWrapper handleRun={() => {}} nodeName={"Trigger"} nodeId={id} targetHandles={null} sourceHandles={sourceHandles}>
            <div>
                <Zap className={"text-emerald-400"} strokeWidth={1.5} size={16}/>
            </div>
        </NodeWrapper>
    );
};

export default TriggerNode;