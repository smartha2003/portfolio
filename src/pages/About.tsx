import React from 'react';
import Bruh from '../assets/bruh.png'

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen pt flex items-center ">
      <div className="flex flex-col w-1/2 pr-10 text-white">
        <h2 className="font-bebas text-8xl font-bold mb-4 pt-1 text-left z-20 leading-tight tracking-widest-custom transition-transform-color duration-300 ease hover:transform hover:-translate-y-2 hover:text-[#f472b6]">
          HELLO! I AM SHUBHADA 👋🏽
        </h2>
        <p className="text-2xl text-left font-light leading-relaxed pt-10 z-20">
        I am a <span className="font-semibold text-[#f472b6] transition-transform-color duration-300 ease hover:transform hover:-translate-y-2 hover:text-[#fde68a]">creative designer</span> and <span className="font-semibold text-[#f472b6] transition-transform-color duration-300 ease hover:transform hover:-translate-y-2 hover:text-[#fde68a]">developer</span> passionate about turning UI/UX designs into impactful digital experiences. My love for color, design, and coding fuels my work in web development, where I combine creativity with technical expertise.
        </p>
        <p className="text-2xl text-left font-light leading-relaxed pt-10 z-20">
        From personal projects to working with startups, I’ve embraced challenges that helped me grow, collaborate, and innovate. My background in software engineering, marketing, and design allows me to create <span className="underline decoration-[#fde68a] hover:decoration-[#f472b6]">user-centered, sustainable solutions</span> that stand out.
        </p>
      </div>
      <div className="w-1/2 flex justify-center pt-10 relative">
  <div className="flex items-center justify-center w-screen h-screen relative">
    <div className="flex flex-col items-center justify-center space-x-4 pl-10 pb-20" > 
    {/* align this with the hello text */}
    <img
      src={Bruh}
      alt="Shubhada Martha"
      className="mx-10 w-1000 h-70 object-cover shadow-lg relative z-20 border-4 border-white rounded-lg"
    />

      {/* <img
        src={YourImage}
        alt="Shubhada Martha"
        className="h-[500px] object-cover shadow-lg pt-10 relative z-30"
      /> */}
    </div>
    <div className="gradient absolute inset-0 z-10 scale-100"></div>
    <div className="gradient absolute inset-0 z-10 scale-100"></div>
  </div>
  
</div>
    </section>
  );
};

export default About;
