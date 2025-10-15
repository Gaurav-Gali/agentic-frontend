import React from "react";
import JsonEditor from "@/components/utilities/JsonEditor";
import { FileWarning } from "lucide-react";
import { useFetchNode } from "@/hooks/NodeActions/useFetchNode";
import {cn} from "@/lib/utils";

const RequestRouterNodeInfo: React.FC<{ nodeId: string }> = ({ nodeId }) => {
    const fetchNode = useFetchNode();
    const node = fetchNode(nodeId);
    const nodeData = node?.data ?? null;

    return (
        <div className="w-full">
            {nodeData ? (
                <div className="flex flex-col w-full gap-3 rounded-xl">
                    <div className="flex items-center justify-between w-full">
                        <p className="text-xs font-medium text-zinc-500">Request Type</p>
                            <span
                                className={cn(
                                    "px-2 py-0.5 text-[11px] rounded-md font-medium",
                                    {
                                        // @ts-ignore
                                        "bg-blue-50 text-blue-600": nodeData?.rawData?.requestType === "GET",
                                        // @ts-ignore
                                        "bg-green-50 text-green-600": nodeData?.rawData?.requestType === "POST",
                                        // @ts-ignore
                                        "bg-yellow-50 text-yellow-600": nodeData?.rawData?.requestType === "PUT",
                                        // @ts-ignore
                                        "bg-purple-50 text-purple-600": nodeData?.rawData?.requestType === "PATCH",
                                        // @ts-ignore
                                        "bg-red-50 text-red-600": nodeData?.rawData?.requestType === "DELETE",
                                        // @ts-ignore
                                        "bg-zinc-50 text-zinc-500": !nodeData?.rawData?.requestType,
                                    }
                                )}
                            >

                                {
                                    // @ts-ignore
                                    nodeData?.rawData?.requestType || "N/A"
                                }
                            </span>
                    </div>

                    <JsonEditor
                        // @ts-ignore
                        value={JSON.stringify(nodeData?.rawData?.requestData ?? {}, null, 2)}
                        onChange={() => {}}
                        readOnly={true}
                        height="200px"
                        width="100%"
                    />
                </div>

            ) : (
                <div className="text-sm flex items-center justify-start gap-2 text-zinc-500">
                    <FileWarning size={16} />
                    No data available
                </div>
            )}
        </div>
    );
};

export default RequestRouterNodeInfo;
