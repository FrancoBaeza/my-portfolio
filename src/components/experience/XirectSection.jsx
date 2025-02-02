import Icon from "../icons/SocialIcon";

export default ({ chg }) => {
    return (
        <div
            className={` ${
                chg ? "opacity-1" : "opacity-0"
            } flex flex-col duration-300 gap-7 `}
        >
            <div>
                <h3 className=" text font-markPro font-semibold text-base-primary">
                    August 2023 - June 2024
                </h3>
                <div className="flex flex-col gap-3">
                    <span className="flex gap-3">
                        <Icon
                            icon="triangle"
                            className={`h-2 w-2 fill-base-secondary rotate-90 mt-2 ml-2`}
                        />
                        <p className="text-400-primary md:w-[600px] font-markPro tracking-wide mt-1 leading-5">
                            I continued my professional career at Xirect as a
                            full stack developer using the{" "}
                            <span className="text-base-secondary">MERN</span>{" "}
                            stack. My primary responsibility was to assist in
                            the design and development of a platform for
                            capturing and organizing business leads.
                        </p>
                    </span>
                    <span className="flex gap-3">
                        <Icon
                            icon="triangle"
                            className={`h-2 w-2 fill-base-secondary rotate-90 mt-2 ml-2`}
                        />
                        <p className="text-400-primary md:w-[600px] font-markPro tracking-wide mt-1 leading-5">
                            Additionally, I led a small team in the development
                            of an embedded{" "}
                            <span className="text-base-secondary">
                                LMS (Learning Management System)
                            </span>
                            tailored to meet the specific needs of the client.
                        </p>
                    </span>

                    <span className="flex gap-3">
                        <Icon
                            icon="triangle"
                            className={`h-2 w-2 fill-base-secondary rotate-90 mt-2 ml-2`}
                        />
                        <p className="text-400-primary md:w-[600px] font-markPro tracking-wide mt-1 leading-5">
                            This experience allowed me to enhance my project
                            planning and management skills, learning how to
                            break down, organize, and prioritize objectives into
                            actionable tasks. By adopting this approach, we
                            successfully met the project's deadlines..
                        </p>
                    </span>
                </div>
            </div>
        </div>
    );
};
