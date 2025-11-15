import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with a custom CMS and Stripe integration.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYclddQ54zITzEX8JelYiykVkdJLGbX9_rAQEAiZjQHSkxEeUuAvqq0y5TzwU_47nYMFYLITR2y82XmDee7FTD4yIvNhM059blYjt4HKcEFskiPjiCxx_1R86V4p4hL9fYhyFcBM_UH68F3sHeq_XUxVVem0LJR6jeQ8Z6aySPdWRI6Q8gi0oMTZ4jyx_3byMnX3Vi3PqDuLBZ-S2GPtQ66fFSaNPoZXiX2g2j9ZH5ufZlZx05h4xPpeFskXZFllDXlVp29VAprw",
      technologies: ["React", "Node.js", "PostgreSQL"],
      linkText: "View Case Study"
    },
    {
      title: "Project Management App",
      description: "A collaborative tool to help teams track tasks, milestones, and progress.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDDRvjMzYsiWnX_GaPTkUz5H2lfeK7rG9qvjYBsjxJMmUJ-pYtQOPskYGAMqVtY_bfj5oY8A07HOjZulceoNeRn4DTptNsHxPHAm1Yfgkt58KdBinsTn0f22XMvAwfBFqt0z6GxfpIpvu6sXPwY21AZSOCar6GxAy9fUmnN355069YkwuplrPotVN_HENTbTJIo4QWaBR8E8AaET1DNR1hqeK8p-o3yRPqove-3AbHLp8vLUfmy2avLrOmKp2nnc-yOYQA2dDBXQ",
      technologies: ["Vue.js", "Firebase", "Figma"],
      linkText: "View Case Study"
    },
    {
      title: "Mobile Banking App",
      description: "A UI/UX concept for a modern, user-friendly, and secure banking application.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7paP25WkeQwhzbYmGL2HVIXXIWMRVrDDxiLyMgU9MQTZt3eBj5U2qJ7nld5AuxlakTb4eM5qNlihTZ2gAQLRFDbZGXb3XtG_ZLan9iM50-kavkN1g__ffpDoBLfcusqLkNJPXc_6yzR0nEIdGWewddOzL0v10jofinnZQt2nAiAqVGuCXdGND7piskiQuwkqmrLda6n0Db2-5M9W8TB8Umf8Z9bFfzkeA--8HVPiGEIdOfnXz0gqVEycHD7qhN7LfuAMNPH2Beg",
      technologies: ["UI/UX Design", "Figma", "Prototyping"],
      linkText: "View Case Study"
    },
    {
      title: "Social Media Dashboard",
      description: "A clean interface for managing multiple social media accounts and viewing analytics.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3YPgAN5ChqIj0wY7EtRpN-EiD7I2b-JGa8Sc_TJqq_GPkTaNghn7kZ6J1wZTeZ_N9314UJKPkJLHxCZU3BjLPzKA37AOi_6DAmP9nZtLlXU-nLTfL59Jg8nonaQtDPZCm1nH8fSdE5GKfXlohKXnM8QixhbzecOuUdz65sKiAuGxv8gOrqLoP-f32HQonaBGNp8zwb8qKqGPS_qDhArgq24oXJfukC7pK59ztEJDdmYjI85L_IiRVzmYoGRrwjnnU3PBFGcmlog",
      technologies: ["TypeScript", "Next.js", "GraphQL"],
      linkText: "Live Demo"
    },
    {
      title: "Data Visualization Tool",
      description: "An interactive dashboard for visualizing complex datasets with D3.js.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoVIdMy4giygWXE3BTG5yAT0436ujmHcgjdUdS26T_UqdYsj4D3SFMW4uZIA0YHl9TeUyi_rvnsUTQaJylAgC4fnDfOI2VuOVm5rdTaI6jn5RUu8Iy_SeFPl-j4qAVmF6oY3a9dWjP25nkj5uLBP-ArCDvGH_Jm6LRQsehAUQHfu8DXGXQjvd2qJYzw6Kp8JPSPw3fJaJ4MP5lIl6iJvReDFHf9b3qY5rIwZuq9MizQt0DabKIn3LTJq4bwvBg19Y0hC0AYQ0kKQ",
      technologies: ["React", "D3.js", "Python"],
      linkText: "View on GitHub"
    },
    {
      title: "Portfolio Website V1",
      description: "My previous personal portfolio site built with vanilla JS and a lot of CSS.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_zDFn-9xoN5pjS5wc85DSRP-Vh7sOepKcTx5YomeL9dTVVwVcH8UzNMN1J4FWfeONBLFG4HOjh056ZiFzbMw-F-1FJYrpGVGSdBiZcb-5mjpFP3CGicifAsWwXYcX1Ce57nQIwUsIxsmOy_i-bvE4LVQeg9wRn8IKqLnEDSeA1bq6vpfGXGr3K1wn5VCN8Ti9SyRktbhbHLU0tfOOXA-tL4RIiGf4xhyh8EjdDrJzwDPxtVJqLc35pP_lEjPtxxej3CgkfQtGig",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      linkText: "View Case Study"
    }
  ];

  return (
    <main className="py-10 md:py-16">
      <div className="flex flex-wrap justify-between items-start gap-4 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-slate-900 dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">Selected Work</p>
          <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal">A selection of my recent projects.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            technologies={project.technologies}
            linkText={project.linkText}
          />
        ))}
      </div>
    </main>
  );
};

export default Projects;