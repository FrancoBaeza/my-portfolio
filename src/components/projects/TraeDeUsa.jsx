import { useEffect, useState } from "react";
import Icon from "../icons/Icon";

export default () => {
    const [turnera, setTurnera] = useState(false);
    const [turneraTime, setTurneraTime] = useState(false);
    const [turneraFinal, setTurneraFinal] = useState(false);

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
        <div className="w-full h-[550px] relative">
            <div
                className={`${
                    turnera ? "w-full h-full" : "w-4/5 h-[490px]"
                } duration-300 rounded shadow-lg flex flex-col items-center justify-between bg-gradient-to-br from-[#365F7F] to-[#B784B2] right-0 absolute`}
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
                            turnera ? "mt-8 text-4xl" : "mt-14 text-2xl"
                        } duration-300 font-markPro text-base-primary  `}
                    >
                        Trae <span className="text-base-secondary">de</span> USA
                    </h2>
                    <p
                        className={`${
                            turnera ? "text-xl" : "text-base"
                        } font-markPro text-400-primary my-4`}
                    >
                        From the bigges USA stores to your door
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
                            <p className=" bg-base-bg/90 rounded text-sm px-3 py-2 font-markPro text-400-primary shadow-lg leading-[22px] flex flex-row gap-2">
                                <Icon
                                    icon="world"
                                    className={`w-7 fill-base-primary`}
                                />
                                This system was designed to make international
                                purchases as simple and efficient as possible
                                for the end user.
                            </p>
                            <p className="bg-base-bg/90 rounded text-sm px-3 py-2 font-markPro text-400-primary shadow-lg leading-[22px] flex flex-row gap-2">
                                <Icon
                                    icon="payment"
                                    className={`w-8 stroke-base-primary self-center`}
                                />
                                <p>
                                    The platform integrates with well-known
                                    payment gateways like PayPal and Stripe, as
                                    well as with local delivery systems in
                                    Paraguay.
                                </p>
                            </p>
                            <p className="bg-base-bg/90 rounded text-sm px-3 py-2 font-markPro text-400-primary shadow-lg leading-[22px] flex flex-row gap-3">
                                <Icon
                                    icon="settings"
                                    className={`w-8 fill-base-primary self-center`}
                                />
                                <p>
                                    I worked across the entire application as a
                                    full stack developer, making design and
                                    architecture decisions alongside my team.
                                </p>
                            </p>
                        </div>
                        <div className="flex justify-center w-full mt-4">
                            <div className="flex-grow flex flex-col gap-3">
                                <h3 className="text-sm font-markPro text-400-primary leading-[22px] ">
                                    The aplication was build using the following
                                    technologies:
                                </h3>
                                <div className=" flex justify-start ">
                                    <div className="grid grid-cols-2 gap-3">
                                        <p className="w-[100px] bg-base-bg/90 rounded text-sm px-3 py-2 font-markPro text-400-primary shadow-lg leading-[22px] flex flex-row gap-2">
                                            <Icon
                                                icon="php"
                                                className={`w-6 fill-base-primary`}
                                            />
                                            PHP
                                        </p>
                                        <p className="w-[100px] bg-base-bg/90 rounded text-sm px-3 py-2 font-markPro text-400-primary shadow-lg leading-[22px] flex flex-row gap-2">
                                            <Icon
                                                icon="laravel"
                                                className={`w-5 fill-base-primary`}
                                            />
                                            Laravel
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 flex items-start justify-end">
                                <a
                                    href="https://traedeusa.com/"
                                    target="_blank"
                                    className={`cursor-pointer mt-[34px] text-400-primary hover:text-400-primary hover:bg-base-bg/30 duration-300 font-mono p-2 border-base-bg border-2 rounded`}
                                >
                                    Try it out!
                                </a>
                            </div>
                        </div>
                    </div>
                ) : (
                    <img
                        className={`${
                            turnera ? "opacity-0" : "opacity-1"
                        } w-4/5 rounded-t-sm duration-[600ms] `}
                        src="/projectPhotos/traedeusa.png"
                        alt="imagen de turnera"
                    />
                )}
            </div>

            {/* tarjeta de la turnera */}
            <div
                onClick={() => setTurnera(true)}
                className={` ${
                    turnera && "hidden"
                } w-[350px] h-[320px] hover:scale-[1.02] duration-300 cursor-pointer rounded absolute left-0 bottom-0 flex flex-col p-5 shadow-lg bg-gradient-to-bl from-[#365F7F]/95 to-[#8A78A9]/95 `}
            >
                <h3 className=" font-markPro text-base-primary text-xl self-center mb-2">
                    About the project
                </h3>
                <p className=" font-markPro text-400-primary text-base mb-1">
                    I joined a newly formed team to resume the development of an
                    e-commerce platform for a client in Paraguay. My
                    responsibilities included developing new features,
                    restructuring and maintaining existing code, and integrating
                    the platform with external systems such as payment gateways.
                </p>
                <p className=" font-mono text-base-secondary flex-grow items-end flex">
                    Click me to get more info!
                </p>
            </div>
        </div>
    );
};
