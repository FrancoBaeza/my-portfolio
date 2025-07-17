import { useIsVisible } from "../../hooks/useIsVisible";
import ProjectCard from "./ProjectCard";
import Icon from "../icons/Icon";
import { ProjectCardMobile } from "./ProjectCardMobile";

export default ({ projectsRef }) => {
    const visible = useIsVisible(projectsRef);

    // Project data
    const projects = [
        {
            title: "Spendings",
            subtitle: "Personal Finance Management",
            description: "A comprehensive personal finance application designed to simplify expense tracking and budget management. Features intuitive data visualization, smart categorization, and real-time spending insights to help users make informed financial decisions.",
            role: "Full-Stack Developer & UI/UX Designer - Built the entire application from concept to deployment, focusing on user experience and modern web development practices.",
            highlights: [
                "Telegram & WhatsApp chatbot integration with OpenAI",
                "Automatic receipt processing and transaction loading",
                "Real-time expense tracking with intelligent categorization",
                "Interactive data visualizations for spending patterns"
            ],
            technologies: [
                { name: "Next.js 15", icon: "next.js", fill: "#000000" },
                { name: "PostgreSQL", icon: "db" },
                { name: "Open AI", icon: "openai" }
            ],
            imageUrl: "/projectPhotos/spendings.jpeg",
            projectUrl: "https://spendings-two.vercel.app/",
            reverse: false
        },
        {
            title: "MatchFloor",
            subtitle: "Real Estate Automation Plugin",
            description: "A comprehensive plugin designed to revolutionize real estate agency operations by automating the entire property viewing scheduling process. From initial inquiry to final confirmation, MatchFloor handles all aspects of appointment management including availability tracking, automated reminders, and seamless calendar integration.",
            role: "Tech Lead - Led a team of 5 developers in building this enterprise-level plugin, overseeing architecture decisions, code quality, and project delivery while contributing to both frontend and backend development.",
            highlights: [
                "Complete automation of property viewing scheduling workflow",
                "WordPress plugin architecture with custom admin dashboard",
                "Advanced calendar management and availability tracking",
                "Automated reminder system with confirmation handling"
            ],
            technologies: [
                { name: "Next.js", icon: "next.js", fill: "#000000" },
                { name: "Nest.js", icon: "node" },
                { name: "MySQL", icon: "db" },
                { name: "WordPress", icon: "wordpress" }
            ],
            imageUrl: "/projectPhotos/matchfloor.png",
            projectUrl: "https://matchfloor.com/",
            reverse: true
        },
        {
            title: "Trae de USA",
            subtitle: "E-commerce Platform",
            description: "A sophisticated drop-shipping e-commerce platform connecting Paraguayan customers with major US retailers. Features integrated payment gateways, international logistics coordination, and a seamless shopping experience for cross-border commerce.",
            role: "Full-Stack Developer - Joined the development team to complete and enhance the platform, implementing new features and payment integrations.",
            highlights: [
                "PayPal and Stripe payment gateway integration",
                "International shipping and logistics management",
                "Complete development lifecycle experience",
                "Cross-border e-commerce specialization"
            ],
            technologies: [
                { name: "PHP", icon: "php" },
                { name: "Laravel", icon: "laravel" }
            ],
            imageUrl: "/projectPhotos/traedeusa.png",
            projectUrl: "https://traedeusa.com/",
            reverse: false
        }
    ];

    return (
        <section
            ref={projectsRef}
            className={`${
                visible
                    ? "translate-y-0 opacity-1 delay-300"
                    : "translate-y-4 opacity-0"
            } duration-500 py-[100px] md:w-[1000px] flex flex-col gap-16`}
        >
            {/* Header */}
            <div className="flex flex-row justify-center items-center gap-3">
                <hr className="border-base-secondary border w-36 md:w-80" />
                <h2 className="text-base-primary text-2xl md:text-3xl tracking-tighter font-bold leading-[80px] font-markProBold">
                    Featured Projects
                </h2>
            </div>

            {/* Projects Grid */}
            <div className="hidden md:flex flex-col gap-24">
                {projects.map((project, index) => (
                    <div key={project.title}>
                        <ProjectCard
                            title={project.title}
                            subtitle={project.subtitle}
                            description={project.description}
                            role={project.role}
                            technologies={project.technologies}
                            imageUrl={project.imageUrl}
                            projectUrl={project.projectUrl}
                            highlights={project.highlights}
                            reverse={project.reverse}
                        />
                        {/* Separator line - not for last item */}
                        {index < projects.length - 1 && (
                            <div className="w-full flex flex-row justify-center items-center gap-6 mt-24">
                                <hr className="border-base-secondary/30 border w-[200px]" />
                                <div className="w-2 h-2 bg-base-secondary rounded-full"></div>
                                <hr className="border-base-secondary/30 border w-[200px]" />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Mobile View */}
            <div className="flex md:hidden flex-col gap-8">
                {projects.map((project, index) => (
                    <ProjectCardMobile
                        key={project.title}
                        isLast={index === projects.length - 1}
                        project={project}
                    />
                ))}
            </div>
        </section>
    );
};
