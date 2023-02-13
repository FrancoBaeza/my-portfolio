import { useState, useRef } from "react";

import { useIsVisible } from "../hooks/useIsVisible";

export default () => {
    const projectsRef = useRef(null);
    const visible = useIsVisible(projectsRef);

    return (
        <section
            className={` ${
                visible
                    ? "translate-y-0 opacity-1 delay-300"
                    : "translate-y-4 opacity-0"
            }  duration-500 py-[100px] h-screen w-[1000px] flex flex-col gap-7`}
        >
            {/* title */}
            <div className="flex flex-row justify-center items-center gap-3">
                <hr className=" border-base-secondary border w-80" />
                <h2
                    className={`text-base-primary text-3xl tracking-tighter font-bold  leading-[80px] font-markProBold`}
                >
                    Some things i've built
                </h2>
                {/* <hr className=" border-base-secondary border w-44" /> */}
            </div>

            {/* body */}
            <div ref={projectsRef} className="flex flex-col">
            
                <div className="">
                    <div className="w-full h-[600px] relative">
                        <div className="w-4/5 h-[500px] border rounded border-slate-500 "></div>
                        <div className="w-2/5 h-[350px] border rounded border-slate-500 bg-slate-400/80 absolute right-0 bottom-10 flex flex-col p-5">
                            <h3 className=" font-markPro text-base-primary text-xl self-center mb-2">Proyecto de la turnera</h3>
                            <p className=" font-markPro text-400-primary text-base">I developed this aplication in collaboration with team of three systems engeneering students.</p>
                            <p className=" font-markPro text-400-primary text-base">Learned the basics of the software development cycle, since getting a client till deployemnt, we adapted the aplication to the client specific needs.</p>
                            <p className=" font-mono text-base-secondary flex-grow items-end flex" >Click me to get more info</p>
                        </div>
                    </div>
                </div>
                

            </div>
            
        </section>
    );
}