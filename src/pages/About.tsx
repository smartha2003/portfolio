import React, { useState, useEffect, useRef } from 'react';
import Avatar from '../assets/avatar2.png';
import Typed from 'typed.js';
import { FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa';

const About: React.FC = () => {
  const occupations = [
    'Full-Stack',
    'iOS Development',
    'UI/UX Designer',
    'Mobile Developer',
    'Backend Engineer',
    'AI/ML',
    'Computer Vision',
    'Blockchain',
  ];
  const [currentOccupationIndex, setCurrentOccupationIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ['HELLO! I AM SHUBHADA 👋🏽'], // Strings to display
        typeSpeed: 320,
        backSpeed: 100,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentOccupationIndex((prevIndex) => (prevIndex + 1) % occupations.length);
        setFade(true);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [occupations.length]);

  return (
    <section
      id="about"
      className="min-h-screen pt flex items-center px-6 lg:px-16 bg-transparent-to-r from-[#1e293b] via-[#334155] to-[#1e293b]"
    >
      {/* Mobile Layout */}
      <div className="flex flex-col-reverse lg:flex-row w-full items-center lg:items-start lg:justify-between">
        {/* Text Section */}
        <div className="flex flex-col w-full lg:w-1/2 pr-0 lg:pr-10 text-white text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-silkscreen font-bold mb-4 pt-1 leading-tight tracking-widest-custom">
            <span ref={typedRef} className="text-turquoise" />
          </h2>

          <div className="flex justify-center lg:justify-start flex-wrap gap-4 mt-4">
            <span className="px-4 py-2 text-sm font-medium text-[#0A1128] bg-[#f472b6] hover:bg-white border border-transparent rounded-full">
              Software Engineer
            </span>
            <span
              className={`px-4 py-2 text-sm font-medium text-[#0A1128] bg-[#f472b6] hover:bg-white border border-transparent rounded-full transition-opacity duration-500 ease-in-out ${
                fade ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {occupations[currentOccupationIndex]}
            </span>
          </div>

          <p className="text-base lg:text-lg font-light leading-relaxed pt-8">
            I'm a fourth-year Computer Science student at UC Davis with a passion for building impactful, user-centered solutions. Currently, as a Software Developer Intern at{' '}
            <span className="font-semibold text-turquoise">GBCS Group</span>, I develop internal tools, streamline workflows, and automate processes using modern technologies like TypeScript and GraphQL.
          </p>

          {isExpanded && (
            <p className="text-base lg:text-lg font-light leading-relaxed pt-6">
              I’m deeply interested in full-stack development and exploring opportunities in AI/ML, particularly in computer vision. I thrive at the intersection of design and development, crafting solutions that are intuitive, functional, and performance-driven. Let’s connect and shape the future of technology together!
            </p>
          )}

          {!isExpanded && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 px-6 py-2 text-[#0A1128] bg-[#f472b6] rounded-full font-medium hover:bg-white hover:text-black transition"
            >
              {isExpanded ? 'Show Less' : 'View More'}
            </button>
          )}
        </div>

        {/* Avatar Section */}
        <div className="flex flex-col items-center justify-center relative mb-10 lg:mb-0">
          <div
            className="absolute bg-[#f472b6] rounded-full opacity-60 z-10"
            style={{
              width: "clamp(120px, 25vw, 320px)", // Adjust size dynamically based on viewport
              height: "clamp(120px, 25vw, 320px)",
            }}
          />
          <img
            src={Avatar}
            alt="Shubhada Martha"
            className="object-cover shadow-lg relative z-20 transform translate-y-12 rounded-lg"
            style={{
              width: "clamp(100px, 22vw, 280px)", // Dynamically resize based on viewport
              height: "clamp(100px, 22vw, 280px)",
            }}
          />
          {/* Social Links */}
          <div className="flex justify-center gap-10 mt-16 lg:pt-10">
            <a
              href="https://www.linkedin.com/in/shubhada-martha/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#f472b6] text-3xl md:text-4xl lg:text-5xl transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/smartha2003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#f472b6] text-3xl md:text-4xl lg:text-5xl transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.behance.net/shubhada-martha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#f472b6] text-3xl md:text-4xl lg:text-5xl transition duration-300"
            >
              <FaBehance />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
