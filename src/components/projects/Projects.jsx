import { useState, useRef, useEffect } from "react";

import { useIsVisible } from "../../hooks/useIsVisible";
import Icon from "../icons/Icon";
import Turnera from "./Turnera";
import TraeDeUsa from "./TraeDeUsa";

export default ({ projectsRef }) => {
    const visible = useIsVisible(projectsRef);

    return (
        <section
            ref={projectsRef}
            className={` ${
                visible
                    ? "translate-y-0 opacity-1 delay-300"
                    : "translate-y-4 opacity-0"
            }  duration-500 md:py-[100px] md:w-[1000px] flex flex-col gap-7`}
        >
            {/* title */}
            <div className="flex flex-row justify-center items-center gap-3">
                <hr className=" border-base-secondary border w-36 md:w-80" />
                <h2
                    className={`text-base-primary text-2xl md:text-3xl tracking-tighter font-bold  leading-[80px] font-markProBold`}
                >
                    Some of my work
                </h2>
                {/* <hr className=" border-base-secondary border w-44" /> */}
            </div>

            {/* body */}
            <div className="hidden md:flex flex-col gap-[100px]">
                <Turnera />
                <div className=" w-full flex flex-row justify-center items-center gap-6">
                    <hr className=" border-base-secondary border w-[300px] " />
                </div>
                <TraeDeUsa />
            </div>

            <div className=" flex md:hidden">
                <p className="text-400-primary font-markPro tracking-wide leading-7 text-center">
                    Ops... I'm still working here. Please check back later.
                </p>
            </div>
        </section>
    );
};
