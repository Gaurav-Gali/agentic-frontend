import { useAtom } from "jotai";
import { EdgesAtom, NodesAtom } from "@/store/Nodes/NodesAndEdgesStore";
import { EdgeType } from "@/types/EdgeType";
import { NodeType } from "@/types/NodeType";
import { useState } from "react";

export const useFetchIncommingData = () => {
    const [edges] = useAtom<EdgeType[]>(EdgesAtom);
    const [nodes] = useAtom<NodeType[]>(NodesAtom);
    const [inCommingData, setInCommingData] = useState<object[] | null>(null);

    function fetchIncommingData(nodeId: string) {
        const incomingEdges = edges.filter(edge => edge.target === nodeId);

        if (incomingEdges.length === 0) {
            setInCommingData(null);
            return null;
        }

        const dataFromEdges = incomingEdges
            .map(edge => {
                const sourceNode = nodes.find(n => n.id === edge.source);
                if (!sourceNode || !sourceNode.data) return null;

                // Return only the data corresponding to the source handle
                return sourceNode.data[edge.sourceHandle];
            })
            .filter(Boolean) as object[];

        if (dataFromEdges.length === 0) {
            setInCommingData(null);
            return null;
        }

        setInCommingData(dataFromEdges);
        return dataFromEdges;
    }

    return fetchIncommingData;
};
