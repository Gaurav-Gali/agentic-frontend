import React, {useState} from 'react';
import {Check, Loader, Play} from "lucide-react";
import {Handle, Position} from "@xyflow/react";
import {HandleType} from "@/types/HandleType";
import {cn} from "@/lib/utils";

import {useAtom} from "jotai";
import {SelectedNodeAtom} from "@/store/Nodes/SelectedNode";

const NodeWrapper = ({children, nodeName, nodeId,sourceHandles, targetHandles}:{children:React.ReactNode, nodeName:string, nodeId:string,sourceHandles:HandleType[]|null, targetHandles:HandleType[]|null}) => {
    const [running, setRunning] = useState<boolean>(false);
    const [executed, setExecuted] = useState<boolean>(false);
    const [selectedNode, setSelectedNode] = useAtom(SelectedNodeAtom);

    const handleNodeRun = () => {
        setRunning(true);
        setExecuted(false);

        setTimeout(() => {
            setRunning(false);
            setExecuted(true);
        }, 1000);
    }

    const maxHandles = Math.max(sourceHandles?.length || 0, targetHandles?.length || 0);
    const minHeight = maxHandles > 0 ? 25 + maxHandles * 10 + 5 : 40;

    return (
        <div onClick={() => setSelectedNode(nodeId)} className={"flex flex-col items-center justify-center gap-0.5"}>
            {/*Input Handles*/}
            {targetHandles?.map((handle:HandleType, index:number) => (
                <Handle
                    key={index}
                    id={handle.id}
                    type={handle.type}
                    position={Position.Left}
                    style={{
                        top: `${25 + index * 10}px`,
                        background:"oklch(70.5% 0.015 286.067)"
                    }}
                />
            ))}

            {/*Main*/}
            <span onClick={() => handleNodeRun()} className={"absolute cursor-pointer top-[-4px] right-[-4px] flex items-center justify-center text-green-500 bg-green-300 border-[1px] border-green-400 rounded-full p-[3px]"}>
                {running ? <Loader className={"animate-spin"} size={8}/> : <>
                    {executed ? <Check size={8}/> : <Play size={8}/>}
                </>}
            </span>
            <div
                className={cn("bg-white min-w-10 flex items-center justify-center rounded-lg px-2 py-2 border", nodeId === selectedNode ? "border-zinc-500" : "border-zinc-300")}
                style={{
                    minHeight: `${minHeight}px`
                }}
            >
                {children}
            </div>
            <p className={"text-[8px] capitalize font-normal text-zinc-500"}>{nodeName}</p>

            {/*Output Handles*/}
            {sourceHandles?.map((handle:HandleType, index:number) => (
                <Handle
                    key={index}
                    id={handle.id}
                    type={handle.type}
                    position={Position.Right}
                    style={{
                        top: `${25 + index * 10}px`,
                        background:"oklch(70.5% 0.015 286.067)"
                    }}
                />
            ))}
        </div>
    );
};

export default NodeWrapper;