import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent shadow-md py-4 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2 font-special text-2xl font-bold text-light-pink hover:text-[#f472b6] text-shadow-lg">
        {/* <img src={Sakura} alt="Rose" className="h-8 w-8" /> */}
        <span>Shubhada Martha</span></a>
        <div className="ml-auto space-x-20">
          <a href="#home" className="text-light-pink font-special hover:text-[#f472b6] text-shadow-lg">Home</a>
          <a href="#about" className="text-light-pink font-special hover:text-[#f472b6] text-shadow-lg">About</a>
          <a href="#experience" className="text-light-pink font-special hover:text-[#f472b6] text-shadow-lg">Experience</a>
          <a href="#projects" className="text-light-pink font-special hover:text-[#f472b6] text-shadow-lg">Projects</a>
          <a href="#contact" className="text-light-pink font-special hover:text-[#f472b6] text-shadow-lg">Contact</a>
          <a href="/myportfolio/ShubhadaMartha_Resume_2024_webDev.pdf " target="_blank" rel="noopener noreferrer">
            <button className="border-2 border-white text-light-pink font-special text-shadow-lg px-4 py-2 rounded bg-transparent hover:bg-[#f472b6] hover:text-dark-slate-grey transition duration-300 hover:animate-bounce">
              Resume
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
