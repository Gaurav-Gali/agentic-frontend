import {EdgeType} from "@/types/EdgeType";
import {useAtom} from "jotai";
import {EdgesAtom} from "@/store/Nodes/NodesAndEdgesStore";
import {NodeType} from "@/types/NodeType";

export const useSetEdgeFlow = () => {
    const [edges, setEdges] = useAtom<EdgeType[]>(EdgesAtom);

    function setEdgeFlow(nodeId:string) {
        setEdges((prev) => prev.map((e) => e.source === nodeId ? {...e,animated:true} : e));
    }

    return setEdgeFlow;
}