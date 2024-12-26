import React from 'react';
import Behance from './behance';
import GitHub from './gitHub';
import LinkedInIcon from './linkedIn';

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="w-full py-6 pr-4 flex flex-col md:flex-row items-center justify-between bg-[#0c001d] text-white"
    >
    
      {/* Left section with text */}
      <div className="text-center md:text-left pl-0 md:pl-6 text-sm text-gray-400 mb-4 md:mb-0">
        {/* <p>
          Made with <span style={{ color: '#BA6573' }}>❤</span> by Shubhada
        </p> */}
        <p>Last updated: Dec 24, 2024</p>
      </div>

      {/* Right section with social icons */}
      <div className="flex gap-6 items-center justify-center">
        <a
          href="https://www.linkedin.com/in/shubhada-martha/"
          target="_blank"
          className="p-3 rounded-full bg-transparent hover:bg-[#f472b6] transition duration-300"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/smartha2003"
          target="_blank"
          className="p-3 rounded-full bg-transparent hover:bg-[#f472b6] transition duration-300"
        >
          <GitHub />
        </a>
        <a
          href="https://www.behance.net/shubhada-martha"
          target="_blank"
          className="p-3 rounded-full bg-transparent hover:bg-[#f472b6] transition duration-300"
        >
          <Behance />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
