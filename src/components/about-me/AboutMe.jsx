import { useState, useRef } from "react";

import { useIsVisible } from "../../hooks/useIsVisible";

export default ({ aboutMeRef }) => {
    const visible = useIsVisible(aboutMeRef);
    const [imgHover, setImgHover] = useState(false);

    return (
        <section
            className={` ${
                visible
                    ? "translate-y-0 opacity-1 delay-300"
                    : "translate-y-4 opacity-0"
            }  duration-500 py-[100px] md:h-screen md:w-[1000px] flex flex-col gap-7`}
            ref={aboutMeRef}
        >
            {/* title */}
            <div className="flex flex-row justify-center items-center gap-3">
                <hr className=" border-base-secondary border w-24 md:w-44" />
                <h2
                    className={`text-base-primary text-2xl md:text-3xl tracking-tighter font-bold  leading-[80px] font-markProBold`}
                >
                    About Me
                </h2>
                <hr className=" border-base-secondary border w-24 md:w-44" />
            </div>

            {/* body */}
            <div className="flex flex-col">
                <div className="flex flex-col md:flex-row md:h-[400px]">
                    <div className="md:w-2/5 h-[350px] flex justify-center items-center relative">
                        <span
                            className={`border-t-2 border-l-2 border-base-secondary rounded-tl-md h-[50px] w-[150px] absolute z-50 duration-[0.5s] ${
                                imgHover ? "top-3 left-5 md:left-9" : "top-2 left-4 md:left-8"
                            }`}
                        ></span>

                        <img
                            onMouseEnter={() => setImgHover(true)}
                            onMouseLeave={() => setImgHover(false)}
                            // src="https://picsum.photos/300"
                            src="/projectPhotos/portrait.jpg"

                            alt="profile"
                            className={` h-[300px] rounded-md duration-[0.5s] ${
                                imgHover
                                    ? "grayscale-0"
                                    : "grayscale scale-[.99]"
                            }`}
                        />

                        <span
                            className={`border-b-2 border-r-2 border-base-secondary rounded-br-md h-[50px] w-[150px] absolute z-50 duration-[0.5s] ${
                                imgHover
                                    ? "bottom-3 right-5 md:right-9"
                                    : "bottom-2 right-4 md:right-8"
                            }`}
                        ></span>
                    </div>
                    <div className="md:w-3/5 flex flex-col gap-4 items-center md:items-start">
                        <p className="text-400-primary font-markPro tracking-wide leading-7 md:w-5/6">
                            I was born in 2002 in the city of Mar del Plata,
                            Argentina. I am a{" "}
                            <span className="text-base-secondary">
                                Systems Engineer
                            </span>{" "}
                            graduated from the River Plate Adventist University.
                            I am passionate about technology and I am always
                            looking for new challenges to learn and improve my
                            skills.
                        </p>
                        <p className="text-400-primary font-markPro tracking-wide leading-7 md:w-5/6">
                            I'm Currently working as a full-stack developer at{" "}
                            <span className="text-base-secondary">
                                River Plate Adventist University
                            </span>
                            , building easy to use and accesible applications.
                        </p>
                        <p className="text-400-primary font-markPro tracking-wide leading-7 md:w-5/6">
                            i'm passionate about learning new technologies and
                            always looking for a way to improve my skillset. I
                            attended and completed these{" "}
                            <span className="text-base-secondary">
                                courses:
                            </span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center gap-3 mt-[50px]">
                    <hr className=" border-base-secondary border w-16 md:w-28" />
                    <h4
                        className={`text-base-primary text-md md:text-xl tracking-tighter font-bold  leading-[80px] font-markProBold`}
                    >
                        Other studies
                    </h4>
                    <hr className=" border-base-secondary border w-16 md:w-28" />
                </div>

                <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
                    <span className=" w-full h-fit text-center">
                        <h4 className=" text-lg font-markProBold text-400-secondary">
                            Angela Yu's
                        </h4>
                        <p className=" text-base font-markPro text-300-primary">
                            The Complete Web Development Bootcamp
                        </p>
                        <p className="text-base font-mono text-300-primary">
                            (55.5hs)
                        </p>
                    </span>
                    <span className=" w-full h-fit text-center">
                        <h4 className=" text-lg font-markProBold text-400-secondary">
                            IATec Academy
                        </h4>
                        <p className=" text-base font-markPro text-300-primary">
                            Software developing training program
                        </p>
                        <p className="text-base font-mono text-300-primary">
                            (129hs)
                        </p>
                    </span>
                    <span className=" w-full h-fit text-center">
                        <h4 className=" text-lg font-markProBold text-400-secondary">
                            Jonas Schmedtmann's
                        </h4>
                        <p className=" text-base font-markPro text-300-primary">
                            Node.js, Express, MongoDB & More: The Complete
                            Bootcamp
                        </p>
                        <p className="text-base font-mono text-300-primary">
                            (31.5hs)
                        </p>
                    </span>
                </div>

                <div className=" mt-4 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <span className=" w-full h-fit text-center">
                        <h4 className=" text-lg font-markProBold text-400-secondary">
                            Educación IT
                        </h4>
                        <p className=" text-base font-markPro text-300-primary">
                            Cloud Computing: Cloud Infrastructure
                        </p>
                        <p className="text-base font-mono text-300-primary">
                            (24hs)
                        </p>
                    </span>
                    <span className=" w-full h-fit text-center">
                        <h4 className=" text-lg font-markProBold text-400-secondary">
                            Fernando Herrera
                        </h4>
                        <p className=" text-base font-markPro text-300-primary">
                            NestJS + Microservices: Scalable and Modular Applications
                        </p>
                        <p className="text-base font-mono text-300-primary">
                            (21hs)
                        </p>
                    </span>
                </div>
            </div>
        </section>
    );
};
