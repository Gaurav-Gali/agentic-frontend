import React from 'react';
import {HandleType} from "@/types/HandleType";
import NodeWrapper from "@/components/Nodes/NodeWrapper";
import {Braces} from "lucide-react";
import {useAtom} from "jotai/index";
import {NodeType} from "@/types/NodeType";
import {NodesAtom} from "@/store/Nodes/NodesAndEdgesStore";

const JsonNode = ({id}:{id:string}) => {
    const [nodes, setNodes] = useAtom<NodeType[]>(NodesAtom);

    const targetHandles:HandleType[] = [
        {
            id:"json-input",
            type:"target",
        }
    ]

    const sourceHandles:HandleType[] = [
        {
            id:"json-output",
            type:"source",
        }
    ]

    return (
        <NodeWrapper handleRun={() => {
            setNodes((prev) =>
                prev.map((node) =>
                    node.id === id
                        ? { ...node, data: { ...node.data, key1: "value1" } }
                        : node
                )
            );
        }} nodeName={"Json"} nodeId={id} targetHandles={targetHandles} sourceHandles={sourceHandles}>
            <div>
                <Braces className={"text-yellow-400"} strokeWidth={1.5} size={16}/>
            </div>
        </NodeWrapper>
    );
};

export default JsonNode;