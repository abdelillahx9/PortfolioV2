import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import Button from '../components/Button';

const Home = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Software Engineer", "Full-stack Developer"],
        typeSpeed: 70,
        backSpeed: 55,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <main className="flex-1">
      <div className="@container">
        <div className="flex flex-col-reverse items-center gap-10 px-4 py-16 text-center @[864px]:flex-row @[864px]:text-left @[864px]:gap-16">
          <div className="flex flex-col gap-6 @[864px]:justify-center">
            <div className="flex flex-col gap-3">
              <p className="text-base font-medium text-primary">
                Hi, I'm <span ref={typedRef} className="text-primary font-medium"></span>
              </p>
              <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[864px]:text-6xl text-text-light dark:text-text-dark">
                Abdelillah Chikh.
              </h1>
              <h2 className="text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[864px]:text-6xl text-text-secondary-light dark:text-text-secondary-dark">
                I build things for the web.
              </h2>
              <p className="mt-2 max-w-lg text-base font-normal leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
              </p>
            </div>
            <div className="flex justify-center @[864px]:justify-start">
              <Link to="/projects">
                <Button variant="outline">View My Projects</Button>
              </Link>
            </div>
          </div>
          <div className="w-full max-w-[300px] aspect-square bg-center bg-no-repeat bg-cover rounded-full bg-primary/30 dark:bg-primary/30 @[864px]:min-w-[300px]" data-alt="Professional headshot of Abdelillah Chikh"></div>
        </div>
      </div>
    </main>
  );
};

export default Home;