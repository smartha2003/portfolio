import React from 'react';
import ScrollDownIndicator from '../components/ScrollDownIndicator';

const Home: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-between">
      <h1 className="text-5xl font-bold text-white mb-8 mt-16 text-shadow-lg">Welcome to My Portfolio</h1>
      <div className="flex items-center justify-center w-screen h-screen">
            <div className="gradient"></div>
            <div className="gradient"></div>
          </div>
      <ScrollDownIndicator />
    </section>
  );
};

export default Home;