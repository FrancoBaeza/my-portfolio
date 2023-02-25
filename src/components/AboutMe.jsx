import { useState, useRef } from "react";

import { useIsVisible } from "../hooks/useIsVisible";

export default ({ aboutMeRef }) => {
    const visible = useIsVisible(aboutMeRef);
    const [imgHover, setImgHover] = useState(false);

    return (
        <section
            className={` ${
                visible
                    ? "translate-y-0 opacity-1 delay-300"
                    : "translate-y-4 opacity-0"
            }  duration-500 py-[100px] h-screen w-[1000px] flex flex-col gap-7`}
            ref={aboutMeRef}
        >
            {/* title */}
            <div className="flex flex-row justify-center items-center gap-3">
                <hr className=" border-base-secondary border w-44" />
                <h2
                    className={`text-base-primary text-3xl tracking-tighter font-bold  leading-[80px] font-markProBold`}
                >
                    About Me
                </h2>
                <hr className=" border-base-secondary border w-44" />
            </div>

            {/* body */}
            <div className="flex flex-col">
                <div className="flex flex-row h-[400px]">
                    <div className="w-2/5 h-[350px] flex justify-center items-center relative">
                        <span
                            className={`border-t-2 border-l-2 border-base-secondary rounded-tl-md h-[50px] w-[150px] absolute z-50 duration-[0.5s] ${
                                imgHover ? "top-3 left-9" : "top-2 left-8"
                            }`}
                        ></span>

                        <img
                            onMouseEnter={() => setImgHover(true)}
                            onMouseLeave={() => setImgHover(false)}
                            src="https://picsum.photos/300"
                            alt="profile"
                            className={`rounded-md duration-[0.5s] ${
                                imgHover
                                    ? "grayscale-0"
                                    : "grayscale scale-[.99]"
                            }`}
                        />

                        <span
                            className={`border-b-2 border-r-2 border-base-secondary rounded-br-md h-[50px] w-[150px] absolute z-50 duration-[0.5s] ${
                                imgHover
                                    ? "bottom-3 right-9"
                                    : "bottom-2 right-8"
                            }`}
                        ></span>
                    </div>
                    <div className="w-3/5 flex flex-col gap-4">
                        <p className="text-400-primary font-markPro tracking-wide leading-7 w-5/6">
                            I was born in 2002 in the city of Mar del Plata,
                            Argentina. I am a{" "}
                            <span className="text-base-secondary">
                                Systems Engineer
                            </span>{" "}
                            advanced student at the River Plate Adventist
                            University. I am passionate about technology and I
                            am always looking for new challenges to learn and
                            improve my skills.
                        </p>
                        <p className="text-400-primary font-markPro tracking-wide leading-7 w-5/6">
                            I'm Currently working as a full-stack web developer
                            at{" "}
                            <span className="text-base-secondary">
                                Mi Portafolio Digital
                            </span>
                            , building easy to use and accesible applications.
                        </p>
                        <p className="text-400-primary font-markPro tracking-wide leading-7 w-5/6">
                            i'm passionate about learning new technologies and
                            always looking for a way to improve my skillset. I
                            attended and completed these <span className="text-base-secondary">courses:</span>
                        </p>
                    </div>
                </div>
                <div className=" grid grid-cols-3 gap-4">
                    <span className=" w-full h-[200px] text-center">
                        <h4 className=" text-lg font-markProBold text-400-secondary">Angela Yu's</h4>
                        <p className=" text-base font-markPro text-300-primary">The Complete Web Development Bootcamp</p>
                        <p className="text-base font-mono text-300-primary">(55.5hs)</p>
                    </span>
                    <span className=" w-full h-[200px] text-center">
                        <h4 className=" text-lg font-markProBold text-400-secondary">IATec Academy</h4>
                        <p className=" text-base font-markPro text-300-primary">Software developing training program</p>
                        <p className="text-base font-mono text-300-primary">(129hs)</p>
                    </span>
                    <span className=" w-full h-[200px] text-center">
                        <h4 className=" text-lg font-markProBold text-400-secondary">Jonas Schmedtmann's</h4>
                        <p className=" text-base font-markPro text-300-primary">Node.js, Express, MongoDB & More: The Complete Bootcamp</p>
                        <p className="text-base font-mono text-300-primary">(31.5hs)</p>
                    </span>
                </div>
            </div>
        </section>
    );
};
