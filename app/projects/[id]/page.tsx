import React from 'react';
import NodeEditor from "@/components/Nodes/NodeEditor";
import {NodeInfoBar} from "@/components/projects/NodeInfoBar";
import AbsoluteWrapper from "@/components/AbsoluteWrapper";
import NodeSelectorBox from "@/components/projects/NodeSelectorBox";

const Page = () => {
    return (
        <div className={""}>
            <AbsoluteWrapper className={"top-15 right-0"}>
                <NodeInfoBar />
            </AbsoluteWrapper>

            <NodeSelectorBox />

            {/* Node Editor */}
            <NodeEditor/>
        </div>
    );
};

export default Page;