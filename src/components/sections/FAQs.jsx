import React, { useState } from "react";
import { Section, SectionTitle } from "../common";

const FAQs = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section background="white" padding="lg" id="faqs">
      <SectionTitle className="text-primary">{data.title}</SectionTitle>

      <div className="max-w-7xl mx-auto space-y-3 md:space-y-4 px-0 md:px-0">
        {data.questions.map((faq, index) => {
          const isOpen = openIndex === index;
          const isHovered = hoveredIndex === index;

          // Determine classes based on state
          let bgClass = "bg-[#F2F8FF]"; // Not active
          let borderClass = "border-2 border-white";

          if (isOpen) {
            bgClass = "bg-[#E4F0FF]"; // Active
            borderClass = "border border-[rgba(6,45,119,0.25)]";
          } else if (isHovered) {
            bgClass = "bg-[#94BEF1]"; // Hover
            borderClass = "border-2 border-white";
          }

          return (
            <div
              key={index}
              className={`
                ${bgClass} 
                ${borderClass}
                rounded-[28px] rounded-br-none
                transition-all duration-300 
                animate-fade-in-up
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => !isOpen && setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`
                  w-full flex items-center justify-between text-left 
                  focus:outline-none transition-all duration-300
                  px-6 sm:px-8 md:px-12 lg:px-16 
                  ${isOpen ? "py-8 md:py-10 pb-6" : "py-8 md:py-10"}
                `}
              >
                <h3 className="font-titillium font-semibold text-xl sm:text-2xl md:text-3xl text-slate-grey pr-4 md:pr-8 flex-1 leading-tight">
                  {faq.question}
                </h3>

                {/* Toggle Arrow Icon */}
                <div className="flex-shrink-0">
                  <svg
                    className={`transition-transform duration-300 w-10 h-10 md:w-12 md:h-12 ${
                      isOpen ? "rotate-90" : ""
                    }`}
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="24"
                      cy="24"
                      r="24"
                      transform="rotate(-90 24 24)"
                      fill="#DBEAF7"
                    />
                    <path
                      d="M22 32L30 24.1131L22.0002 16"
                      stroke="black"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>

              {/* Expandable Answer */}
              <div
                className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
                `}
              >
                <div className="px-6 sm:px-8 md:px-12 lg:px-16 pb-8 md:pb-10 lg:pb-12">
                  <p className="font-titillium font-light text-base sm:text-lg md:text-xl text-slate-grey leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default FAQs;
