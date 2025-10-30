import React, { useState } from "react";
import { Section } from "../common";
import featuresImg from "../../assets/images/features-img.png";

const Features = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-[#F2F8FF]">
      <Section
        background="transparent"
        padding="lg"
        className="relative overflow-hidden"
        id="features"
      >
        {/* Section Title */}
        <h2
          className="font-titillium font-semibold text-center mb-8 md:mb-12 lg:mb-16 text-3xl sm:text-4xl md:text-5xl lg:text-[64px] md:leading-[120%] text-primary max-w-[838px] mx-auto"
        >
          {data.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Accordion List - LEFT SIDE */}
          <div className="relative animate-slide-in-left space-y-3 md:space-y-4 px-4 md:px-0">
            {data.list.map((feature, index) => {
              const isActive = activeIndex === index;

              return (
                <div key={index} className="relative bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
                  {/* Accordion Item */}
                  <button
                    onClick={() => setActiveIndex(index)}
                    className="w-full text-left flex items-center justify-between p-4 md:p-5 lg:p-6 gap-3 md:gap-4"
                  >
                    <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                      <span className="font-titillium font-semibold text-lg sm:text-xl md:text-2xl text-secondary flex-shrink-0">
                        {feature.number}.
                      </span>
                      <h3
                        className="font-titillium font-semibold text-lg sm:text-xl md:text-2xl text-secondary leading-tight"
                      >
                        {feature.title}
                      </h3>
                    </div>

                    {/* Toggle Arrow */}
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transition-transform duration-300 w-10 h-10 md:w-12 md:h-12 flex-shrink-0 ${
                        isActive ? "rotate-180" : ""
                      }`}
                    >
                      <circle cx="24" cy="24" r="24" fill="#DBEAF7" />
                      <path
                        d="M16 22L23.8869 30L32 22.0002"
                        stroke="black"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                  
                  </button>

                  {/* Expandable Description */}
                  <div
                    className={`
                      overflow-hidden transition-all duration-500 ease-in-out
                      ${
                        isActive
                          ? "max-h-96 opacity-100 mt-2"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <div className="px-4 md:px-5 lg:px-6 pb-4 md:pb-5 lg:pb-6">
                      <p
                        className="font-titillium text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-normal text-slate-grey max-w-[641px]"
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image with Circular Dashed Border - RIGHT SIDE */}
          <div className="animate-slide-in-right">
            <div className="relative -mr-[80px] text-right">
              <img
                src={featuresImg}
                alt="Dozee Features"
                className="relative h-auto object-contain w-full max-w-[550px] ml-auto"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Features;
