import { useIsVisible } from "../../hooks/useIsVisible";
import ProjectCard from "./ProjectCard";

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
                "Real-time expense tracking with intelligent categorization",
                "Interactive data visualizations for spending patterns",
                "Modern responsive design optimized for all devices",
                "Secure data handling with PostgreSQL backend"
            ],
            technologies: [
                { name: "Next.js 15", icon: "react" },
                { name: "PostgreSQL", icon: "db" }
            ],
            imageUrl: "/projectPhotos/spendings.jpeg",
            projectUrl: "https://spendings-two.vercel.app/",
            reverse: false
        },
        {
            title: "Turnera",
            subtitle: "Client Management System",
            description: "A comprehensive appointment scheduling and client management system designed for professionals. Includes automated WhatsApp reminders, calendar integration, and a user-friendly dashboard for managing bookings and client relationships.",
            role: "Backend Lead Developer - Focused on system architecture, database design, and API development using the MERN stack.",
            highlights: [
                "WhatsApp integration for automatic appointment reminders",
                "Real-time appointment management and scheduling",
                "Scalable MERN stack architecture",
                "Professional practice program achievement"
            ],
            technologies: [
                { name: "React", icon: "react" },
                { name: "Node.js", icon: "node" },
                { name: "MongoDB", icon: "mongo" },
                { name: "Express", icon: "express" }
            ],
            imageUrl: "/projectPhotos/turnera.png",
            projectUrl: "https://turnera-frontend.vercel.app",
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
            <div className="flex md:hidden flex-col items-center gap-6">
                <div className="bg-base-bg/50 backdrop-blur-sm border border-base-secondary/20 rounded-lg p-6 shadow-lg">
                    <p className="text-400-primary font-markPro tracking-wide leading-7 text-center">
                        I'm currently optimizing the mobile experience for this section. 
                        Please visit on desktop to explore my projects in detail.
                    </p>
                </div>
                <p className="text-300-primary font-markPro text-sm text-center">
                    Mobile portfolio coming soon! 📱
                </p>
            </div>
        </section>
    );
};
