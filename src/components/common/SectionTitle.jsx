import React from 'react';

const SectionTitle = ({ 
  children, 
  className = '', 
  align = 'center',
  animated = true 
}) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <h2 
      className={`
        text-4xl md:text-[64px] 
        md:leading-[120%]
        ${alignments[align]} 
        font-titillium font-semibold text-primary mb-12 md:mb-16
        ${animated ? 'animate-fade-in-up' : ''}
        ${className}
      `}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;



