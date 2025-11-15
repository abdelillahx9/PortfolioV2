interface SkillCardProps {
  icon: string;
  title: string;
  proficiency: number;
}

const SkillCard = ({ icon, title, proficiency }: SkillCardProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white dark:bg-card-dark p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-accent/50">
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-4xl text-accent">{icon}</span>
        <h3 className="text-xl font-bold text-text-light dark:text-text-dark">{title}</h3>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span className="text-text-secondary-light dark:text-text-secondary-dark">Proficiency</span>
          <span className="font-semibold text-text-light dark:text-text-dark">{proficiency}%</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${proficiency}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;