import React from 'react';
import NodeWrapper from "@/components/Nodes/NodeWrapper";
import {Zap} from "lucide-react";
import {HandleType} from "@/types/HandleType";
import {useAtom} from "jotai";
import {NodesAtom} from "@/store/Nodes/NodesAndEdgesStore";
import {NodeType} from "@/types/NodeType";
import {useSetNodeData} from "@/hooks/NodeActions/useSetNodeData";

const TriggerNode = ({id}:{id:string}) => {
    const [nodes, setNodes] = useAtom<NodeType[]>(NodesAtom);

    const sourceHandles:HandleType[] = [
        {
            id:"trigger-output",
            type:"source",
        }
    ]

    const setNodeData= useSetNodeData();

    return (
        <NodeWrapper handleRun={() => setNodeData(id,{"key1":"val1"})} nodeName={"Trigger"} nodeId={id} targetHandles={null} sourceHandles={sourceHandles}>
            <div>
                <Zap className={"text-emerald-400"} strokeWidth={1.5} size={16}/>
            </div>
        </NodeWrapper>
    );
};

export default TriggerNode;