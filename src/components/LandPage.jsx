import GitHub from "./icons/GitHub";

export default () => {
  const iconsClasses =
    "w-[25px] hover:-translate-y-1 duration-200 fill-base-primary cursor-pointer";

  return (
    <div className=" bg-cyan-900 h-screen">
      {/* left fixed side */}
      <div className="fixed left-0 bottom-0 z-100 w-[100px] flex flex-col items-center gap-4">
        <div className="">
          <GitHub className={iconsClasses} />
        </div>
        <span className="w-[1px] h-48 bg-base-secondary "></span>
      </div>
      <div className="px-[100px] h-[3000px]">
        {/* main central seccion */}
        <section className=" pt-[100px] w-full flex flex-col">
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
    </div>
  );
};
