import React from 'react';
import { Container } from '../common';
import bannerBg from '../../assets/images/banner-bg.png';

const Hero = ({ data }) => {
  return (
    <section 
      className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[414px] flex items-center justify-center overflow-hidden mt-16 sm:mt-20 md:mt-24 lg:mt-[106px]"
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Overlay */}

      <Container className="relative z-10">
        <div className="flex items-center justify-center px-4">
          <h1 
            className="font-titillium font-semibold text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] max-w-[878px] leading-tight md:leading-[120%]"
            style={{
              color: '#FFFFFF'
            }}
          >
            {data.title}
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
