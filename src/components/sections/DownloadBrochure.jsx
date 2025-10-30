import React from 'react';
import { Section, Button } from '../common';
import brochureImg from '../../assets/images/download-broch-img.png';

const DownloadBrochure = ({ data }) => {
  return (
    <Section 
      background="primary" 
      padding="lg"
      className="relative overflow-hidden"
      id="download-brochure"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${brochureImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-titillium animate-fade-in-up">
          {data.title}
        </h2>
        <p className="text-base md:text-lg text-white/90 mb-8 font-titillium animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {data.subtitle}
        </p>
        
        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Button 
            variant="primary" 
            size="md"
            className="text-black"
            style={{
              background: '#35EFC1',
              borderColor: '#35EFC1',
              color: '#000000'
            }}
          >
            {data.buttonText}
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default DownloadBrochure;
