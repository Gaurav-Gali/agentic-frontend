"use client";

import React, {useEffect} from 'react';

import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"
import {useAtom} from "jotai";
import {NodeSelectorOpen} from "@/store/NodeSelectorOpen";
import {NodePickerListAtom} from "@/store/Nodes/NodePickerList";
import {NodePickerListType, nodesListType} from "@/types/NodePickerListType";
import {useAddNode} from "@/hooks/NodeActions/useAddNode";

const NodeSelectorBox = () => {
    const [open,setOpen] = useAtom<boolean>(NodeSelectorOpen);


    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const [nodePickerList, setNodePickerList] = useAtom<NodePickerListType[]>(NodePickerListAtom);

    const addNode = useAddNode();

    const handleSelection = (nodeType:nodesListType) => {
        addNode(nodeType.nodeType)
        setOpen(false);
    }

    return (
        <CommandDialog open={open} onOpenChange={setOpen} className={"w-[500px] pb-1 rounded-2xl"}>
            <Command>
                <CommandInput placeholder="Type a node or search... (⌘K / Ctrl+K)" />
                <CommandList>
                    <CommandEmpty>No node found.</CommandEmpty>

                    {/* Command Groups */}
                    {nodePickerList.map((node,index) => (
                        <div key={index}>
                            <CommandGroup heading={node.nodeGroup}>
                                {node.nodesList.map((nodeType, idx) => {
                                    const Icon = nodeType.nodeIcon; // component reference
                                    return (
                                        <CommandItem onSelect={() => handleSelection(nodeType)} key={idx} className="flex items-center gap-2">
                                            <Icon />
                                            <span>{nodeType.nodeName}</span>
                                        </CommandItem>
                                    );
                                })}

                            </CommandGroup>
                            {index < nodePickerList.length-1 && <CommandSeparator />}
                        </div>
                    ))}
                </CommandList>
            </Command>
        </CommandDialog>
    );
};

export default NodeSelectorBox;