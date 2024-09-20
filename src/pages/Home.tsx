import React from 'react';
import ScrollDownIndicator from '../components/ScrollDownIndicator';
import Me from '../assets/ShubhadaMartha_pic.jpeg'

const Home: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl text-white mb-8 mt-16 text-shadow-lg pt-5">
        Welcome to My Portfolio
      </h1>
      <div className="flex flex-col md:flex-row gap-8 p-10 items-center justify-center">

        <div className="flex-1">
          <h2 className="text-5xl font-bold mb-4">designer</h2>
          <p className="text-md leading-relaxed">
            Creative designer passionate about turning ideas into visually stunning, user-friendly experiences.
          </p>
        </div>

        <img
          src={Me}
          alt="Your Profile"
          className="mx-8 w-50 h-48 object-cover"
        />

        <div className="flex-1">
          <h2 className="text-5xl font-bold mb-4"><code>&lt;developer&gt;</code></h2>
          <p className="text-md leading-relaxed">
            Crafting clean, efficient code to bring designs to life with innovative, sustainable solutions.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-screen h-screen relative">
        {/* Gradients positioned behind the indicator */}
        <div className="gradient absolute inset-0 z-0"></div>
        <div className="gradient absolute inset-0 z-0"></div>
        {/* ScrollDownIndicator positioned on top of the gradients */}
        {/* <ScrollDownIndicator className="absolute z-10" /> */}
      </div>
      </div>
    </section>
  );
};

export default Home;
