import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent py-4 z-40">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo - Visible only on Desktop */}
        <div className="hidden md:block">
          <a href="#about" className="flex items-center space-x-2 text-white text-2xl">
            <span className="text-white font-silkscreen"> ᯓ★ Shubhada Martha</span>
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex justify-end w-full">
          <button
            onClick={toggleMenu}
            className="text-[#f472b6] focus:outline-none hover:text-white transition duration-300"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center px-4 py-2 border-2 border-[#0c001d] border-opacity-50 bg-opacity-80 rounded-full bg-[#0c001d]">
          <a
            href="#about"
            className="px-4 text-white text-lg font-quantico hover:text-[#f472b6] hover:bg-opacity-20 hover:bg-gray-100 rounded-full transition duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="px-4 text-white text-lg font-quantico hover:text-[#f472b6] hover:bg-opacity-20 hover:bg-gray-100 rounded-full transition duration-300"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="px-4 text-white text-lg font-quantico hover:text-[#f472b6] hover:bg-opacity-20 hover:bg-gray-100 rounded-full transition duration-300"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="px-4 text-white text-lg font-quantico hover:text-[#f472b6] hover:bg-opacity-20 hover:bg-gray-100 rounded-full transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Resume Download Button */}
        <div className="hidden md:block">
          <a
            href="public/ShubhadaMartha_Resume.pdf" // Replace with the actual path to your resume
            download="ShubhadaMartha_Resume.pdf" // Name for the downloaded file
            className="px-6 py-2 text-white text-lg font-quantico bg-white bg-opacity-10 hover:text-[#f472b6] rounded-full border-2 border-white hover:border-white hover:bg-transparent transition duration-300"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 w-full">
          <div className="flex flex-col space-y-2 bg-[#0c001d] bg-opacity-80 rounded-lg mx-4 p-4 border border-opacity-50 border-[#0c001d]">
            <a
              href="#about"
              className="text-white text-lg font-quantico hover:text-[#f472b6] transition duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-white text-lg font-quantico hover:text-[#f472b6] transition duration-300"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-white text-lg font-quantico hover:text-[#f472b6] transition duration-300"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-white text-lg font-quantico hover:text-[#f472b6] transition duration-300"
            >
              Contact
            </a>
            <a
              href="public/ShubhadaMartha_Resume.pdf" // Replace with the actual path to your resume
              download="ShubhadaMartha_Resume.pdf" // Name for the downloaded file
              className="text-white text-lg font-quantico hover:text-[#f472b6] transition duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
