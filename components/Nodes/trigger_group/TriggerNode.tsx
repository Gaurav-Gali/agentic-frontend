import React from 'react';
import NodeWrapper from "@/components/Nodes/NodeWrapper";
import {Zap} from "lucide-react";
import {HandleType} from "@/types/HandleType";
import {useSetEdgeFlow} from "@/hooks/NodeActions/useSetEdgeFlow";
import {useAtom} from "jotai";
import {NodesAtom} from "@/store/Nodes/NodesAndEdgesStore";
import {NodeType} from "@/types/NodeType";

const TriggerNode = ({id}:{id:string}) => {
    const [nodes, setNodes] = useAtom<NodeType[]>(NodesAtom);

    const sourceHandles:HandleType[] = [
        {
            id:"trigger-output",
            type:"source",
        },
        {
            id:"trigger-output2",
            type:"source",
        },
    ]

    const setEdgeFlow = useSetEdgeFlow();

    return (
        <NodeWrapper handleRun={() => {
            // setEdgeFlow(id);
            setNodes((prev) =>
                prev.map((node) =>
                    node.id === id
                        ? { ...node, data: { ...node.data, key1: "value1" } }
                        : node
                )
            );

            console.log(nodes);

        }} nodeName={"trigger"} nodeId={id} targetHandles={null} sourceHandles={sourceHandles}>
            <div>
                <Zap className={"text-emerald-400"} strokeWidth={1.5} size={16}/>
            </div>
        </NodeWrapper>
    );
};

export default TriggerNode;