import React from 'react';
import YourImage from '../assets/img1.jpg'; // Replace with the correct path to your image file

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen pt-10 flex items-center">
      <div className="flex flex-col w-1/2 pr-10 text-white">
        <h2 className="font-bebas text-8xl font-bold mb-4 pt-1 text-left leading-tight tracking-widest-custom transition-transform-color duration-300 ease hover:transform hover:-translate-y-2 hover:text-[#f472b6]">
          HELLO! I AM SHUBHADA 👋🏽
        </h2>
        <p className="text-2xl text-left font-light leading-relaxed pt-10">
        I am a <span className="font-semibold text-[#f472b6] transition-transform-color duration-300 ease hover:transform hover:-translate-y-2 hover:text-[#fde68a]">creative designer</span> and <span className="font-semibold text-[#f472b6] transition-transform-color duration-300 ease hover:transform hover:-translate-y-2 hover:text-[#fde68a]">developer</span> passionate about turning UI/UX designs into impactful digital experiences. My love for color, design, and coding fuels my work in web development, where I combine creativity with technical expertise.
        </p>
        <p className="text-2xl text-left font-light leading-relaxed pt-10">
        From personal projects to working with startups, I’ve embraced challenges that helped me grow, collaborate, and innovate. My background in software engineering, marketing, and design allows me to create <span className="underline decoration-[#fde68a] hover:decoration-[#f472b6]">user-centered, sustainable solutions</span> that stand out.
        </p>
      </div>
      <div className="w-1/2 flex justify-center pt-10 relative">
        <img
          src={YourImage}
          alt="Shubhada Martha"
          className="h-[500px] object-cover shadow-lg pt-10 z-index-10"
        />
        <div className="flex items-center justify-center w-screen h-screen">
            <div className="gradient"></div>
            <div className="gradient"></div>
          </div>
      </div>
    </section>
  );
};

export default About;
