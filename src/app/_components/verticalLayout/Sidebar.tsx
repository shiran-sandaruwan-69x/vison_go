import React from 'react';
import classNames from "classnames";
import Image from "next/image";
import visionGoLogo from "../../_assets/images/logo/vision-go-logo.png"
import visionGoLogo2 from "../../_assets/images/logo/vison-go-logo-2.png"


function Sidebar(props:any) {

    const asideStyle = classNames("sidebar overflow-y-auto overflow-x-auto fixed bg-sidebar h-full shadow-sm shadow-slate-500/40 transition duration-300 ease-in-out z-[99999]",
        {
            // ["w-[20rem]"]: !toggleCollapse,
            // ["sm:w-[5.4rem] sm:left-0 left-[-100%]"]: toggleCollapse,
        });

    return (
        <aside className="fixed vertical-menu z-50 h-full shadow-lg shadow-gray-900/20 transition duration-300 ease-in-out w-[20rem]">
            <div className="flex relative items-center py-5 px-3.5">
                <Image src={visionGoLogo} className="w-12 mx-3.5 min-h-fit" alt={"sideBarImage"} width={35} height={35}/>
                <h3 className="pl-2 text-2xl font-bold side-bar-text min-w-max">
                    VISION GO
                </h3>
            </div>
        </aside>
    );
}

export default Sidebar;