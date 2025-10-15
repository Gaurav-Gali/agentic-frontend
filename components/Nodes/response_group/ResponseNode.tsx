import React from "react";
import { HandleType } from "@/types/HandleType";
import NodeWrapper from "@/components/Nodes/NodeWrapper";
import { Send } from "lucide-react";
import { useFetchIncommingData } from "@/hooks/NodeActions/useFetchIncommingData";
import { useSetNodeData } from "@/hooks/NodeActions/useSetNodeData";

const ResponseNode = ({ id }: { id: string }) => {
    const fetchIncommingData = useFetchIncommingData();
    const setNodeData = useSetNodeData();

    const targetHandles: HandleType[] = [
        {
            id: "response-input",
            type: "target",
        },
    ];

    const handleRun = () => {
        const incoming = fetchIncommingData(id);

        if (incoming && Array.isArray(incoming) && incoming.length > 0) {
            const incomingData = incoming[0];
            setNodeData(id, incomingData);
        } else {
            setNodeData(id, null);
        }
    };

    return (
        <NodeWrapper
            handleRun={handleRun}
            nodeName="Response"
            nodeId={id}
            targetHandles={targetHandles}
            sourceHandles={null}
        >
            <div>
                <Send className="text-indigo-400" strokeWidth={1.5} size={16} />
            </div>
        </NodeWrapper>
    );
};

export default ResponseNode;
