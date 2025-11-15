import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from './Button';

const NavBar = () => {
  const [isDark, setIsDark] = useState(false);
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

  // Navigation items
  const navItems = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Skills", href: "/skills" },
    { id: 3, name: "Projects", href: "/projects" },
    { id: 4, name: "About", href: "/about" },
    { id: 5, name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const initialDark = savedTheme === 'dark' || (!savedTheme && true); // Default to dark
    setIsDark(initialDark);
    if (initialDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap px-4 sm:px-6 py-5">
      <div className="flex items-center gap-4 text-text-light dark:text-text-dark">
        <div className="size-6 text-primary">
          <i className="fa-solid fa-bolt"></i>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Abdelillah Chikh</h2>
      </div>
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-8">
          <Link className="text-sm font-medium leading-normal text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary transition-colors" to="/">Home</Link>
          <Link className="text-sm font-medium leading-normal text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary transition-colors" to="/skills">Skills</Link>
          <Link className="text-sm font-medium leading-normal text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary transition-colors" to="/projects">Projects</Link>
          <Link className="text-sm font-medium leading-normal text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary transition-colors" to="/about">About</Link>
          <Link className="text-sm font-medium leading-normal text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary transition-colors" to="/contact">Contact</Link>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggleDarkMode}
            className="p-2 rounded-md text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <Link to="/contact">
            <Button>Get In Touch</Button>
          </Link>
        </div>
      </div>
      <div className="md:hidden flex items-center gap-4">
        <button
          type="button"
          onClick={toggleDarkMode}
          className="p-2 rounded-md text-text-light dark:text-text-dark"
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)}
        >
          <svg
            className="w-6 h-6 text-text-light dark:text-text-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Mobile Dropdown Menu */}
        {showingNavigationDropdown && (
          <ul className="md:hidden absolute top-16 right-4 bg-black/70 backdrop-blur-sm w-48 rounded-lg shadow-lg p-4 space-y-4 z-50">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.href}
                  className="block text-white hover:text-primary transition"
                  onClick={() => setShowingNavigationDropdown(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default NavBar;