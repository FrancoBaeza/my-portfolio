import { useEffect, useState, useRef } from "react";

import SocialIcon from "./icons/SocialIcon";
import Icon from "./icons/Icon";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import { useScrollDirection } from "../hooks/useScrollDirection";

export default () => {
    const iconsClasses =
        " w-[25px] hover:fill-base-secondary hover:-translate-y-1 duration-200 fill-base-primary cursor-pointer";

    const [contactModal, setContactModal] = useState(false);
    const [active, setActive] = useState(false);
    const [scrollDir, isTop] = useScrollDirection();

    const aboutMeRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const [wip, setWip] = useState(true);

    useEffect(() => {
        setActive(true);
    }, []);

    useEffect(() => {
        if (contactModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [contactModal]);

    const animationFirstSection = `duration-[0.5s] ${
        active ? "translate-y-0 opacity-1" : "translate-y-3 opacity-0"
    }`;
    const animationHeader = `duration-[0.6s] ${
        active ? "translate-y-0 opacity-1" : "-translate-y-6 opacity-0"
    }`;
    const animationSideBars = `duration-[0.6s] ${
        active ? "opacity-1" : "opacity-0"
    }`;

    const scrollTo = (ref) => {
        if (ref && ref.current /* + other conditions */) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className=" bg-base-bg">
            {/* topbar */}
            <div
                className={` ${!isTop && "shadow-xl"} ${
                    scrollDir === "down" ? "-translate-y-24" : "translate-y-0"
                } duration-300 backdrop-blur-sm fixed top-0 left-0 w-full h-[80px] z-50 flex flex-row justify-between items-center pl-[20px] pr-[100px]`}
            >
                {/* logo */}
                <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[50px] h-[50px] fill-base-primary"
                    viewBox="0 0 151.000000 177.000000"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g
                        transform="translate(0.000000,177.000000) scale(0.100000,-0.100000)"
                        stroke="none"
                    >
                        <path
                            d="M794 1638 c-20 -40 -51 -100 -69 -133 -33 -61 -109 -207 -230 -440
              -37 -71 -89 -170 -115 -220 -158 -300 -199 -383 -193 -389 3 -3 75 -6 160 -6
              96 0 153 -4 153 -10 0 -6 -40 -91 -90 -190 -49 -99 -90 -182 -90 -185 0 -3 34
              -5 75 -5 l75 0 96 195 97 195 394 0 c216 0 393 2 393 5 0 10 -453 900 -464
              913 -10 10 -55 -74 -212 -385 l-199 -398 -79 -3 c-110 -4 -111 -3 -77 60 15
              29 58 112 96 183 37 72 91 175 120 230 64 123 168 322 225 432 l43 82 -28 66
              c-16 36 -32 68 -36 71 -5 3 -25 -28 -45 -68z m315 -798 c66 -132 121 -244 121
              -250 0 -6 -87 -10 -250 -10 -137 0 -250 2 -250 4 0 13 243 496 250 496 4 0 62
              -108 129 -240z"
                        />
                    </g>
                </svg>

                <div className="flex flex-row gap-5 font-mono text-base-primary">
                    <span className={`delay-[0.3s] ${animationHeader}`}>
                        <button
                            onClick={() => scrollTo(aboutMeRef)}
                            className=" hover:text-base-secondary duration-200"
                        >
                            <span className=" mr-[3px] text-base-secondary">
                                1.
                            </span>
                            About
                        </button>
                    </span>

                    <span className={`delay-[0.4s] ${animationHeader}`}>
                        <button
                            onClick={() => scrollTo(experienceRef)}
                            className=" hover:text-base-secondary duration-200"
                        >
                            <span className=" mr-[3px] text-base-secondary">
                                2.
                            </span>
                            Experience
                        </button>
                    </span>

                    <span className={`delay-[0.5s] ${animationHeader}`}>
                        <button
                            onClick={() => scrollTo(projectsRef)}
                            className=" hover:text-base-secondary duration-200"
                        >
                            <span className=" mr-[3px] text-base-secondary">
                                3.
                            </span>
                            Projects
                        </button>
                    </span>

                    <span className={`delay-[0.6s] ${animationHeader}`}>
                        <button
                            onClick={() => scrollTo(contactRef)}
                            className=" hover:text-base-secondary duration-200"
                        >
                            <span className=" mr-[3px] text-base-secondary">
                                4.
                            </span>
                            Contact
                        </button>
                    </span>
                </div>
            </div>

            {/* left fixed side */}
            <div className="fixed left-0 bottom-0 z-50 w-[100px] flex flex-col items-center gap-4">
                <div className=" flex flex-col gap-4">
                    <span className={`${animationSideBars} delay-[2.6s]`}>
                        <SocialIcon
                            className={iconsClasses}
                            url="https://github.com/FrancoBaeza"
                            icon="github"
                        />
                    </span>
                    <span className={`${animationSideBars} delay-[2.4s]`}>
                        <SocialIcon
                            className={iconsClasses}
                            url="https://www.linkedin.com/in/franco-baezagraf-201083264/"
                            icon="linkedin"
                        />
                    </span>
                    <span className={`${animationSideBars} delay-[2.2s]`}>
                        <SocialIcon
                            className={iconsClasses}
                            url="https://www.instagram.com/franbaezag/"
                            icon="instagram"
                        />
                    </span>
                    <span className={`${animationSideBars} delay-[2.0s]`}>
                        <SocialIcon
                            className={iconsClasses}
                            url="https://wa.me/5492236364409"
                            icon="wsp"
                        />
                    </span>
                </div>
                <span className="w-[1px] h-40  border-r-[2px] border-base-secondary "></span>
            </div>

            {/* center main section */}
            <div className="px-[100px]  flex flex-col items-center">
                {/* first seccion */}
                <section className="h-screen justify-center w-[1000px] gap-5 flex flex-col">
                    <p
                        className={` delay-[1.2s] ${animationFirstSection} font-medium text-lg font-mono tracking-tighter text-base-secondary `}
                    >
                        Hi! I'm <span className="font-bold ">Franco</span>
                    </p>

                    <div>
                        <h1
                            className={`delay-[1.3s] ${animationFirstSection} text-base-primary text-7xl tracking-tighter font-bold w-[70%] leading-[80px] font-markProBold`}
                        >
                            Just a guy
                        </h1>
                        <h2
                            className={`delay-[1.4s] ${animationFirstSection} text-base-primary text-7xl tracking-tighter font-bold w-[70%] leading-[80px] font-markProBold`}
                        >
                            who loves to{" "}
                            <span className=" text-base-secondary">code</span>
                        </h2>
                    </div>

                    <p
                        className={`delay-[1.5s] ${animationFirstSection} text-400-primary w-[600px] font-markPro tracking-wide`}
                    >
                        I'm an advanced systems engineer student at the
                        Adventist River Plate Univerity in Argentina. I'm
                        passionate about web development and I'm always looking
                        for new challenges.
                        <br />
                        Currently I'm working at{" "}
                        <a
                            href="https://miportafoliodigital.com/"
                            className="text-base-secondary hover:text-400-primary duration-200"
                        >
                            Mi Portafolio Digital
                        </a>{" "}
                        as a web developer.
                    </p>

                    <span className={`delay-[1.6s] ${animationFirstSection}`}>
                        <button
                            className={` text-400-primary hover:text-base-primary hover:bg-base-secondary/30 duration-300 font-mono self-start mt-10 p-3 border-base-secondary border-2 rounded`}
                        >
                            Check out my resume!
                        </button>
                    </span>
                </section>

                {/* 1. about me */}
                <AboutMe aboutMeRef={aboutMeRef} />

                {/* 2. experience */}
                <Experience experienceRef={experienceRef} />

                {/* 3. projects */}
                <Projects projectsRef={projectsRef} />

                {/* 4. contact */}
                <Contact
                    contactRef={contactRef}
                    setContactModal={setContactModal}
                />

                {/* footer */}
                <div className=" my-5 text-center">
                    <p className="text-300-primary text-sm font-mono tracking-[2px]">
                        Build by Franco Baeza
                    </p>
                    <p className="text-300-primary text-sm font-mono tracking-[2px]">
                        <SocialIcon
                            icon={"registered"}
                            className=" inline  fill-300-primary w-[13px]"
                        />{" "}
                        2023
                    </p>
                </div>
            </div>

            {/* right fixed side */}
            <div className="fixed right-0 top-0 z-50 w-[100px] flex flex-col items-center gap-4">
                <span className=" border-base-secondary border-[2px] !border-t-0 rounded-b-md w-6 h-44"></span>
                <a
                    className={`${animationSideBars} delay-[3s] vertical-writing text-base-primary text-sm tracking-[2px] font-markPro hover:text-base-secondary duration-200`}
                    href=""
                >
                    francobaezagraf@gmail.com
                </a>
            </div>

            {/* development message */}
            {wip && (
                <div className="fixed bottom-0 h-10 bg-red-500 w-screen z-[1000] flex justify-center items-center text-slate-100">
                    This is a work in progress! I'm still working on it.
                    <svg
                        className="w-5 fill-base-primary cursor-pointer fixed right-3"
                        onClick={() => setWip(false)}
                        clipRule="evenodd"
                        fillRule="evenodd"
                        strokeLinejoin="round"
                        strokeMiterlimit="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
                    </svg>
                </div>
            )}

            {/* modal */}
            {contactModal && (
                <div className=" fixed top-0 left-0 right-0 bottom-0 w-screen h-screen z-50 flex justify-center items-center backdrop-brightness-75">
                    <div className="w-[400px] bg-base-bg border-2 border-base-secondary rounded flex flex-col gap-10 items-center p-8 relative">
                        <h3 className=" text-base-primary text-2xl font-bold  font-markProBold ">
                            How do you want to talk?
                        </h3>
                        <div className="flex flex-col mb-5 gap-6">
                            <a
                                href="https://wa.me/5492236364409"
                                className={` cursor-pointer w-44 flex flex-row justify-center gap-2 text-400-primary hover:text-base-primary hover:bg-base-secondary/30 duration-300 font-mono p-3 border-base-secondary border-2 rounded`}
                            >
                                <Icon
                                    icon="wsp"
                                    className={` fill-400-primary`}
                                />
                                Message me!
                            </a>
                            <a
                                className={`cursor-pointer w-44 flex flex-row justify-center gap-2 text-400-primary hover:text-base-primary hover:bg-base-secondary/30 duration-300 font-mono p-3 border-base-secondary border-2 rounded`}
                            >
                                <Icon
                                    icon="mail"
                                    className={`w-6 fill-400-primary`}
                                />
                                Email me!
                            </a>
                        </div>
                        <span className=" absolute right-2 top-2 cursor-pointer" onClick={() => setContactModal(false)}>
                            <Icon icon="close" className={`w-5 fill-base-primary`}/>
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};
