import { useState, useRef, useEffect } from "react";

import { useIsVisible } from "../hooks/useIsVisible";
import Icon from "./icons/Icon";

export default ({ projectsRef }) => {
    const [turnera, setTurnera] = useState(false);
    const [turneraTime, setTurneraTime] = useState(false);
    const [turneraFinal, setTurneraFinal] = useState(false);
    const visible = useIsVisible(projectsRef);

    useEffect(() => {
        if (turnera) {
            setTimeout(() => {
                setTurneraTime(true);
                setTimeout(() => setTurneraFinal(true), 100);
            }, 600);
        }
    }, [turnera]);

    const closeTurnera = () => {
        setTurneraFinal(false);
        setTimeout(() => setTurneraTime(false), 200);
        setTimeout(() => setTurnera(false), 500);
    };

    return (
        <section
            ref={projectsRef}
            className={` ${
                visible
                    ? "translate-y-0 opacity-1 delay-300"
                    : "translate-y-4 opacity-0"
            }  duration-500 py-[100px]  w-[1000px] flex flex-col gap-7`}
        >
            {/* title */}
            <div className="flex flex-row justify-center items-center gap-3">
                <hr className=" border-base-secondary border w-80" />
                <h2
                    className={`text-base-primary text-3xl tracking-tighter font-bold  leading-[80px] font-markProBold`}
                >
                    Some of my projects
                </h2>
                {/* <hr className=" border-base-secondary border w-44" /> */}
            </div>

            {/* body */}
            <div className="flex flex-col">
                <div className="">
                    <div className="w-full h-[550px] relative">
                        <div
                            className={`${
                                turnera ? "w-full h-full" : "w-4/5 h-[490px]"
                            } duration-300 rounded shadow-lg flex flex-col items-center justify-between bg-gradient-to-br from-[#365F7F] to-[#B784B2]`}
                        >
                            {/* cruz para cerrar la turnera */}
                            {turneraFinal && (
                                <div
                                    className={` ${
                                        turneraFinal ? "opacity-1" : "opacity-0"
                                    } duration-500 absolute right-5 top-3 cursor-pointer`}
                                    onClick={closeTurnera}
                                >
                                    <Icon
                                        icon="close"
                                        className={`w-6 fill-base-primary`}
                                    />
                                </div>
                            )}

                            {/* titulo de la turnera */}
                            <div className=" flex flex-col items-center">
                                <h2
                                    className={` ${
                                        turnera
                                            ? "mt-8 text-4xl"
                                            : "mt-14 text-2xl"
                                    } duration-300 font-markPro text-base-primary  `}
                                >
                                    Making things simple
                                </h2>
                                <p
                                    className={`${
                                        turnera ? "text-xl" : "text-base"
                                    } font-markPro text-400-primary my-4`}
                                >
                                    A simple and easy way to manage your clients
                                </p>
                            </div>

                            {/* imagen de la turnera y descripción*/}
                            {turneraTime ? (
                                <div
                                    className={` ${
                                        turneraFinal ? "opacity-1" : "opacity-0"
                                    } duration-500 h-full w-3/4 flex flex-col `}
                                >
                                    <div className="w-full mt-8 flex flex-col gap-3">
                                        <p className=" bg-base-bg/90 rounded text-sm px-3 py-2 font-markPro text-400-primary shadow-lg leading-[22px] flex flex-row gap-4">
                                            <Icon
                                                icon="calendar"
                                                className={`w-6 fill-base-primary`}
                                            />
                                            This system mas build with the
                                            purpose of helping it's user to
                                            manage their clients and
                                            appointments.
                                        </p>
                                        <p className="bg-base-bg/90 rounded text-sm px-3 py-2 font-markPro text-400-primary shadow-lg leading-[22px] flex flex-row gap-2">
                                            <Icon
                                                icon="wsp"
                                                className={`w-8 fill-base-primary self-center`}
                                            />
                                            <p>
                                                The system includes a{" "}
                                                <span className=" text-base-secondary">
                                                    {" "}
                                                    chat feature{" "}
                                                </span>
                                                that assists clients by
                                                reminding them of their
                                                scheduled appointments.
                                            </p>
                                        </p>
                                        <p className="bg-base-bg/90 rounded text-sm px-3 py-2 font-markPro text-400-primary shadow-lg leading-[22px] flex flex-row gap-3">
                                            <Icon
                                                icon="db"
                                                className={`w-8 fill-base-primary self-center`}
                                            />
                                            <p>
                                                I primarily worked on developing
                                                the
                                                <span className=" text-base-secondary">
                                                    {" "}
                                                    back-end{" "}
                                                </span>
                                                of the application, which
                                                involved making architectural
                                                decisions and implementing the
                                                system's logic.
                                            </p>
                                        </p>
                                    </div>
                                    <div className="flex justify-center w-full mt-4">
                                        <div className="flex-grow flex flex-col gap-3">
                                            <h3 className="text-sm font-markPro text-400-primary leading-[22px] ">
                                                The aplication was build using
                                                the MERN stack:
                                            </h3>
                                            <div className=" flex justify-start ">
                                                <div className="grid grid-cols-2 gap-3">
                                                    <p className="w-[100px] bg-base-bg/90 rounded text-sm px-3 py-2 font-markPro text-400-primary shadow-lg leading-[22px] flex flex-row gap-2">
                                                        <Icon
                                                            icon="react"
                                                            className={`w-6 fill-base-primary`}
                                                        />
                                                        React
                                                    </p>
                                                    <p className="w-[100px] bg-base-bg/90 rounded text-sm px-3 py-2 font-markPro text-400-primary shadow-lg leading-[22px] flex flex-row gap-2">
                                                        <Icon
                                                            icon="node"
                                                            className={`w-5 fill-base-primary`}
                                                        />
                                                        Node
                                                    </p>
                                                    <p className="w-[100px] bg-base-bg/90 rounded text-sm pr-2 pl-1 py-2 font-markPro text-400-primary shadow-lg leading-[22px] flex flex-row ">
                                                        <Icon
                                                            icon="mongo"
                                                            className={`w-6 fill-base-primary`}
                                                        />
                                                        MongoDB
                                                    </p>
                                                    <p className="w-[100px] bg-base-bg/90 rounded text-sm px-3 py-2 font-markPro text-400-primary shadow-lg leading-[22px] flex flex-row gap-2">
                                                        <Icon
                                                            icon="express"
                                                            className={`w-8 fill-base-primary`}
                                                        />
                                                        Express
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 flex items-start justify-end">
                                            <a
                                                href="https://turnera-frontend.vercel.app"
                                                className={`cursor-pointer mt-[34px] text-400-primary hover:text-400-primary hover:bg-base-bg/30 duration-300 font-mono p-2 border-base-bg border-2 rounded`}
                                            >
                                                Try out the demo!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <img
                                    className={`${
                                        turnera ? "opacity-0" : "opacity-1"
                                    } w-4/5 rounded-t-sm duration-[600ms] `}
                                    src="/projectPhotos/turnera.png"
                                    alt="imagen de turnera"
                                />
                            )}
                        </div>

                        {/* tarjeta de la turnera */}
                        <div
                            onClick={() => setTurnera(true)}
                            className={` ${
                                turnera && "hidden"
                            } w-[400px] h-[320px] hover:scale-[1.02] duration-300 cursor-pointer rounded absolute right-0 bottom-0 flex flex-col p-5 shadow-lg bg-gradient-to-bl from-[#365F7F]/95 to-[#8A78A9]/95 `}
                        >
                            <h3 className=" font-markPro text-base-primary text-xl self-center mb-2">
                                About the project
                            </h3>
                            <p className=" font-markPro text-400-primary text-base mb-1">
                                This application was developed by a team of
                                three systems engineering students as part of a
                                professional practice program.
                            </p>
                            <p className=" font-markPro text-400-primary text-base">
                                We learned about the entire software{" "}
                                <span className="text-base-secondary">
                                    development cycle
                                </span>{" "}
                                , from acquiring the client to deploying the
                                application. We also customized the application
                                to meet the specific needs of the client.
                            </p>
                            <p className=" font-mono text-base-secondary flex-grow items-end flex">
                                Click me to get more info!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
