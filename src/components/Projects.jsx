import { useState, useRef, useEffect } from "react";

import { useIsVisible } from "../hooks/useIsVisible";
import Icon from "./icons/Icon";

export default () => {
    const [turnera, setTurnera] = useState(false);
    const [turneraTime, setTurneraTime] = useState(false);
    const [turneraFinal, setTurneraFinal] = useState(false);
    const projectsRef = useRef(null);
    const visible = useIsVisible(projectsRef);

    useEffect(() => {
        setTimeout(() => {
            setTurneraTime(true);
            setTimeout(() => setTurneraFinal(true), 100);
        }, 2000);
    }, [turnera]);
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
                    <div className="w-full h-[550px] relative">
                        <div
                            className={`${
                                turnera ? "w-full h-full" : "w-4/5 h-[490px]"
                            } duration-300 rounded shadow-lg flex flex-col items-center justify-between bg-gradient-to-br from-[#365F7F] to-[#B784B2]`}
                        >
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
                            {turneraTime ? (
                                <div className={` ${turneraFinal ? "opacity-1" : "opacity-0"} duration-500 h-full w-3/4 flex flex-col `}>
                                    <div className="w-full mt-8 flex flex-col gap-3">
                                        <p className=" bg-base-bg/90 rounded px-3 py-2 font-markPro text-400-primary shadow-lg leading-[22px] flex flex-row gap-4">
                                            <Icon icon="calendar" className={`w-6 fill-base-primary`}/>
                                            This system mas build with the
                                            purpose of helping it's user to
                                            manage their clients and
                                            appointments.
                                        </p>
                                        <p className="bg-base-bg/90 rounded px-3 py-2 font-markPro text-400-primary shadow-lg leading-[22px]">
                                            Following the users's needs, we
                                            developed a system that allows the
                                            user to create, edit and delete
                                            clients and appointments. Save a
                                            record of the clients status and the
                                            appointments history.
                                        </p>
                                        <p className="bg-base-bg/90 rounded px-3 py-2 font-markPro text-400-primary shadow-lg leading-[22px]">
                                            The system algo integrated a
                                            Whastsapp chat-bot that allows the
                                            user to automate the process of
                                            sending reminding messages to the
                                            clients.
                                        </p>
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
                                Proyecto de la turnera
                            </h3>
                            <p className=" font-markPro text-400-primary text-base">
                                I developed this aplication in collaboration
                                with team of three systems engeneering students.
                            </p>
                            <p className=" font-markPro text-400-primary text-base">
                                Learned the basics of the software development
                                cycle, since getting a client till deployemnt,
                                we adapted the aplication to the client specific
                                needs.
                            </p>
                            <p className=" font-mono text-base-secondary flex-grow items-end flex">
                                Click me to get more info
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
