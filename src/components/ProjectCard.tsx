interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  linkText: string;
  linkUrl?: string;
}

const ProjectCard = ({ title, description, imageUrl, technologies, linkText, linkUrl }: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-4 bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-200 dark:border-slate-800">
      <div className="overflow-hidden">
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover transition-transform duration-300 ease-in-out hover:scale-105"
          style={{ backgroundImage: `url("${imageUrl}")` }}
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-normal">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal mt-1 mb-4 flex-grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <div key={index} className="flex h-6 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-3">
              <p className="text-primary text-xs font-medium leading-normal">{tech}</p>
            </div>
          ))}
        </div>
        <a
          className="inline-flex items-center justify-center gap-2 mt-auto text-sm font-bold text-primary hover:underline"
          href={linkUrl || "#"}
        >
          {linkText} <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;