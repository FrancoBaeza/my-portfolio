export default () => {
  return (
    <div className=" bg-cyan-900 h-screen">
      <div className="px-[100px]">
        {/* main central seccion */}
        <section className=" pt-[100px] w-full flex flex-col">
          <section className="flex flex-col gap-3 text-slate-200">
            <p className=" font-medium text-lg font-mono tracking-tighter text-[#F1962E]">
              Hi! I'm <span className="font-bold ">Franco</span>.
            </p>
            <h1 className="text-[#C7F8FF] text-7xl tracking-tighter font-bold w-[70%] leading-[80px] font-markProBold">
              I turn your ideas into reality.
            </h1>
            <p className="text-[#C7F8FF] w-[600px] font-markPro">
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
