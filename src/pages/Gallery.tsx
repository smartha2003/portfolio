import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Assuming you are using react-router for navigation
import CalShare from '../assets/CalShare.png';
import DailyMOOd from '../assets/DailyMOOd.png';
import GDSC from '../assets/laptop.png';
import SafeDose from '../assets/SafeDose.png';
import TruckPedia from '../assets/Truckpedia.png';
import DSLD from '../assets/DSLD.png';
import CrypGo from '../assets/CrypGo.png';
import PayVault from '../assets/PayVault.png';

const csProjects = [
  {
    title: 'GDSC Website',
    imageUrl: GDSC,
    link: 'https://gdscucdavis.com/',
  },
  {
    title: 'TruckPedia',
    imageUrl: TruckPedia,
    link: 'https://codelabdavis.medium.com/truckpedia-2970c9b05b16',
  },
  {
    title: 'DSLD R Package',
    imageUrl: DSLD,
    link: 'https://cran.r-project.org/web/packages/dsld/index.html',
  },
  {
    title: 'CalShare',
    imageUrl: CalShare,
    link: 'https://github.com/NitishGupta2306/CalShare',
  },
  {
    title: 'PayVault',
    imageUrl: PayVault,
    link: 'https://github.com/smartha2003/PayVault',
  },
  {
    title: 'CrypGo',
    imageUrl: CrypGo,
    link: 'https://blog.resilientdb.com/2023/12/17/CrypoGo.html',
  },
  {
    title: 'DailyMOOd',
    imageUrl: DailyMOOd,
    link: 'https://codelabdavis.medium.com/daily-mood-5aa946535a53',
  },
  {
    title: 'SafeDose',
    imageUrl: SafeDose,
    link: 'https://devpost.com/software/safedose',
  },
];

const Gallery: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="gallery" className="relative isolate px-6 py-24 sm:py-32 lg:px-8 min-h-screen">
      {/* Gradient Background Positioned Absolutely Behind the Form */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="gradient w-full h-full transform translate-x-1/2 translate-y-1/2"></div>
        <div className="gradient w-full h-full transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="mx-auto max-w-2xl">
        <h2 className="font-silkscreen text-5xl font-bold mb-4 pt-1 text-center leading-tight tracking-widest-custom transition-transform-color duration-300 ease hover:transform hover:-translate-y-2 hover:text-[#f472b6]">
          Gallery 📷
        </h2>
      </div>

      {/* Horizontal Scrollable Gallery */}
      <div className="mt-24 overflow-x-auto">
        <div className="flex space-x-6">
          {csProjects.map((project, index) => (
            <motion.div
              key={index}
              className="shadow-lg rounded-lg overflow-hidden min-w-[300px] transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-xl group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => window.open(project.link, '_blank')} // Opens the link in a new tab
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-60 object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
