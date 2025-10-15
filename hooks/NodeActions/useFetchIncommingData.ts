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

        const sourceNodesData = incomingEdges
            .map(edge => nodes.find(node => node.id === edge.source)?.data)
            .filter(Boolean) as object[]; // Remove undefined/null

        if (sourceNodesData.length === 0) {
            setInCommingData(null);
            return null;
        }

        setInCommingData(sourceNodesData);
        return sourceNodesData;
    }

    return fetchIncommingData;
};
