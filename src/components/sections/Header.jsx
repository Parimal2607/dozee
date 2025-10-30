import React, { useState, useEffect } from 'react';
import { Container, Button } from '../common';
import Logo from '../../assets/images/Logo.svg';

const Header = ({ data }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (link) => {
    if (link.startsWith('#')) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white
        ${isScrolled ? 'shadow-md py-3 md:py-4' : 'py-4 md:py-5'}
      `}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo - LEFT */}
          <div className="flex items-center">
            <img 
              src={Logo} 
              alt="Dozee Logo" 
              className="max-w-[60px] sm:max-w-[70px] md:max-w-[74px] w-full cursor-pointer transition-opacity duration-300 hover:opacity-80"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </div>

          {/* Navigation & Button - ALL RIGHT SIDE */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {/* Navigation Items */}
            {data.navigation.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.link)}
                className={`
                  text-secondary font-titillium font-normal text-lg xl:text-xl leading-[26px] hover:text-secondary transition-colors duration-200 relative
                  ${index === 0 ? 'menu-active after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-[-10px] after:h-[3px] after:bg-primary' : ''}
                `}
                style={index === 0 ? {
                  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)'
                } : {}}
              >
                {item.name}
              </button>
            ))}
            
            {/* CTA Button */}
            <Button 
              variant="primary" 
              size="md"
              onClick={() => scrollToSection(data.ctaButton.link)}
            >
              {data.ctaButton.text}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-secondary hover:text-primary transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
          `}
        >
          <nav className="flex flex-col space-y-3 md:space-y-4 py-4 border-t border-gray-200">
            {data.navigation.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.link)}
                className="text-secondary font-titillium font-medium text-base hover:text-primary transition-colors duration-300 text-left px-2"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-2">
              <Button 
                variant="primary" 
                size="md"
                onClick={() => scrollToSection(data.ctaButton.link)}
                className="w-full"
              >
                {data.ctaButton.text}
              </Button>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
