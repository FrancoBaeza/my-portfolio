import { useState, useRef, useEffect } from "react";

import { useIsVisible } from "../hooks/useIsVisible";

export default ({ contactRef, setContactModal}) => {
    const visible = useIsVisible(contactRef);

    return (
        <section
            ref={contactRef}
            className={`${
                visible
                    ? "translate-y-0 opacity-1 delay-300"
                    : "translate-y-4 opacity-0"
            } duration-500 md:py-[100px] h-[400px] md:h-[700px] md:w-[1000px] items-center flex flex-col gap-7 mt-20 md:mt-0`}
        >
            {/* title */}
            <div className="flex flex-row justify-center items-center gap-3">
                <hr className=" border-base-secondary border w-24 md:w-52" />
                <h2
                    className={`text-base-primary text-2xl md:text-3xl tracking-tighter font-bold  md:leading-[80px] font-markProBold`}
                >
                    Let's Talk !
                </h2>
                <hr className=" border-base-secondary border w-24 md:w-52" />
            </div>

            {/* body */}
            <div className=" flex flex-col  items-center gap-7 md:w-1/2">
                <p className="text-400-primary font-markPro tracking-wide leading-7 text-center">
                    Don't be shy! I'm always open to new opportunities and projects. If you have a question or just want to say hi, feel free to send me a message.
                </p>
                <button
                    onClick={() => setContactModal(true)}
                    className={` text-400-primary hover:text-base-primary hover:bg-base-secondary/30 duration-300 font-mono p-3 border-base-secondary border-2 rounded`}
                >
                   Give me a call!
                </button>
            </div>

            
        </section>
    );
};
