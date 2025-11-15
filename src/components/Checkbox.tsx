interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

const Checkbox = ({ id, label, checked, onChange, className = '' }: CheckboxProps) => {
  return (
    <label htmlFor={id} className={`flex items-center gap-3 cursor-pointer group ${className}`}>
      <div className="relative">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <div className={`w-5 h-5 border-2 rounded transition-all duration-200 flex items-center justify-center ${
          checked
            ? 'bg-primary border-primary'
            : 'border-slate-300 dark:border-slate-600 group-hover:border-primary'
        }`}>
          {checked && (
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </div>
      <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark group-hover:text-text-light dark:group-hover:text-text-dark transition-colors">
        {label}
      </span>
    </label>
  );
};

export default Checkbox;