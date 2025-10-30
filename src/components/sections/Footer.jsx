import React, { useState } from 'react';
import { Container, Button } from '../common';
import Logo from '../../assets/images/Logo.svg';
import benefitsBg from '../../assets/images/benefits-bg-img.png';
import footerElips from '../../assets/images/footer-elips.png';

const Footer = ({ data }) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <footer className="relative overflow-hidden mt-[40px]">
      {/* Benefits Background Pattern Section */}
      <div 
        className="absolute top-0 w-full h-[230px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${benefitsBg})`,
        }}
      />

      {/* Blue Footer Section with Ellipse Background */}
      <div 
        className="relative mt-[82px] bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: `url(${footerElips})`,
        }}
      >
        
        {/* Demo Section */}
        <div className="relative pt-10 pb-12">
          <Container>
            <div className="text-center relative z-10">
              <Button 
                variant="primary"
                size="md"
                className="mb-6"
                style={{
                  background: '#35EFC1',
                  borderColor: '#35EFC1',
                  color: '#000000'
                }}
              >
                {data.demoSection.title}
              </Button>
              <p className="text-white text-base md:text-lg max-w-4xl mx-auto font-titillium leading-relaxed">
                {data.demoSection.description}
              </p>
            </div>
          </Container>
        </div>

        {/* Main Footer Content */}
        <Container>
          <div className="relative z-10 py-12 lg:py-16">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
              {/* Left Column - Logo and Social */}
              <div className="lg:col-span-4 flex flex-col justify-between">
                {/* Logo and Social Links Section */}
                <div className="flex flex-col xl:flex-row gap-4 items-start xl:items-center  mb-6">
                  <img 
                    src={Logo} 
                    alt="Dozee Logo" 
                    className="w-auto brightness-0 invert"
                  />
                  
                  <div>
                    <h3 className="text-white text-xs mb-2 font-titillium normal-case">follow us on</h3>
                    <div className="flex space-x-2">
                    {data.social.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#35EFC1] transition-all duration-300"
                        aria-label={social.name}
                      >
                        {social.icon === 'linkedin' && (
                          <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        )}
                        {social.icon === 'facebook' && (
                          <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        )}
                        {social.icon === 'twitter' && (
                          <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        )}
                        {social.icon === 'youtube' && (
                          <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                        )}
                        {social.icon === 'instagram' && (
                          <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                          </svg>
                        )}
                      </a>
                    ))}
                    </div>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="mt-8">
                  <form onSubmit={handleSubscribe} className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email Address"
                      className="w-full px-5 py-3 pr-40 rounded-full text-sm font-titillium text-gray-700 focus:outline-none focus:ring-2 focus:ring-white/30"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute right-1 top-1 bottom-1 px-6 bg-primary text-white text-xs font-bold rounded-full hover:opacity-90 transition-all duration-300 uppercase font-titillium whitespace-nowrap"
                    >
                      SUBSCRIBE NEWSLETTER
                    </button>
                  </form>
                </div>
              </div>

              {/* Middle Column - Quick Links */}
              <div className="lg:col-span-4">
                <h3 className="text-white text-sm font-normal mb-6 font-titillium uppercase tracking-wider">QUICK LINKS</h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {data.quickLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.link}
                      className="text-white hover:text-[#35EFC1] transition-colors duration-300 font-titillium text-sm"
                    >
                      {link.name}
                    </a>
                  ))}
                  {data.bottomLinks.map((link, index) => (
                    <a 
                      key={`bottom-${index}`}
                      href={link.link}
                      className="text-white hover:text-[#35EFC1] transition-colors duration-300 font-titillium text-sm"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Column - Contact Info */}
              <div className="lg:col-span-4">
                <div className="space-y-6">
                  {/* Phone */}
                  <div>
                    <h3 className="text-white text-xs font-normal mb-2 font-titillium uppercase tracking-wider">GIVE US A RING</h3>
                    <a 
                      href={`tel:${data.contact.phone}`}
                      className="text-white hover:text-[#35EFC1] transition-colors duration-300 font-titillium text-2xl font-semibold flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                      </svg>
                      {data.contact.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                    <h3 className="text-white text-xs font-normal mb-2 font-titillium uppercase tracking-wider">FOR QUERIES</h3>
                    <a 
                      href={`mailto:${data.contact.email}`}
                      className="text-white hover:text-[#35EFC1] transition-colors duration-300 font-titillium text-sm flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      {data.contact.email}
                    </a>
                  </div>

                  {/* Location */}
                  <div>
                    <h3 className="text-white text-xs font-normal mb-2 font-titillium uppercase tracking-wider">OUR LOCATION</h3>
                    <p className="text-white font-titillium text-sm flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      {data.contact.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Dark Blue Copyright Section */}
        <div 
          className="py-6"
          style={{
            background: 'linear-gradient(to bottom, #003d99, #002966)'
          }}
        >
          <Container>
            <div className="flex  items-center">
              <p className="text-white text-xs font-titillium">
                {data.copyright}
              </p>
            </div>
          </Container>
        </div>
      </div>

      {/* White Disclaimer Section */}
      <div className="bg-white py-4">
        <Container>
          <div className="text-center">
            <p className="text-gray-700 text-xs font-titillium max-w-6xl mx-auto leading-relaxed">
              {data.disclaimer}
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
