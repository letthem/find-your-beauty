import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  isLoading, 
  className = '', 
  ...props 
}) => {
  const baseStyle = "relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold rounded-full group focus:outline-none transition-all duration-300";
  
  const variants = {
    primary: "text-black bg-neon-400 hover:bg-neon-500 shadow-[0_0_20px_rgba(74,222,128,0.5)] hover:shadow-[0_0_30px_rgba(74,222,128,0.7)]",
    secondary: "text-neon-400 border border-neon-400 hover:bg-neon-400/10 shadow-[0_0_10px_rgba(74,222,128,0.2)]"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className} ${isLoading ? 'opacity-80 cursor-wait' : ''}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </span>
      ) : children}
      
      {/* Glow effect overlay */}
      <span className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all" />
    </button>
  );
};

export default Button;