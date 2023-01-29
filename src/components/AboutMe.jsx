export default () => {
    return (
        <section className=" py-[100px] h-screen w-[1000px]">
            <div className="flex flex-row justify-center items-center gap-3">
                <hr className=" border-base-secondary h-1 w-44"/>
                <h2 className={`text-base-primary text-3xl tracking-tighter font-bold  leading-[80px] font-markProBold`} >About Me</h2>
                <hr className=" border-base-secondary h-1 w-44"/>
            </div>

            <div className=" flex flex-col">
                <div className="flex flex-row h-[500px]">
                    <div className="w-2/5 h-[350px] flex justify-center items-center realtive">
                        <span className=" border-t-2 border-l-2 border-base-secondary rounded-tl h-[50px] w-[150px] absolute"></span>
                        <img src="https://picsum.photos/300" alt="profile" className="rounded-md"/>
                    </div>
                    <div className="w-3/5">
                        <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                </div>
            </div>
            
        </section>
    )
} 