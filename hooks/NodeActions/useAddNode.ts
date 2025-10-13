import { useAtom } from "jotai";
import { NodesAtom } from "@/store/Nodes/NodesAndEdgesStore";
import { NodeType } from "@/types/NodeType";
import { EditorNodeTypes } from "@/types/EditorNodeTypes";
import { v4 as uuidv4 } from "uuid";

export const useAddNode = () => {
    const [nodes, setNodes] = useAtom<NodeType[]>(NodesAtom);

    function addNode(nodeType: keyof typeof EditorNodeTypes) {
        if (nodeType === "triggerNode" || nodeType === "resposeNode") {
            const exists = nodes.some((node) => node.type === nodeType);
            if (exists) return;
        }

        const newNode: NodeType = {
            id: uuidv4(),
            nodeName:"",
            position: { x: 0, y: 0 },
            data: null,
            type: nodeType,
            executionEndpoint: null,
        };

        setNodes((prevNodes) => [...prevNodes, newNode]);
    }

    return addNode;
};
