import {useFetchNode} from "@/hooks/NodeActions/useFetchNode";
import {useAtom} from "jotai";
import {NodeFeatureAtom} from "@/store/Nodes/NodeFeatureStore";
import {NodeFeatureType} from "@/types/NodeFeatureType";
import {NodeType} from "@/types/NodeType";

export const useNodeFeatures = () => {
    const [nodeFeature, setNodeFeature] = useAtom<NodeFeatureType[]>(NodeFeatureAtom);
    const fetchNode = useFetchNode();

    function nodeFeatures(id: string): [NodeType | null, NodeFeatureType | null] {
        const node: NodeType | null = fetchNode(id);
        const feature: NodeFeatureType | null =
            nodeFeature.find((n) => n.nodeType === node?.type) ?? null;

        return [node, feature];
    }

    return nodeFeatures;
};
