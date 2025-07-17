import { useState } from "react";
import Icon from "../icons/Icon";

export const ProjectCardMobile = ({ project, isLast }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="space-y-6">
            {/* Project Card */}
            <div className="bg-base-bg/30 backdrop-blur-sm border border-base-secondary/60 rounded-2xl overflow-hidden shadow-xl">
                {/* Project Image */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-base-secondary/10 to-transparent rounded-t-2xl"></div>
                    <img
                        src={project.imageUrl}
                        alt={`${project.title} project screenshot`}
                        className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <a
                            href={project.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-base-secondary text-base-bg font-markProBold rounded-full hover:bg-400-secondary transition-colors duration-200 transform translate-y-2 group-hover:translate-y-0"
                        >
                            View Project
                        </a>
                    </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-base-secondary font-mono text-xs">
                            <span className="w-8 h-px bg-base-secondary"></span>
                            Featured Project
                        </div>
                        <h3 className="text-2xl font-markProBold text-base-primary">
                            {project.title}
                        </h3>
                        <p className="text-base text-400-primary font-markPro">
                            {project.subtitle}
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-400-primary font-markPro text-sm leading-relaxed">
                        {project.description}
                    </p>

                    {/* Expandable Content */}
                    <div className="space-y-3">
                        {/* Expand/Collapse Button */}
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="w-full flex items-center justify-between p-3 bg-base-bg/50 rounded-lg border-2 border-base-secondary/70 hover:bg-base-bg/70 transition-colors duration-200 group"
                        >
                            <span className="text-base-secondary font-markProBold text-sm">
                                View Details
                            </span>
                            <Icon
                                icon="chevron-down"
                                className={`w-5 h-5 stroke-base-secondary transition-transform duration-300 ${
                                    isExpanded ? "rotate-180" : ""
                                }`}
                            />
                        </button>

                        {/* Expandable Content */}
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                        >
                            <div className="space-y-4 pt-2">
                                {/* Role */}
                                <div className="flex items-start gap-3 p-2 bg-base-bg/50 rounded-lg border border-base-secondary/30">
                                    <Icon
                                        icon="user"
                                        className="w-4 h-4 fill-base-secondary mt-0.5 flex-shrink-0"
                                    />
                                    <div>
                                        <span className="text-base-secondary font-markProBold text-sm">
                                            My Role:
                                        </span>
                                        <p className="text-400-primary font-markPro text-sm leading-relaxed">
                                            {project.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Highlights */}
                                {project.highlights && project.highlights.length > 0 && (
                                    <div className="space-y-3">
                                        <span className="text-base-secondary font-markProBold text-sm">
                                            Key Highlights:
                                        </span>
                                        <div className="space-y-2">
                                            {project.highlights.map((highlight, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-start gap-3 p-2 bg-base-bg/30 rounded-lg border border-base-secondary/30"
                                                >
                                                    <div className="w-1.5 h-1.5 bg-base-secondary rounded-full mt-1.5 flex-shrink-0"></div>
                                                    <p className="text-400-primary font-markPro text-sm leading-relaxed">
                                                        {highlight}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Technologies */}
                                <div className="space-y-3">
                                    <span className="text-base-secondary font-markProBold text-sm">
                                        Built with:
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-2 bg-base-bg/70 border border-base-secondary/30 px-3 py-2 rounded-full"
                                            >
                                                <Icon
                                                    icon={tech.icon}
                                                    className={`w-3 h-3 ${
                                                        tech.fill
                                                            ? `fill-${tech.fill}`
                                                            : "fill-base-secondary"
                                                    }`}
                                                />
                                                <span className="text-base-primary font-markPro text-sm">
                                                    {tech.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Project Link */}
                                <div className="pt-2">
                                    <a
                                        href={project.projectUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-base-secondary hover:text-400-secondary transition-colors duration-200 font-mono text-xs group"
                                    >
                                        <Icon
                                            icon="world"
                                            className="w-3 h-3 fill-current"
                                        />
                                        View Live Project
                                        <span className="text-base-secondary group-hover:translate-x-1 transition-transform duration-200">
                                            →
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Separator - not for last item */}
            {!isLast && (
                <div className="flex justify-center">
                    <div className="w-16 h-1 bg-gradient-to-r from-transparent via-base-secondary/30 to-transparent rounded-full"></div>
                </div>
            )}
        </div>
    );
};
