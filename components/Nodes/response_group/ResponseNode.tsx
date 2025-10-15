import React from "react";
import { HandleType } from "@/types/HandleType";
import NodeWrapper from "@/components/Nodes/NodeWrapper";
import { Send } from "lucide-react";
import {useFetchIncommingData} from "@/hooks/NodeActions/useFetchIncommingData";
import { useSetNodeData } from "@/hooks/NodeActions/useSetNodeData";

const ResponseNode = ({ id }: { id: string }) => {
    const fetchIncommingNode = useFetchIncommingData();
    const setNodeData = useSetNodeData();

    const targetHandles: HandleType[] = [
        {
            id: "response-input",
            type: "target",
        },
    ];

    const handleRun = () => {
        const incomingDataList = fetchIncommingNode(id);

        if (incomingDataList && incomingDataList.length > 0) {
            // For ResponseNode, we just take the first connected handle’s data
            const data = incomingDataList[0];
            setNodeData(id, data);
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
            <div className="flex justify-center items-center w-full h-full">
                <Send className="text-indigo-400" strokeWidth={1.5} size={16} />
            </div>
        </NodeWrapper>
    );
};

export default ResponseNode;
