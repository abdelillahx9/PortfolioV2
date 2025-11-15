interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, variant = 'primary', className = '', onClick }: ButtonProps) => {
  const baseClasses = 'flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 font-bold leading-normal tracking-[0.015em] transition-all duration-300 hover:scale-105';

  const variantClasses = {
    primary: 'bg-primary text-background-light dark:text-background-dark hover:bg-primary/80 dark:hover:bg-primary/80',
    outline: 'bg-primary/20 dark:bg-primary/20 text-primary hover:bg-primary/30 dark:hover:bg-primary/30'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      <span className="truncate">{children}</span>
    </button>
  );
};

export default Button;