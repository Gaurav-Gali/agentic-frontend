import React from "react";
import JsonEditor from "@/components/utilities/JsonEditor";
import { FileWarning } from "lucide-react";
import { useFetchNode } from "@/hooks/NodeActions/useFetchNode";

const ResponseNodeInfo: React.FC<{ nodeId: string }> = ({ nodeId }) => {
    const fetchNode = useFetchNode();
    const node = fetchNode(nodeId);
    const nodeData = node?.data ?? null;

    return (
        <div className="w-full">
            {nodeData ? (
                <JsonEditor
                    value={JSON.stringify(nodeData, null, 2)}
                    onChange={() => {}}
                    readOnly={true}
                    height="250px"
                    width="100%"
                />
            ) : (
                <div className="text-sm flex items-center justify-start gap-2 text-zinc-500">
                    <FileWarning size={16} />
                    No data available
                </div>
            )}
        </div>
    );
};

export default ResponseNodeInfo;
