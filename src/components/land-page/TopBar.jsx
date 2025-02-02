import { Menu } from "lucide-react";

export default ({
    animationHeader,
    aboutMeRef,
    experienceRef,
    projectsRef,
    contactRef,
    scrollTo,
    isTop,
    scrollDir,
}) => {
    return (
        <div
            className={` ${!isTop && "shadow-xl"} ${
                scrollDir === "down" ? "-translate-y-24" : "translate-y-0"
            } duration-300 backdrop-blur-sm fixed top-0 left-0 w-full h-[80px] z-50 flex flex-row justify-between items-center pl-[20px] pr-[20px] md:pr-[100px]`}
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

            {/* PC */}
            <div className="hidden md:flex flex-row gap-5 font-mono text-base-primary ">
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

            {/* MOBILE */}
            <div className=" md:hidden flex">
                <button
                    onClick={() => scrollTo(aboutMeRef)}
                    className="hover:text-base-secondary duration-200"
                >
                    <Menu color="red" />
                </button>
            </div>
        </div>
    );
};
