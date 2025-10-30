import React from "react";
import { Section, SectionTitle } from "../common";
import productImg from "../../assets/images/second-section-img.png";
import backgroundVector from "../../assets/images/backgound-vector-second-section.svg";

const DozeeVS = ({ data }) => {
  return (
    <Section
      id="product"
      padding="lg"
      background="white"
      className="relative overflow-hidden"
    >
      {/* Background Vector as ::before */}
      <div
        className="absolute inset-0 pointer-events-none z-0 left-0 -top-[30%] max-w-[20%] bg-no-repeat bg-left-center"
        style={{
          backgroundImage: `url(${backgroundVector})`,
        }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Product Image - LEFT SIDE */}
        <div className="animate-slide-in-left relative flex justify-center lg:justify-start px-4 md:px-0">
          <img
            src={productImg}
            alt="Dozee VS Device"
            className="w-full h-auto object-contain max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[466px]"
          />
        </div>

        {/* Content - RIGHT SIDE */}
        <div className="animate-slide-in-right px-4 lg:px-0">
          <h2
            className="font-titillium font-semibold mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-[64px] md:leading-[120%] text-primary max-w-2xl"
          >
            {data.title}
          </h2>

          <p
            className="font-titillium text-base sm:text-lg md:text-xl lg:text-[24px] md:leading-[130%] font-normal text-slate-grey max-w-2xl"
          >
            {data.description}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default DozeeVS;
