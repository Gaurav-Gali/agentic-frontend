import React from "react";
import NodeWrapper from "@/components/Nodes/NodeWrapper";
import { Route } from "lucide-react";
import { HandleType } from "@/types/HandleType";
import { useFetchIncommingData } from "@/hooks/NodeActions/useFetchIncommingData";
import { useSetNodeData } from "@/hooks/NodeActions/useSetNodeData";

const RequestRouterNode = ({ id }: { id: string }) => {
    const fetchIncommingData = useFetchIncommingData();
    const setNodeData = useSetNodeData();

    const sourceHandles: HandleType[] = [
        { id: "router-output-GET", type: "source", label: "GET" },
        { id: "router-output-POST", type: "source", label: "POST" },
        { id: "router-output-PUT", type: "source", label: "PUT" },
        { id: "router-output-PATCH", type: "source", label: "PATCH" },
        { id: "router-output-DELETE", type: "source", label: "DELETE" },
    ];

    const targetHandles: HandleType[] = [
        { id: "router-input", type: "target" },
    ];

    const handleRun = () => {
        const incoming = fetchIncommingData(id);

        const nodeData: Record<string, any> = {
            "rawData":null,
            "router-output-GET": null,
            "router-output-POST": null,
            "router-output-PUT": null,
            "router-output-PATCH": null,
            "router-output-DELETE": null,
        };

        if (incoming && Array.isArray(incoming) && incoming.length > 0) {
            const incomingData = incoming[0];
            // @ts-ignore
            const reqType = incomingData?.requestType?.toUpperCase?.();

            const outputKey = `router-output-${reqType}`;
            if (nodeData.hasOwnProperty(outputKey)) {
                // @ts-ignore
                nodeData[outputKey] = incomingData.requestData;
                nodeData["rawData"] = incomingData;
            } else {
                setNodeData(id, {"trigger-output":null});
                return;
            }
        }

        setNodeData(id, nodeData);
    };

    return (
        <NodeWrapper
            handleRun={handleRun}
            nodeName="Request Router"
            nodeId={id}
            targetHandles={targetHandles}
            sourceHandles={sourceHandles}
        >
            <div className="flex items-center ml-2 justify-center">
                <Route className="text-blue-400" strokeWidth={1.5} size={16} />
            </div>
        </NodeWrapper>
    );
};

export default RequestRouterNode;
