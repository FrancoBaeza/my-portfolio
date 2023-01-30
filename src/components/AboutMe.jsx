import { useState, useRef } from "react"

import { useIsVisible } from "../hooks/useIsVisible"

export default () => {
    const aboutMeRef = useRef(null)
    const visible = useIsVisible(aboutMeRef)
    const [imgHover, setImgHover] = useState(false)

    return (
        <section  className={` ${visible ? "translate-y-0 opacity-1 delay-300" : "translate-y-4 opacity-0"}  duration-500 py-[100px] h-screen w-[1000px] flex flex-col gap-7`}>
            {/* title */}
            <div className="flex flex-row justify-center items-center gap-3">
                <hr className=" border-base-secondary border w-44"/>
                <h2 className={`text-base-primary text-3xl tracking-tighter font-bold  leading-[80px] font-markProBold`} >About Me</h2>
                <hr className=" border-base-secondary border w-44"/>
            </div>

            {/* body */}
            <div ref={aboutMeRef} className="flex flex-col">
                <div className="flex flex-row h-[500px]">
                    <div className="w-2/5 h-[350px] flex justify-center items-center relative">
                        <span className={`border-t-2 border-l-2 border-base-secondary rounded-tl-md h-[50px] w-[150px] absolute z-50 duration-[0.5s] ${imgHover ? "top-3 left-9" : "top-2 left-8"}`}></span>

                        <img 
                            onMouseEnter={() => setImgHover(true)} 
                            onMouseLeave={() => setImgHover(false)} 
                            src="https://picsum.photos/300" 
                            alt="profile" 
                            className={`rounded-md duration-[0.5s] ${imgHover ? "grayscale-0" : "grayscale scale-[.99]"}`}
                        />

                        <span className={`border-b-2 border-r-2 border-base-secondary rounded-br-md h-[50px] w-[150px] absolute z-50 duration-[0.5s] ${imgHover ? "bottom-3 right-9" : "bottom-2 right-8"}`}></span>
                    </div>
                    <div className="w-3/5 flex flex-col gap-4">
                        <p className="text-400-primary font-markPro tracking-wide leading-7 w-5/6"> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea <span className="text-base-secondary">commodo consequat</span>.
                            
                            
                        </p>
                        <p className="text-400-primary font-markPro tracking-wide leading-7 w-5/6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua.
                        </p>
                        <p className="text-400-primary font-markPro tracking-wide leading-7 w-5/6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor <span className="text-base-secondary">incididunt ut labore</span> 
                            et dolore magna
                            aliqua.
                        </p>
                    </div>

                </div>
            </div>
            
        </section>
    )
} 