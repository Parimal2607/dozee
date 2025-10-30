import React from 'react';
import Container from './Container';

const Section = ({ 
  children, 
  className = '', 
  containerClassName = '',
  background = 'white',
  padding = 'default',
  id = '',
  maxWidth = 'container'
}) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    'light-blue': 'bg-light-blue',
    primary: 'bg-primary',
    transparent: 'bg-transparent',
  };

  const paddings = {
    none: '',
    sm: 'py-8 sm:py-12',
    default: 'py-12 sm:py-16 lg:py-20',
    lg: 'py-16 sm:py-20 lg:py-28',
  };

  return (
    <section 
      id={id}
      className={`${backgrounds[background]} ${paddings[padding]} ${className}`}
    >
      <Container maxWidth={maxWidth} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};

export default Section;



