import React from 'react';

const Container = ({ children, className = '', maxWidth = 'container' }) => {
  const maxWidthClasses = {
    container: 'max-w-container',
    full: 'max-w-full',
    '7xl': 'max-w-7xl',
    '6xl': 'max-w-6xl',
  };

  return (
    <div className={`${maxWidthClasses[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;



