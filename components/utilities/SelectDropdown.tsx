import React from 'react';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const SelectDropdown = ({elements, setElements, width, height}:{elements:string[], setElements:(item:string)=>void, width:number, height:number}) => {
    return (
        <Select onValueChange={setElements}>
            <SelectTrigger className={"bg-white text-zinc-500 px-3 outline-none shadow-none border border-zinc-200 rounded-full cursor-pointer"} style={{width:`${width}px`, height:`${height}px`}}>
                <SelectValue placeholder="GET" />
            </SelectTrigger>
            <SelectContent>
                {elements.map((item,index) => (
                    <SelectItem onSelect={() => setElements(item)} key={index} value={item}>{item}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default SelectDropdown;