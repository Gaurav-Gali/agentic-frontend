import {datasType, NodeType} from "@/types/NodeType";
import {useAtom} from "jotai";
import {NodesAtom} from "@/store/Nodes/NodesAndEdgesStore";

export const useSetNodeData = () => {
    const [nodes, setNodes] = useAtom<NodeType[]>(NodesAtom);

    function setNodeData(id:string, data:datasType) {
        setNodes((prevNodes) => prevNodes.map((n) => n.id === id ? {...n,data:data} : n));
    }

    return setNodeData;
}