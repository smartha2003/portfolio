// Footer.tsx
import React from 'react';
import LinkedIn from "../assets/linkedin.png";
import Behance from "../assets/behance.png";
import GitHub from "../assets/github-sign.png";

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="mt-20 w-full flex flex-row justify-center items-center  relative border-t"
    >
      <div className="col flex flex-col justify-center items-center p-6 w-1/4 text-white">
        {/* <h3 className="font-semibold text-xl text-center">Shubhada Martha</h3> */}
        <p className="text-gray-400">
          Made with <span style={{ color: '#BA6573' }}>❤</span> by Shubhada
        </p>
        <div className="social flex gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/shubhada-martha/"
            target="_blank"
            className="link bg-gray-black rounded-lg p-2"
          >
            <img
              src={LinkedIn}
              alt="CodePen"
              className="h-6"
            />
          </a>
          <a
            href="https://github.com/smartha2003"
            target="_blank"
            className="link bg-gray-black rounded-lg p-2"
          >
            <img
              src={GitHub}
              alt="Twitter"
              className="h-6"
            />
          </a>
          <a
            href="https://www.behance.net/shubhada-martha"
            target="_blank"
            className="link bg-gray-black rounded-lg p-2"
          >
            <img
              src={Behance}
              alt="YouTube"
              className="h-6"
            />
          </a>
        </div>
        <p className="text-sm text-gray-200 mt-4">2024 © All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
