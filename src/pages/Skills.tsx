import SkillCard from '../components/SkillCard';

const Skills = () => {
  const skills = [
    { icon: 'html', title: 'HTML', proficiency: 95 },
    { icon: 'css', title: 'CSS', proficiency: 90 },
    { icon: 'javascript', title: 'JavaScript', proficiency: 90 },
    { icon: 'developer_mode_tv', title: 'React', proficiency: 90 },
    { icon: 'data_object', title: 'Laravel', proficiency: 80 },
    { icon: 'php', title: 'PHP', proficiency: 80 },
    { icon: 'deployed_code', title: 'Docker', proficiency: 75 },
  ];

  return (
    <main className="flex-1 py-12 md:py-20">
      <section className="w-full max-w-4xl mx-auto" id="skills">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-light dark:text-text-dark">
            Skills &amp;
            <span className="text-accent"> Proficiencies</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary-light dark:text-text-secondary-dark">
            My technical toolkit for building modern web applications.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
              proficiency={skill.proficiency}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Skills;