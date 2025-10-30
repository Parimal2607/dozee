import React, { useState } from 'react';
import { Section } from '../common';
import scienceImg from '../../assets/images/the-science-behind.png';

const Science = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={{ backgroundColor: '#F2F8FF' }}>
      <Section 
        background="transparent" 
        padding="lg"
        className="relative"
      >
      {/* Section Title - No Background */}
      <h2 
        className="font-titillium font-semibold text-center mb-8 md:mb-12 lg:mb-16 text-3xl sm:text-4xl md:text-5xl lg:text-[64px] md:leading-[120%]"
        style={{
          color: '#0055D2',
          maxWidth: '1696px',
          margin: '0 auto 64px'
        }}
      >
        {data.title}
      </h2>

      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
        {/* Timeline Accordion - LEFT SIDE */}
        <div className="relative animate-slide-in-left px-4 md:px-0">
          {/* Vertical Dashed Line - Continuous through all items */}
          <div 
            className="absolute left-[42px] sm:left-[43px] md:left-[42px] top-[26px] bottom-[44px] w-0.5 border-l-2 border-dashed z-0"
            style={{ borderColor: '#062D77' }}
          />

          {data.features.map((feature, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div key={index} className="relative mb-6 md:mb-8">
                <div className={`flex items-start gap-4 md:gap-6 ${isActive ? '' : 'ml-[10px]'}`}>
                  {/* Number Badge - Active: 84px, Inactive: 52px - All centered on line */}
                  <button
                    onClick={() => setActiveIndex(index)}
                    className={`
                      flex-shrink-0 flex items-center justify-center font-titillium 
                      transition-all duration-300 hover:scale-105 relative z-10
                      bg-primary text-[#35EFC1] font-semibold leading-none tracking-[0.01em]
                      ${isActive 
                        ? 'md:w-[84px] md:h-[84px] w-[52px] h-[52px] text-[24px] md:text-[40px] rounded-[98px_98px_0_98px]' 
                        : 'md:w-[52px] md:h-[52px] w-[32px] h-[32px] text-[16px] md:text-2xl rounded-[61px_61px_0_61px]'}
                    `}
                  >
                    0{feature.number}
                  </button>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Title - Always visible, no background */}
                      <button
                        onClick={() => setActiveIndex(index)}
                        className="text-left w-full mb-3 md:mb-4"
                      >
                        <h3 
                          className="font-titillium font-semibold transition-colors duration-300 hover:text-primary text-xl sm:text-2xl md:text-3xl lg:text-[36px] leading-tight md:leading-[44px]"
                          style={{
                            color: '#495566',
                            maxWidth: '745px'
                          }}
                        >
                          {feature.title}
                        </h3>
                      </button>

                      {/* Expandable Description - White background only here */}
                      <div
                        className={`
                          overflow-hidden transition-all duration-500 ease-in-out
                          ${isActive ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
                        `}
                      >
                        <div 
                          className="bg-white p-4 md:p-5 lg:p-6 rounded-[28px] max-w-[777px] flex flex-col gap-6 md:gap-8 lg:gap-9 items-start shadow-lg"
                          style={{
                            borderRadius: '28px 28px 0px 28px',
                          }}
                        >
                          {feature.descriptions.map((desc, descIndex) => (
                            <div 
                              key={descIndex}
                              className="font-titillium flex items-start gap-2 md:gap-3 text-base sm:text-lg md:text-xl lg:text-2xl leading-tight"
                              style={{
                                fontWeight: '400',
                                color: '#495566',
                                maxWidth: '686px'
                              }}
                            >
                              {/* Custom SVG Checkmark */}
                              <span className="flex-shrink-0 mt-1">
                                <svg width="20" height="20" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 lg:w-[27px] lg:h-[26px]">
                                  <circle cx="13" cy="13" r="13" fill="#DBEAF7"/>
                                  <path d="M7 13.4839L11.3902 18L25 4" stroke="#0055D2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </span>
                              <span className="flex-1">{desc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Image - RIGHT SIDE */}
        <div className="animate-slide-in-right lg:sticky lg:top-24 px-4 md:px-0">
          <img
            src={scienceImg}
            alt="The Science Behind Dozee"
            className="w-full h-auto object-contain max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mx-auto lg:mx-0"
            style={{ maxWidth: '600px' }}
          />
        </div>
      </div>
      </Section>
    </div>
  );
};

export default Science;
