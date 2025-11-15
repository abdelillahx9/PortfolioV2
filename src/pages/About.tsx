const About = () => {
  return (
    <main className="flex-1">
      <div className="@container">
        <div className="flex flex-col-reverse items-center gap-10 px-4 py-16 text-center @[864px]:flex-row @[864px]:text-left @[864px]:gap-16">
          <div className="flex flex-col gap-6 @[864px]:justify-center">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[864px]:text-6xl text-text-light dark:text-text-dark">
                About Me
              </h1>
              <div className="space-y-4 max-w-2xl">
                <p className="text-lg font-normal leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                  I'm Abdelillah Chikh, a passionate Computer Science Engineer with a strong foundation
                  in programming and web development.
                </p>
                <p className="text-lg font-normal leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                  I specialize in building scalable, user-centric web applications using modern technologies and best practices.
                </p>
                <p className="text-lg font-normal leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                  My journey in tech started with a curiosity to solve real-world problems through code.
                  Today, I combine technical expertise with creative problem-solving to deliver impactful
                  digital solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[300px] aspect-square bg-center bg-no-repeat bg-cover rounded-full bg-primary/30 dark:bg-primary/30 @[864px]:min-w-[300px]" data-alt="Professional headshot of Abdelillah Chikh">
            <div className="w-full h-full rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
              <div className="text-center text-slate-500 dark:text-slate-400">
                <div className="text-6xl mb-2">👨‍💻</div>
                <p className="text-sm">Photo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;