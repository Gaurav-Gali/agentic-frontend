"use client";

import { useAtom } from "jotai";
import { NodesAtom } from "@/store/Nodes/NodesAndEdgesStore";
import { NodeType } from "@/types/NodeType";

export const useFetchNode = () => {
    const [nodes] = useAtom<NodeType[]>(NodesAtom);

    function fetchNode(id: string): NodeType | null {
        const node = nodes.find((node) => node.id === id);
        return node || null;
    }

    return fetchNode;
};
