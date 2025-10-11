import React from 'react';
import {Plus,X} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const endpoints = [
    {
        "id":1,
        "endpoint" : "users",
        "request" : "GET",
    },
    {
        "id":2,
        "endpoint" : "books",
        "request" : "PUT",
    },
    {
        "id":3,
        "endpoint" : "orders",
        "request" : "DELETE",
    }
]

const ProjectsNavbar = () => {
    return (
        <div className={"px-4 py-3 flex items-center justify-between"}>
            <div className={"flex items-center justify-center gap-2.5 border border-zinc-200 bg-white px-3 h-10 w-52 rounded-full"}>
                <span className={"text-zinc-600 flex items-center justify-center gap-1"}>
                    <div className={"h-5 w-5 border border-zinc-100 rounded-full bg-gradient-to-tr from-zinc-900 via-zinc-600 to-zinc-900"}></div>
                    <span>Agentic</span>
                </span>
                <span className={"text-zinc-300"}>/</span>
                <span className={"text-zinc-600 text-[15px] flex items-center justify-between gap-2 bg-white  cursor-pointer pr-1 py-0.5 rounded-full"}>
                    <span className={"font-semibold"}>{"project_1"}</span>
                </span>
            </div>

            {/* Endpoints */}
            <div className={"flex-1 rounded-full px-3 gap-2 flex items-center justify-start"}>
                <div className={"overflow-x-auto whitespace-nowrap scrollbar-hide max-w-[50vw] h-10 flex items-center gap-2"}>
                    {endpoints.map((endpoint) => (
                        <div key={endpoint.id} className={"bg-white text-zinc-500 hover:bg-zinc-100 transition-all duration-300 cursor-pointer flex items-center gap-1.5 justify-center border border-zinc-200 px-3 h-full rounded-full"}>
                            <p>{endpoint.endpoint}</p>
                            <X size={12}/>
                        </div>
                    ))}
                </div>

                <div className={"bg-white hover:bg-zinc-100 shrink-0 flex cursor-pointer items-center justify-center border border-zinc-200 px-3 h-10 w-10 rounded-full"}>
                    <Plus color={"oklch(55.2% 0.016 285.938)"} size={16}/>
                </div>
            </div>

            <div className={"px-2 py-1 rounded-full bg-white border border-zinc-200"}>
                <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                        <AvatarImage
                            src="https://github.com/maxleiter.png"
                            alt="@maxleiter"
                        />
                        <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    <Avatar>
                        <p className={"w-full hover:bg-zinc-100 bg-zinc-50 cursor-pointer flex items-center justify-center"}>
                            <Plus color={"oklch(55.2% 0.016 285.938)"} size={16}/>
                        </p>
                    </Avatar>
                </div>
            </div>

        </div>
    );
};

export default ProjectsNavbar;