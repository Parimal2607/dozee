import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '',
  style = {},
  ...props 
}) => {
  const baseStyles = 'font-titillium font-bold transition-all duration-300 inline-flex items-center justify-center cursor-pointer uppercase tracking-wider whitespace-nowrap border';
  
  const variants = {
    primary: 'text-white hover:opacity-90',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary',
  };
  
  const sizes = {
    sm: 'px-6 py-2.5 text-xs',
    md: 'px-9 py-[18px] text-sm h-[55px]',
    lg: 'px-12 py-4 text-base',
  };

  const primaryStyle = variant === 'primary' ? {
    background: '#0055D2',
    borderColor: '#F2F8FF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '28px 28px 0px 28px'
  } : {};

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      style={{ ...primaryStyle, ...style }}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

