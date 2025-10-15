import React, {useEffect, useState} from 'react';
import {useSetNodeData} from "@/hooks/NodeActions/useSetNodeData";
import {TriggerRequestType} from "@/types/CustomNodeTypes/TriggerRequestType";
import SelectDropdown from "@/components/utilities/SelectDropdown";
import {ArrowRight} from "lucide-react";
import {cn} from "@/lib/utils";
import JsonEditor from "@/components/utilities/JsonEditor";
import {useFetchNode} from "@/hooks/NodeActions/useFetchNode";
import {formatJSON} from "@/actions/FormatJSON";
import {NodeType} from "@/types/NodeType";

const TriggerNodeInfo:React.FC<{ nodeId: string }> = ({nodeId}) => {
    const setNodeData = useSetNodeData();

    const fetchNode = useFetchNode();
    const curNode:NodeType|null = fetchNode(nodeId);

    const [reqType,setReqType] = useState<string>("GET");

    const [reqData,setReqData] = useState<string>("");
    const [initialized, setInitialized] = useState(false);

    const [reqAttribute,setReqAttribute] = useState<string>("Body");

    useEffect(() => {
        if (!initialized && curNode?.data?.["trigger-output"]) {
            const triggerOutput = curNode.data["trigger-output"];

            // Safely extract request data
            // @ts-ignore
            const reqTypeFromNode = triggerOutput?.requestType || "GET";
            // @ts-ignore
            const reqDataFromNode = triggerOutput?.requestData || {};

            setReqType(reqTypeFromNode);
            setReqData(formatJSON(JSON.stringify(reqDataFromNode)) || "");
            setInitialized(true);
        }
    }, [curNode, initialized]);


    const reqTypes = [
        'GET',
        'POST',
        'PUT',
        'PATCH',
        'DELETE',
    ];

    const reqAttributes = [
        'Body',
        'Params',
        'Headers',
    ]

    const handleSendRequest = () => {
        if (!reqData || reqData.trim() === "{}") {
            setNodeData(nodeId, null);
            return;
        }

        let parsedData: object | null = null;
        try {
            parsedData = JSON.parse(reqData);
        } catch {
            parsedData = null;
        }

        if (!parsedData) {
            setNodeData(nodeId, null);
            return;
        }

        const nodeData = {
            "trigger-output": {
                requestType: reqType,
                requestData: parsedData
            }
        };

        console.log("node data:", nodeData);
        setNodeData(nodeId, nodeData);
    };


    return (
        <div className={"flex flex-col gap-3 transition-all duration-300"}>
            {/* Request Type */}
            <div className={"flex items-center justify-between"} >
                <SelectDropdown width={105} height={35} elements={reqTypes} setElements={setReqType} />
                <span onClick={() => handleSendRequest()} className={"bg-blue-500 hover:bg-blue-400 active:bg-blue-500 border border-blue-400 px-4 h-[35px] flex items-center justify-between gap-1 text-white cursor-pointer text-sm rounded-full"}>
                    Send
                    <ArrowRight size={14} />
                </span>
            </div>

            {/* Request Attributes */}
            <div className={"flex items-center justify-start gap-1"}>
                {reqAttributes.map((item,index) => (
                    <span onClick={() => setReqAttribute(item)} className={cn("bg-white transition-all duration-200 text-zinc-600 font-normal flex items-center justify-center cursor-pointer hover:bg-zinc-50 text-sm rounded-full border px-3 h-[35px]", item===reqAttribute && "flex-1 bg-zinc-50")} key={index}>
                        {item}
                    </span>
                ))}
            </div>

            {/* Request Handlers */}
            <div></div>

            {/* Body */}
            {reqAttribute === "Body" && <JsonEditor value={reqData} onChange={setReqData} />}

        </div>
    );
};

export default TriggerNodeInfo;