import React from 'react';
import {cn} from "@/lib/utils";

const AbsoluteWrapper = ({children,className}:{children:React.ReactNode,className:string}) => {
    return (
        <div className={cn(className, "absolute z-40 pointer-events-none")}>
            <div className={"pointer-events-auto"}>
                {children}
            </div>
        </div>
    );
};

export default AbsoluteWrapper;