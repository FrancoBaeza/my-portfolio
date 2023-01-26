import { useEffect, useRef } from "react";

import Icon from "./icons/SocialIcon";
import { useScrollDirection } from "../hooks/useScrollDirection";

export default () => {
  const iconsClasses =
    " w-[25px] hover:fill-base-secondary hover:-translate-y-1 duration-200 fill-base-primary cursor-pointer";

  const [scrollDir, isTop] = useScrollDirection();

  console.log(useScrollDirection());
  return (
    <div className=" bg-base-bg">
      {/* topbar */}
      <div
        className={` ${!isTop && "shadow-xl"} ${
          scrollDir === "down" ? "-translate-y-24" : "translate-y-0"
        } duration-300 backdrop-blur-sm fixed top-0 left-0 w-full h-[90px] z-50 flex flex-row justify-between items-center pl-[20px] pr-[100px]`}
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
          <a
            href=""
            className=" hover:text-base-secondary duration-200"
          >
            <span className=" mr-[3px] text-base-secondary">1.</span>
            About
          </a>
          <a
            href=""
            className=" hover:text-base-secondary duration-200"
          >
            <span className=" mr-[3px] text-base-secondary">2.</span>
            Experience
          </a>
          <a
            href=""
            className=" hover:text-base-secondary duration-200"
          >
            <span className=" mr-[3px] text-base-secondary">3.</span>
            Projects
          </a>
          <a
            href=""
            className=" hover:text-base-secondary duration-200"
          >
            <span className=" mr-[3px] text-base-secondary">4.</span>
            Contact
          </a>
        </div>
      </div>

      {/* left fixed side */}
      <div className="fixed left-0 bottom-0 z-50 w-[100px] flex flex-col items-center gap-4">
        <div className=" flex flex-col gap-4">
          <Icon className={iconsClasses} url="" icon="github" />
          <Icon className={iconsClasses} url="" icon="linkedin" />
          <Icon className={iconsClasses} url="" icon="instagram" />
          <Icon className={iconsClasses} url="" icon="mail" />
        </div>
        <span className="w-[1px] h-40  border-r-[2px] border-base-secondary "></span>
      </div>

      {/* center main section */}
      <div className="px-[100px] pt-[100px] h-[3000px] ">
        {/* first seccion */}
        <section className=" w-full flex flex-col">
          <section className="flex flex-col gap-3 text-slate-200">
            <p className=" font-medium text-lg font-mono tracking-tighter text-base-secondary">
              Hi! I'm <span className="font-bold ">Franco</span>.
            </p>
            <h1 className="text-base-primary text-7xl tracking-tighter font-bold w-[70%] leading-[80px] font-markProBold">
              I turn your ideas into{" "}
              <span className=" text-base-secondary">reality</span>.
            </h1>
            <p className="text-base-primary w-[600px] font-markPro">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </section>
        </section>
      </div>

      {/* right fixed side */}
      <div className="fixed right-0 top-0 z-50 w-[100px] flex flex-col items-center gap-4">
        <span className=" border-base-secondary border-[2px] !border-t-0 rounded-b-md w-6 h-44"></span>
        <a
          className="vertical-writing text-base-primary text-sm tracking-[2px] font-markPro hover:text-base-secondary duration-200"
          href=""
        >
          francobaezagraf@gmail.com
        </a>
      </div>
    </div>
  );
};
