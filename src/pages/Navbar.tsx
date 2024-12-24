import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent py-4 z-40">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <a href="#about" className="flex items-center space-x-2 text-white text-2xl">
          <span className="text-white font-silkscreen"> X Shubhada Martha</span>
        </a>

        {/* Navigation Links inside a border */}
        <div className="flex items-center px-4 py-2 border-2 border-gray-black rounded-full bg-darker-slate-grey">
          <a
            href="#about"
            className="px-4 text-white text-lg font-quantico hover:text-[#f472b6] hover:bg-gray-100 rounded-full transition duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="px-4 text-white text-lg font-quantico hover:text-[#f472b6] hover:bg-gray-100 rounded-full transition duration-300"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="px-4 text-white text-lg font-quantico hover:text-[#f472b6] hover:bg-gray-100 rounded-full transition duration-300"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="px-4 text-white text-lg font-quantico hover:text-[#f472b6] hover:bg-gray-100 rounded-full transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Get Started Button */}
        <div>
          <a
            href="#resume"
            className="px-6 py-2 text-darker-slate-grey text-lg font-quantico bg-white hover:text-[#f472b6] rounded-full border-2 border-white hover:border-transparent hover:bg-gray-100 transition duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
