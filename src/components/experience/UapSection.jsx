import Icon from "../icons/SocialIcon";

export default ({ chg }) => {
    return (
        <div className={` ${chg ? "opacity-1" : "opacity-0"} duration-300 `}>
            <h3 className=" text font-markPro font-semibold text-base-primary">
                May 2023 - Today
            </h3>
            <div className="flex flex-col gap-3">
                <span className="flex gap-3">
                    <Icon
                        icon="triangle"
                        className={`h-2 w-2 fill-base-secondary rotate-90 mt-2 ml-2`}
                    />
                    <p className="text-400-primary md:w-[600px] font-markPro tracking-wide mt-1 leading-5">
                        I joined the development team at Universidad Adventista
                        del Plata as a full stack developer, working with
                        technologies such as <span className="text-base-secondary">PHP</span> and <span className="text-base-secondary">Ruby on Rails</span>.
                    </p>
                </span>

                <span className="flex gap-3">
                    <Icon
                        icon="triangle"
                        className={`h-2 w-2 fill-base-secondary rotate-90 mt-2 ml-2`}
                    />
                    <p className="text-400-primary md:w-[600px] font-markPro tracking-wide mt-1 leading-5">
                        My work at this institution is diverse and includes
                        activities such as integrating external systems with our
                        databases to optimize information collection and access.
                    </p>
                </span>

                <span className="flex gap-3">
                    <Icon
                        icon="triangle"
                        className={`h-2 w-2 fill-base-secondary rotate-90 mt-2 ml-2`}
                    />
                    <p className="text-400-primary md:w-[600px] font-markPro tracking-wide mt-1 leading-5">
                        One of my key responsibilities has been updating and
                        modernizing various legacy systems, ensuring compliance
                        with the latest security standards and enhancing their
                        compatibility with current requirements.
                    </p>
                </span>

                <span className="flex gap-3">
                    <Icon
                        icon="triangle"
                        className={`h-2 w-2 fill-base-secondary rotate-90 mt-2 ml-2`}
                    />
                    <p className="text-400-primary md:w-[600px] font-markPro tracking-wide mt-1 leading-5">
                        Additionally, I actively contribute to the <span className="text-base-secondary">development
                        of internal applications</span> aimed at streamlining and
                        improving workflows for other departments.
                    </p>
                </span>
            </div>
        </div>
    );
};
