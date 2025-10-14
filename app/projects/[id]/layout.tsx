import React from 'react';
import ProjectsNavbar from "@/components/projects/ProjectsNavbar";
import SideBar from "@/components/projects/SideBar";
import AbsoluteWrapper from "@/components/utilities/AbsoluteWrapper";

const Layout = ({children}:{children:React.ReactNode}) => {
    return (
        <div>
            <AbsoluteWrapper className={"top-0 left-0 w-full"}>
                <ProjectsNavbar/>
            </AbsoluteWrapper>

            <AbsoluteWrapper className={"top-15 left-0"}>
                <SideBar/>
            </AbsoluteWrapper>

            <div className="w-full h-screen">
                {children}
            </div>

        </div>
    );
};

export default Layout;