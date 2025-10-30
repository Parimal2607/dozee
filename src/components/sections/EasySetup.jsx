import React from 'react';
import { Section, SectionTitle } from '../common';
import stepsImg from '../../assets/images/all-steps-group-img.png';

const EasySetup = ({ data }) => {
  return (
    <Section background="white" padding="lg">
      <SectionTitle>{data.title}</SectionTitle>

      {/* Steps Image */}
      <div className="animate-scale-in mb-8 md:mb-12">
        <img
          src={stepsImg}
          alt="Easy Setup Steps"
          className="w-full h-auto object-contain max-w-6xl mx-auto drop-shadow-xl"
        />
      </div>

      {/* Steps Description - Right aligned text below each image */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto px-4 md:px-0">
        {data.steps.map((step, index) => (
          <div
            key={index}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <p 
              className="font-titillium text-right text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-bold text-black max-w-[300px] ml-auto"
            >
              {step.step} 
            </p>
            <p 
              className="font-titillium text-right text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-normal text-black max-w-[300px] ml-auto"
            >
            {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default EasySetup;
