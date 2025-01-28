import Icon from "../icons/SocialIcon";

export default ({ chg }) => {
    return (
        <div className={` ${chg ? "opacity-1" : "opacity-0"} duration-300 `}>
            <h3 className=" text font-markPro font-semibold text-base-primary">
                October 2022 - August 2023
            </h3>
            <div className="flex flex-col gap-3">
                <span className="flex gap-3">
                    <Icon
                        icon="triangle"
                        className={`h-2 w-2 fill-base-secondary rotate-90 mt-2 ml-2`}
                    />
                    <p className="text-400-primary w-[600px] font-markPro tracking-wide mt-1 leading-5">
                        I began my professional career at Mi Portafolio Digital
                        as a full stack  <span className="text-base-secondary">PHP and Laravel</span> developer. I joined a growing team
                        with the goal of completing the development of a drop
                        shipping e-commerce platform, <a href="https://traedeusa.com/" className="text-base-secondary">traedeusa.com</a>.
                    </p>
                </span>

                <span className="flex gap-3">
                    <Icon
                        icon="triangle"
                        className={`h-2 w-2 fill-base-secondary rotate-90 mt-2 ml-2`}
                    />
                    <p className="text-400-primary w-[600px] font-markPro tracking-wide mt-1 leading-5">
                        During this experience, I gained a deep understanding of
                        the entire development lifecycle, from planning to
                        implementation, as well as the incorporation of new
                        features based on client requirements.
                    </p>
                </span>

                <span className="flex gap-3">
                    <Icon
                        icon="triangle"
                        className={`h-2 w-2 fill-base-secondary rotate-90 mt-2 ml-2`}
                    />
                    <p className="text-400-primary w-[600px] font-markPro tracking-wide mt-1 leading-5">
                        One of the biggest challenges I faced was integrating
                        the platform with multiple payment gateways, such as
                        Stripe, PayPal, and local solutions. This allowed me to
                        refine my skills in  <span className="text-base-secondary">API integration</span> and develop
                        solutions that optimized both the user experience and
                        system operations.
                    </p>
                </span>
            </div>
        </div>
    );
};
