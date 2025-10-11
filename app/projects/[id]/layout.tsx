import React from 'react';
import ProjectsNavbar from "@/components/projects/ProjectsNavbar";
import SideBar from "@/components/projects/SideBar";

const Layout = ({children}:{children:React.ReactNode}) => {
    return (
        <div>
            <div className="absolute z-50 top-0 left-0 w-full h-screen pointer-events-none">
                <div className="pointer-events-auto">
                    <ProjectsNavbar/>
                </div>
            </div>

            <div className="absolute z-40 top-15 left-0 h-full pointer-events-none">
                <div className="pointer-events-auto">
                    <SideBar />
                </div>
            </div>

            <div className="w-full h-full">
                {children}
            </div>

        </div>
    );
};

export default Layout;