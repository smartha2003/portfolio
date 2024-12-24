import React, { useState, useEffect, useRef } from 'react';
import Bruh from '../assets/bruh.png';
import Avatar from '../assets/avatar2.png';
import Typed from 'typed.js';

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
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ['HELLO! I AM SHUBHADA 👋🏽'], // Strings to display
        typeSpeed: 320,
        backSpeed: 100,
        loop: true,
      });

      // Clean up the Typed instance on component unmount
      return () => {
        typed.destroy();
      };
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentOccupationIndex((prevIndex) => (prevIndex + 1) % occupations.length);
        setFade(true); // Start fade-in
      }, 500); // Duration of the fade-out effect
    }, 2000); // Total duration for each occupation

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [occupations.length]);

  return (
    <section id="about" className="min-h-screen pt flex items-center ">
      <div className="flex flex-col w-1/2 pr-10 text-white">
        {/* <h2 className="text-5xl font-silkscreen font-bold mb-4 pt-1 text-left z-20 leading-tight tracking-widest-custom transition-transform-color duration-300 ease hover:transform hover:-translate-y-2 hover:text-[#f472b6]">
          HELLO! I AM SHUBHADA 👋🏽
        </h2> */}
        <h2 className="text-5xl font-silkscreen font-bold mb-4 pt-1 text-left z-20 leading-tight tracking-widest-custom">
          <span ref={typedRef} className="text-[#f472b6]" />
        </h2>

        {/* Occupation Badges */}
        <div className="flex flex-wrap gap-4 mt-4">
          <span className="px-4 py-2 text-sm font-medium text-darky-gray bg-[#fde68a] hover:bg-[#f472b6] border border-transparent rounded-full">
            Software Engineer
          </span>
          <span
            className={`px-4 py-2 text-sm font-medium text-darky-gray bg-[#fde68a] hover:bg-[#f472b6] border border-transparent rounded-full transition-opacity duration-500 ease-in-out ${
              fade ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {occupations[currentOccupationIndex]}
          </span>
        </div>

        <p className="text-lg text-left font-light leading-relaxed pt-10 z-20">
          {/* I am a <span className="font-semibold text-[#f472b6] transition-transform-color duration-300 ease hover:transform hover:-translate-y-2 hover:text-[#fde68a]">software engineer </span> */}
          I'm a fourth-year Computer Science student at UC Davis with a passion for building impactful, user-centered solutions. Currently, as a Software Developer Intern at <span className="font-semibold text-[#f472b6] transition-transform-color duration-300 ease hover:transform hover:-translate-y-2 hover:text-[#fde68a]">GBCS Group </span>, I develop internal tools, streamline workflows, and automate processes using modern technologies like TypeScript and GraphQL. As the Tech Director for the Google Developer Student Club, I lead technical projects and mentor peers to create meaningful impact.
        </p>
        <p className="text-lg text-left font-light leading-relaxed pt-10 z-20">
        I’m deeply interested in AI/ML, specifically computer vision and optimizing technologies to solve complex problems. I thrive at the intersection of design and development, crafting solutions that are functional, intuitive, and performance-driven.
        </p>
      </div>
      <div className="w-1/2 flex justify-center pt-10 relative">
        <div className="flex items-center justify-center w-screen h-screen relative">
          <div className="flex flex-col items-center justify-center space-x-4 pl-10 pb-20">
            {/* <img
              src={Bruh}
              alt="Shubhada Martha"
              className="mx-10 w-1000 h-70 object-cover shadow-lg relative z-20 border-4 border-white rounded-lg"
            /> */}
            <img
              src={Avatar}
              alt="Shubhada Martha"
              className="mx-10 w-1000 h-80 object-cover shadow-lg relative z-20 rounded-lg"
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
