import { useState } from "react";

export default () => {
    const [year , setYear] = useState(2020);
    return (
        <section className={`py-[100px] h-screen w-[1000px]`}>
            {/* title */}
            <div className="flex flex-row justify-center items-center gap-3">
                {/* <hr className=" border-base-secondary border w-60"/> */}
                <h2 className={`text-base-primary text-3xl tracking-tighter font-bold  leading-[80px] font-markProBold`} >My Road Map</h2>
                <hr className=" border-base-secondary border w-96"/>
            </div>

            {/* body */}
            <div className="flex flex-row px-[100px]">
                <div className=" flex flex-col items-end">
                    <div className="flex flex-row items-center my-[-4px]">
                        <p className={` ${ year === 2023 ? "text-base-primary" : "text-200-primary"} duration-300 font-bold font-markProBold pr-1`}>2023</p>
                        <button 
                            onClick={() => setYear(2023)} 
                            className={` ${year === 2023 ? " bg-base-primary" : " bg-base-secondary"} h-4 w-4 rounded-full duration-300`}
                        ></button>
                    </div>

                    <hr className={` 
                        ${year === 2023 && " bg-gradient-to-b from-base-primary via-base-secondary to-base-secondary"} 
                        ${year === 2022 && " bg-gradient-to-t from-base-primary via-base-secondary to-base-secondary"} 
                        duration-300 border-0 bg-base-secondary w-[2px] h-20 mr-[7px]`}
                    />

                    <div className="flex flex-row items-center my-[-4px]">
                        <p className={` ${ year === 2022 ? "text-base-primary" : "text-200-primary"} duration-300 font-bold font-markProBold pr-1`}>2022</p>
                        <button 
                            onClick={() => setYear(2022)} 
                            className={` ${year === 2022 ? " bg-base-primary" : " bg-base-secondary"} h-4 w-4 rounded-full duration-300`}
                        ></button>
                    </div>

                    <hr className={` 
                        ${year === 2021 && " bg-gradient-to-t from-base-primary via-base-secondary to-base-secondary"} 
                        ${year === 2022 && " bg-gradient-to-b from-base-primary via-base-secondary to-base-secondary"} 
                        duration-300 border-0 bg-base-secondary w-[2px] h-20 mr-[7px]`}
                    />

                    <div className="flex flex-row items-center my-[-4px]">
                        <p className={` ${ year === 2021 ? "text-base-primary" : "text-200-primary"} duration-300 font-bold font-markProBold pr-1`}>2021</p>
                        <button 
                            onClick={() => setYear(2021)} 
                            className={` ${year === 2021 ? " bg-base-primary" : " bg-base-secondary"} h-4 w-4 rounded-full duration-300`}
                        ></button>
                    </div>

                    <hr className={` 
                        ${year === 2021 && " bg-gradient-to-b from-base-primary via-base-secondary to-base-secondary"} 
                        ${year === 2020 && " bg-gradient-to-t from-base-primary via-base-secondary to-base-secondary"} 
                        duration-300 border-0 bg-base-secondary w-[2px] h-20 mr-[7px]`}
                    />

                    <div className="flex flex-row items-center my-[-4px]">
                        <p className={` ${ year === 2020 ? "text-base-primary" : "text-200-primary"} duration-300 font-bold font-markProBold pr-1`}>2020</p>
                        <button 
                            onClick={() => setYear(2020)} 
                            className={` ${year === 2020 ? " bg-base-primary" : " bg-base-secondary"} h-4 w-4 rounded-full duration-300`}
                        ></button>
                    </div>
                </div>


            </div>
        </section>
    )
}