import { useState, useRef, useEffect } from "react";

import Icon from "../icons/SocialIcon";
import { useIsVisible } from "../../hooks/useIsVisible";
import MiPortafolioSection from "./MiPortafolioSection";
import XirectSection from "./XirectSection";
import UapSection from "./UapSection";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default ({ experienceRef }) => {
    const [year, setYear] = useState(2023);
    const [chg, setChg] = useState(true);
    const visible = useIsVisible(experienceRef);

    useEffect(() => {
        setTimeout(() => {
            setChg(true);
        }, 300);
    }, [year]);

    return (
        <section
            ref={experienceRef}
            className={`${
                visible
                    ? "translate-y-0 opacity-1 delay-300"
                    : "translate-y-4 opacity-0"
            } duration-500 md:py-[350px] md:h-screen md:w-[1000px] flex flex-col gap-7`}
        >
            {/* title */}
            <div className="flex flex-row justify-center items-center gap-3">
                {/* <hr className=" border-base-secondary border w-60"/> */}
                <h2
                    className={`text-base-primary text-2xl md:text-3xl tracking-tighter font-bold  leading-[80px] font-markProBold`}
                >
                    My Road Map
                </h2>
                <hr className=" border-base-secondary border w-44 md:w-96" />
            </div>

            {/* body */}
            <div className="flex flex-col md:flex-row md:px-[100px] gap-10">
                {/* Jobs buttons PC */}
                <div className=" hidden md:flex flex-col items-end min-w-max">
                    <div className="flex flex-row items-center my-[-4px]">
                        <p
                            onClick={() => {
                                setYear(2023);
                                setChg(false);
                            }}
                            className={` cursor-pointer ${
                                year === 2023
                                    ? "text-base-primary"
                                    : "text-200-primary"
                            } duration-300 font-bold font-markProBold pr-1`}
                        >
                            UAP
                        </p>
                        <button
                            onClick={() => {
                                setYear(2023);
                                setChg(false);
                            }}
                            className={` ${
                                year === 2023
                                    ? " bg-base-primary"
                                    : " bg-base-secondary"
                            } h-4 w-4 rounded-full duration-300`}
                        ></button>
                    </div>

                    <hr
                        className={` 
              ${
                  year === 2023 &&
                  " bg-gradient-to-b from-base-primary via-base-secondary to-base-secondary"
              } 
              ${
                  year === 2022 &&
                  " bg-gradient-to-t from-base-primary via-base-secondary to-base-secondary"
              } 
              duration-300 border-0 bg-base-secondary w-[2px] h-20 mr-[7px]`}
                    />

                    <div className="flex flex-row items-center my-[-4px]">
                        <p
                            onClick={() => {
                                setYear(2022);
                                setChg(false);
                            }}
                            className={` cursor-pointer ${
                                year === 2022
                                    ? "text-base-primary"
                                    : "text-200-primary"
                            } duration-300 font-bold font-markProBold pr-1`}
                        >
                            Xirect
                        </p>
                        <button
                            onClick={() => {
                                setYear(2022);
                                setChg(false);
                            }}
                            className={` ${
                                year === 2022
                                    ? " bg-base-primary"
                                    : " bg-base-secondary"
                            } h-4 w-4 rounded-full duration-300`}
                        ></button>
                    </div>

                    <hr
                        className={`
                                    ${
                                        year === 2021 &&
                                        " bg-gradient-to-t from-base-primary via-base-secondary to-base-secondary"
                                    } 
                                    ${
                                        year === 2022 &&
                                        " bg-gradient-to-b from-base-primary via-base-secondary to-base-secondary"
                                    } duration-300 border-0 bg-base-secondary w-[2px] h-20 mr-[7px]`}
                    />

                    <div className="flex flex-row items-center my-[-4px]">
                        <p
                            onClick={() => {
                                setYear(2021);
                                setChg(false);
                            }}
                            className={` cursor-pointer ${
                                year === 2021
                                    ? "text-base-primary"
                                    : "text-200-primary"
                            } duration-300 font-bold font-markProBold pr-1`}
                        >
                            Mi Portafolio Digital
                        </p>
                        <button
                            onClick={() => {
                                setYear(2021);
                                setChg(false);
                            }}
                            className={` ${
                                year === 2021
                                    ? " bg-base-primary"
                                    : " bg-base-secondary"
                            } h-4 w-4 rounded-full duration-300`}
                        ></button>
                    </div>
                </div>

                {/* Jobs slider MOBILE */}
                <div className=" md:hidden flex flex-row gap-4 justify-center w-full">
                    <button
                        onClick={() => {
                            if (year === 2023) return;
                            setYear(year + 1);
                            setChg(false);
                        }}
                    >
                        <ChevronLeft
                            className={` w-7 ${
                                year === 2023
                                    ? " stroke-slate-500"
                                    : "stroke-base-primary"
                            }`}
                        />
                    </button>
                    <p
                        className={` cursor-pointer text-base-primary duration-300 font-bold font-markProBold pr-1`}
                    >
                        {year === 2023 && "Universidad Adventista del Plata"}
                        {year === 2022 && "Xirect Software Solutions"}
                        {year === 2021 && "Mi Portafolio Digital"}
                    </p>
                    <button
                        onClick={() => {
                            if (year === 2021) return;
                            setYear(year - 1);
                            setChg(false);
                        }}
                    >
                        <ChevronRight
                            className={` w-7  ${
                                year === 2021
                                    ? " stroke-slate-500"
                                    : "stroke-base-primary"
                            }`}
                        />
                    </button>
                </div>

                {/* descriptions */}
                <div className={`w-full h-full`}>
                    {year === 2023 && <UapSection chg={chg} />}

                    {year === 2022 && <XirectSection chg={chg} />}

                    {year === 2021 && <MiPortafolioSection chg={chg} />}
                </div>
            </div>
        </section>
    );
};
