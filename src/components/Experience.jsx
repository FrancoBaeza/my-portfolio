import { useState, useRef, useEffect } from "react";

import Icon from "./icons/SocialIcon";
import { useIsVisible } from "../hooks/useIsVisible";

export default () => {
    const [year, setYear] = useState(2023);
    const [chg, setChg] = useState(true);
    const expreienceRef = useRef(null);
    const visible = useIsVisible(expreienceRef);

    useEffect(() => {
        setTimeout(() => {
            setChg(true);
        }, 300);
    }, [year]);

    return (
        <section
            ref={expreienceRef}
            className={`${
                visible
                    ? "translate-y-0 opacity-1 delay-300"
                    : "translate-y-4 opacity-0"
            } duration-500 py-[100px] h-screen w-[1000px] flex flex-col gap-7`}
        >
            {/* title */}
            <div className="flex flex-row justify-center items-center gap-3">
                {/* <hr className=" border-base-secondary border w-60"/> */}
                <h2
                    className={`text-base-primary text-3xl tracking-tighter font-bold  leading-[80px] font-markProBold`}
                >
                    My Road Map
                </h2>
                <hr className=" border-base-secondary border w-96" />
            </div>

            {/* body */}
            <div className="flex flex-row px-[100px] gap-10">
                {/* year buttons */}
                <div className=" flex flex-col items-end">
                    <div className="flex flex-row items-center my-[-4px]">
                        <p
                            className={` ${
                                year === 2023
                                    ? "text-base-primary"
                                    : "text-200-primary"
                            } duration-300 font-bold font-markProBold pr-1`}
                        >
                            2023
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
                            className={` ${
                                year === 2022
                                    ? "text-base-primary"
                                    : "text-200-primary"
                            } duration-300 font-bold font-markProBold pr-1`}
                        >
                            2022
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
              } 
              duration-300 border-0 bg-base-secondary w-[2px] h-20 mr-[7px]`}
                    />

                    <div className="flex flex-row items-center my-[-4px]">
                        <p
                            className={` ${
                                year === 2021
                                    ? "text-base-primary"
                                    : "text-200-primary"
                            } duration-300 font-bold font-markProBold pr-1`}
                        >
                            2021
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

                    <hr
                        className={` 
              ${
                  year === 2021 &&
                  " bg-gradient-to-b from-base-primary via-base-secondary to-base-secondary"
              } 
              ${
                  year === 2020 &&
                  " bg-gradient-to-t from-base-primary via-base-secondary to-base-secondary"
              } 
              duration-300 border-0 bg-base-secondary w-[2px] h-20 mr-[7px]`}
                    />

                    <div className="flex flex-row items-center my-[-4px]">
                        <p
                            className={` ${
                                year === 2020
                                    ? "text-base-primary"
                                    : "text-200-primary"
                            } duration-300 font-bold font-markProBold pr-1`}
                        >
                            2020
                        </p>
                        <button
                            onClick={() => {
                                setYear(2020);
                                setChg(false);
                            }}
                            className={` ${
                                year === 2020
                                    ? " bg-base-primary"
                                    : " bg-base-secondary"
                            } h-4 w-4 rounded-full duration-300`}
                        ></button>
                    </div>
                </div>

                {/* descriptions */}
                <div className={`w-full h-full`}>
                    {year === 2023 && (
                        <div
                            className={` ${
                                chg ? "opacity-1" : "opacity-0"
                            } duration-300 `}
                        >
                            <h3 className=" text font-markPro font-semibold text-base-primary">
                                Today
                            </h3>
                            <div className="flex flex-col gap-3">
                                <span className="flex gap-3">
                                    <Icon
                                        icon="triangle"
                                        className={`h-2 w-2 fill-base-secondary rotate-90 mt-2 ml-2`}
                                    />
                                    <p className="text-400-primary w-[600px] font-markPro tracking-wide">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </span>

                                <span className="flex gap-3">
                                    <Icon
                                        icon="triangle"
                                        className={`h-2 w-2 fill-base-secondary rotate-90 mt-2 ml-2`}
                                    />
                                    <p className="text-400-primary w-[600px] font-markPro tracking-wide">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </span>
                            </div>
                        </div>
                    )}

                    {year === 2022 && (
                        <div
                            className={` ${
                                chg ? "opacity-1" : "opacity-0"
                            } flex flex-col duration-300 gap-7 `}
                        >
                            <div>
                                <h3 className=" text font-markPro font-semibold text-base-primary">
                                    October 2022 - present
                                </h3>
                                <div className="flex flex-col gap-3">
                                    <span className="flex gap-3">
                                        <Icon
                                            icon="triangle"
                                            className={`h-2 w-2 fill-base-secondary rotate-90 mt-2 ml-2`}
                                        />
                                        <p className="text-400-primary w-[600px] font-markPro tracking-wide">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </p>
                                    </span>
                                </div>
                            </div>

                            <div>
                                <h3 className=" text font-markPro font-semibold text-base-primary">
                                    July 2022
                                </h3>
                                <div className="flex flex-col gap-3">
                                    <span className="flex gap-3">
                                        <Icon
                                            icon="triangle"
                                            className={`h-2 w-2 fill-base-secondary rotate-90 mt-2 ml-2`}
                                        />
                                        <p className="text-400-primary w-[600px] font-markPro tracking-wide">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </p>
                                    </span>
                                </div>
                            </div>

                            <div>
                                <h3 className=" text font-markPro font-semibold text-base-primary">
                                    May - june 2022
                                </h3>
                                <div className="flex flex-col gap-3">
                                    <span className="flex gap-3">
                                        <Icon
                                            icon="triangle"
                                            className={`h-2 w-2 fill-base-secondary rotate-90 mt-2 ml-2`}
                                        />
                                        <p className="text-400-primary w-[600px] font-markPro tracking-wide">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}

                    {year === 2021 && (
                        <div
                            className={` ${
                                chg ? "opacity-1" : "opacity-0"
                            } duration-300 `}
                        >
                            <h3 className=" text font-markPro font-semibold text-base-primary">
                                Novemver - December 2021
                            </h3>
                            <div className="flex flex-col gap-3">
                                <span className="flex gap-3">
                                    <Icon
                                        icon="triangle"
                                        className={`h-2 w-2 fill-base-secondary rotate-90 mt-2 ml-2`}
                                    />
                                    <p className="text-400-primary w-[600px] font-markPro tracking-wide">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </span>

                                <span className="flex gap-3">
                                    <Icon
                                        icon="triangle"
                                        className={`h-2 w-2 fill-base-secondary rotate-90 mt-2 ml-2`}
                                    />
                                    <p className="text-400-primary w-[600px] font-markPro tracking-wide">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </span>
                            </div>
                        </div>
                    )}

                    {year === 2020 && (
                        <div
                            className={` ${
                                chg ? "opacity-1" : "opacity-0"
                            } duration-300 `}
                        >
                            <h3 className=" text font-markPro font-semibold text-base-primary">
                                March 2020 - present
                            </h3>
                            <div className="flex flex-col gap-3">
                                <span className="flex gap-3">
                                    <Icon
                                        icon="triangle"
                                        className={`h-2 w-2 fill-base-secondary rotate-90 mt-2 ml-2`}
                                    />
                                    <p className="text-400-primary w-[600px] font-markPro tracking-wide">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </span>

                                <span className="flex gap-3">
                                    <Icon
                                        icon="triangle"
                                        className={`h-2 w-2 fill-base-secondary rotate-90 mt-2 ml-2`}
                                    />
                                    <p className="text-400-primary w-[600px] font-markPro tracking-wide">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
