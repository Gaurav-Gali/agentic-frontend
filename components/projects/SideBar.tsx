"use client";

import React from 'react';
import {Blocks, Settings} from "lucide-react";
import {useAtom} from "jotai";
import {NodeSelectorOpen} from "@/store/NodeSelectorOpen";

const SideBar = () => {
    const [nodeSelectorOpen, setNodeSelectorOpen] = useAtom<boolean>(NodeSelectorOpen);
    return (
        <div className={"px-4 py-2 flex flex-col items-start justify-between gap-2 w-fit"}>
            <div className={"flex flex-col items-center justify-center gap-2"}>
                <div className={"bg-white cursor-pointer hover:bg-zinc-100 border flex items-center justify-center border-zinc-200 rounded-full w-10 h-10"}>
                    <Settings color={"oklch(55.2% 0.016 285.938)"} size={16}/>
                </div>

                <div onClick={() => setNodeSelectorOpen(true)} className={"bg-white cursor-pointer hover:bg-zinc-100 border flex items-center justify-center border-zinc-200 rounded-full w-10 h-10"}>
                    <Blocks color={"oklch(55.2% 0.016 285.938)"} size={16}/>
                </div>
            </div>
        </div>
    );
};

export default SideBar;