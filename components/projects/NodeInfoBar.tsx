"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, X } from "lucide-react";

const NodeInfoBar = ({ id }: { id: string | null }) => {
    const [collapsed, setCollapsed] = useState(false);

    if (id === null) return null;

    return (
        <div className="px-4 py-2">
            <div
                className={cn(
                    "bg-white rounded-xl border border-zinc-200 transition-all duration-300 overflow-hidden",
                    "w-[90vw]",
                    "sm:w-[60vw]",
                    "md:w-[40vw]",
                    "lg:w-[30vw]",
                    "xl:w-[25vw]",
                    "2xl:w-[20vw]",
                    collapsed ? "max-h-[55px]" : "max-h-[70vh]"
                )}
            >
                {/* Header */}
                <div className="px-4 py-3 flex items-center justify-between border-b border-zinc-100">
                    <span className="text-zinc-700 text-[15px] font-semibold flex items-center gap-2">
                        Trigger
                    </span>
                    <div className="cursor-pointer flex items-center gap-3">
                        {/* Toggle Collapse */}
                        <div onClick={() => setCollapsed(!collapsed)}>
                            {collapsed ? (
                                <ChevronDown size={20} className="text-zinc-500" />
                            ) : (
                                <ChevronUp size={20} className="text-zinc-500" />
                            )}
                        </div>
                        {/* Close (clear node) */}
                        <X size={16} className="text-zinc-500 hover:text-zinc-700 transition-colors cursor-pointer" />
                    </div>
                </div>

                {/* Main Content */}
                <div
                    className={cn(
                        "transition-all duration-300 ease-in-out overflow-y-auto",
                        collapsed ? "opacity-0 h-0" : "opacity-100 p-4 h-auto"
                    )}
                >
                    <p className="text-sm text-zinc-500">
                        Node information content goes here — details, inputs, and configs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NodeInfoBar;
