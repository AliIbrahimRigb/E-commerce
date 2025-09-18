import React from 'react';

const PrimaryButton = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  disabled = false,
  className = '' 
}) => {
  const baseClasses = "font-euclid font-semibold transition-all duration-300 cursor-pointer inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-white text-black border-2 border-gray-300 hover:bg-black hover:text-white hover:border-black",
    outline: "bg-transparent text-black border-2 border-black hover:bg-black hover:text-white"
  };

  const sizes = {
    small: "px-4 py-2 text-sm rounded-lg",
    medium: "px-8 py-3 text-lg rounded-lg",
    large: "px-12 py-4 text-xl rounded-lg",
    full: "px-16 py-4 text-lg rounded-full"
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
