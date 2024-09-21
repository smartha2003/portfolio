import React from 'react';
import ScrollDownIndicator from '../components/ScrollDownIndicator';
import Me from '../assets/me.png';
import Bruh from '../assets/bruh.png';
import YourImage from '../assets/img1.jpg';

const Home: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-end">

      <img
        src={YourImage}
        alt="Shubhada Martha"
        className="h-[800px] object-cover shadow-lg pt-10 relative z-30 m-10"
      />

      {/* Container to position the text on the right side */}
      <div className="flex flex-col items-end justify-center h-full pr-20">
  
        <h2 className="text-3xl font-special font-bold mb-4 text-right">Creative</h2>
        <h2 className="text-8xl font-special font-bold mb-4 text-right">Designer</h2>
        <h2 className="text-8xl font-special mb-4 text-right">Developer</h2>
        <h2 className="text-3xl font-special font-bold mb-4 text-right">“Design is not just what it looks like and feels like. Design is how it works. ”    - Steve Jobs</h2>
      </div>

      {/* Background and other decorative elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="gradient absolute inset-0 z-0"></div>
        <div className="gradient absolute inset-0 z-0"></div>
        {/* ScrollDownIndicator if needed */}
        {/* <ScrollDownIndicator className="absolute z-10" /> */}
      </div>
    </section>
  );
};

export default Home;
