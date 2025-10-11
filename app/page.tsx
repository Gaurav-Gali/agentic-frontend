import React from 'react';
import Link from "next/link";

const Page = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            Agentic {">"}
            <Link className={"m-2 cursor-pointer border border-zinc-100 px-2 py-1 rounded-full hover:bg-zinc-50"} href={"/projects/1"}>
                Projects
            </Link>
        </div>
    );
};

export default Page;