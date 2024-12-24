import React from 'react';
import YourImage from '../assets/img1.jpg';

const Home: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-end ">
      <img
        src={YourImage}
        alt="Flowers"
        className="h-[800px] object-cover shadow-lg pt-10 relative z-30 m-10 hover:animate-slowbounce "
      />

      {/* Container to position the text on the right side */}
      <div className="flex flex-col items-end justify-center h-full pr-20 z-10">
  
        <h2 className="text-3xl font-special font-bold mb-4 text-right underline decoration-[#f472b6] hover:decoration-[#f472b6]">Creative</h2>
        <h2 className="text-8xl font-special font-bold mb-4 text-right">Designer</h2>
        <h2 className="text-8xl font-special mb-4 text-right">Developer</h2>
        <h2 className="text-3xl font-special font-bold mb-4 text-right">“Design is not just what it looks like and feels like. Design is how it works.”</h2>
        <h2 className="text-3xl font-special font-bold mb-4 text-right">- Steve Jobs</h2>
      </div>

      {/* Background and other decorative elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="gradient w-full h-full transform translate-x-1/2 translate-y-1/2"></div>
        <div className="gradient w-full h-full transform translate-x-1/2 translate-y-1/2"></div>
      </div>
    </section>
  );
};

export default Home;
