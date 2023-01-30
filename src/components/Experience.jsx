export default () => {
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
                        <p className=" text-base-primary  font-bold font-markProBold pr-1">2023</p>
                        <button className=" h-4 w-4 rounded-full bg-base-secondary"></button>
                    </div>

                    <hr className=" border-base-secondary border w-0 h-20 mr-[7px]"/>

                    <div className="flex flex-row items-center my-[-4px]">
                        <p className=" text-base-primary  font-bold font-markProBold pr-1">2022</p>
                        <button className=" h-4 w-4 rounded-full bg-base-secondary"></button>
                    </div>

                    <hr className=" border-base-secondary border w-0 h-20 mr-[7px]"/>

                    <div className="flex flex-row items-center my-[-4px]">
                        <p className=" text-base-primary  font-bold font-markProBold pr-1">2021</p>
                        <button className=" h-4 w-4 rounded-full bg-base-secondary"></button>
                    </div>

                    <hr className=" border-base-secondary border w-0 h-20 mr-[7px]"/>

                    <div className="flex flex-row items-center my-[-4px]">
                        <p className=" text-base-primary  font-bold font-markProBold pr-1">2020</p>
                        <button className=" h-4 w-4 rounded-full bg-base-secondary"></button>
                    </div>
                </div>


            </div>
        </section>
    )
}