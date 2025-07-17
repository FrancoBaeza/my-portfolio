import Icon from "../icons/Icon";

const ProjectCard = ({ 
  title, 
  subtitle, 
  description, 
  role, 
  technologies, 
  imageUrl, 
  projectUrl, 
  highlights,
  reverse = false 
}) => {
  return (
    <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      {/* Image Section */}
      <div className="lg:w-1/2 w-full">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-base-secondary/20 to-transparent rounded-lg transform group-hover:scale-105 transition-transform duration-300 -z-10"></div>
          <img 
            src={imageUrl} 
            alt={`${title} project screenshot`}
            className="w-full max-h-[400px] object-contain rounded-lg shadow-lg border border-base-secondary/20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end justify-center pb-6">
            <a 
              href={projectUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 bg-base-secondary text-base-bg font-markProBold rounded-full hover:bg-400-secondary transition-colors duration-200 transform translate-y-4 group-hover:translate-y-0"
            >
              View Project
            </a>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="lg:w-1/2 w-full space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-base-secondary font-mono text-sm">
            <span className="w-12 h-px bg-base-secondary"></span>
            Featured Project
          </div>
          <h3 className="text-3xl font-markProBold text-base-primary">{title}</h3>
          <p className="text-lg text-400-primary font-markPro">{subtitle}</p>
        </div>

        {/* Description Card */}
        <div className="bg-base-bg/50 backdrop-blur-sm border border-base-secondary/20 rounded-lg p-6 shadow-lg">
          <p className="text-400-primary font-markPro leading-relaxed mb-4">
            {description}
          </p>
          
          {/* Role */}
          <div className="flex items-start gap-3 mb-4">
            <Icon icon="user" className="w-5 h-5 fill-base-secondary mt-0.5" />
            <div>
              <span className="text-base-secondary font-markProBold text-sm">My Role:</span>
              <p className="text-400-primary font-markPro text-sm">{role}</p>
            </div>
          </div>

          {/* Highlights */}
          {highlights && highlights.length > 0 && (
            <div className="space-y-2">
              <span className="text-base-secondary font-markProBold text-sm">Key Highlights:</span>
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-base-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-400-primary font-markPro text-sm leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Technologies */}
        <div className="space-y-3">
          <span className="text-base-secondary font-markProBold text-sm">Built with:</span>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-center gap-2 bg-base-bg/70 border border-base-secondary/30 px-3 py-2 rounded-full">
                <Icon icon={tech.icon} className="w-4 h-4 fill-base-secondary" />
                <span className="text-base-primary font-markPro text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Link Button */}
        <div className="pt-2">
          <a 
            href={projectUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base-secondary hover:text-400-secondary transition-colors duration-200 font-mono text-sm group"
          >
            <Icon icon="world" className="w-4 h-4 fill-current" />
            View Live Project
            <span className="text-base-secondary group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 