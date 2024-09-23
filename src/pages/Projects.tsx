// Projects.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Assuming you are using react-router for navigation

// Sample data for projects, replace with actual project details
const designProjects = [
  {
    title: 'CS Tutoring Club',
    description: 'A brief description of Design Project One.',
    detailedDescription:
      'This design project focuses on creating a visually appealing user interface with a focus on color and typography.',
    imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
  },
  {
    title: 'CalShare',
    description: 'A brief description of CS Project One.',
    detailedDescription:
      'This project is about implementing a complex feature that enhances user experience by integrating seamless animations.',
    imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
  },
  {
    title: 'Kultrify',
    description: 'A brief description of Design Project Two.',
    detailedDescription:
      'This project involves creating engaging graphics and animations for a marketing campaign.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    title: 'FarmChain',
    description: 'A brief description of CS Project Three.',
    detailedDescription:
      'An interactive web application designed to provide intuitive navigation and responsive design across devices.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    title: 'RideSync',
    description: 'A brief description of CS Project Three.',
    detailedDescription:
      'An interactive web application designed to provide intuitive navigation and responsive design across devices.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    title: 'Naruto: Shuriken Zine',
    description: 'A brief description of CS Project Three.',
    detailedDescription:
      'An interactive web application designed to provide intuitive navigation and responsive design across devices.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    title: 'The Weeknd Poster',
    description: 'A brief description of CS Project Three.',
    detailedDescription:
      'An interactive web application designed to provide intuitive navigation and responsive design across devices.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    title: 'Typography Poster',
    description: 'A brief description of CS Project Three.',
    detailedDescription:
      'An interactive web application designed to provide intuitive navigation and responsive design across devices.',
    imageUrl: 'https://via.placeholder.com/300',
  },
];

const csProjects = [
  {
    title: 'CalShare',
    description: 'A brief description of CS Project One.',
    detailedDescription:
      'This project is about implementing a complex feature that enhances user experience by integrating seamless animations.',
    imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
  },
  {
    title: 'SafeDose',
    description: 'A brief description of CS Project One.',
    detailedDescription:
      'This project is about implementing a complex feature that enhances user experience by integrating seamless animations.',
    imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
  },
  {
    title: 'PayVault / PiggyBank',
    description: 'A brief description of CS Project One.',
    detailedDescription:
      'This project is about implementing a complex feature that enhances user experience by integrating seamless animations.',
    imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
  },
  {
    title: 'CrypGo',
    description: 'A brief description of CS Project One.',
    detailedDescription:
      'This project is about implementing a complex feature that enhances user experience by integrating seamless animations.',
    imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
  },
  {
    title: 'GDSC Website',
    description: 'A brief description of CS Project One.',
    detailedDescription:
      'This project is about implementing a complex feature that enhances user experience by integrating seamless animations.',
    imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
  },
  {
    title: 'TruckPedia',
    description: 'A brief description of CS Project One.',
    detailedDescription:
      'This project is about implementing a complex feature that enhances user experience by integrating seamless animations.',
    imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
  },
  {
    title: 'DSLD',
    description: 'A brief description of CS Project One.',
    detailedDescription:
      'This project is about implementing a complex feature that enhances user experience by integrating seamless animations.',
    imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
  },
  {
    title: 'Mitigating Bias in Machine Learning: A Logistic Regression Approach',
    description: 'A brief description of CS Project One.',
    detailedDescription:
      'This project is about implementing a complex feature that enhances user experience by integrating seamless animations.',
    imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
  },
  {
    title: 'WiseGenie',
    description: 'A brief description of CS Project Two.',
    detailedDescription:
      'This project focuses on creating an efficient backend system with robust APIs and data management solutions.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    title: 'DailyMOOd',
    description: 'A brief description of CS Project Three.',
    detailedDescription:
      'An interactive web application designed to provide intuitive navigation and responsive design across devices.',
    imageUrl: 'https://via.placeholder.com/300',
  },
];

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="relative isolate px-6 py-24 sm:py-32 lg:px-8 min-h-screen">
      {/* Gradient Background Positioned Absolutely Behind the Form */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="gradient w-full h-full transform translate-x-1/2 translate-y-1/2"></div>
        <div className="gradient w-full h-full transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="mx-auto max-w-2xl">
        <h2 className="font-bebas text-8xl font-bold mb-4 pt-1 text-center leading-tight tracking-widest-custom transition-transform-color duration-300 ease hover:transform hover:-translate-y-2 hover:text-[#f472b6]">
          Projects 💻
        </h2>
      </div>

      {/* Design Projects Section */}
      <div className="mt-12">
        <h3 className="text-4xl font-bold text-center text-light-pink mb-6">Design Projects</h3>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {designProjects.map((project, index) => (
            <motion.div
              key={index}
              className="shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out hover:border hover:border-[#f472b6] hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-special font-bold text-[#f472b6]">{project.title}</h3>
                <p className="font-special text-light-pink mt-2">{project.description}</p>
              </div>
              <div className="px-6 pb-6">
                <p className="font-special text-gray-500">{project.detailedDescription}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('')}
            className="text-dark-slate-grey underline hover:text-pink-500"
          >
            View All Design Projects
          </button>
        </div>
      </div>

      {/* Computer Science Projects Section */}
      <div className="mt-24">
        <h3 className="text-4xl font-bold text-center text-light-pink mb-6">Computer Science Projects</h3>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {csProjects.map((project, index) => (
            <motion.div
              key={index}
              className="shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out hover:border hover:border-[#f472b6] hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-special font-bold text-[#f472b6]">{project.title}</h3>
                <p className="font-special text-light-pink mt-2">{project.description}</p>
              </div>
              <div className="px-6 pb-6">
                <p className="font-special text-gray-500">{project.detailedDescription}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('')}
            className="text-dark-slate-grey underline hover:text-pink-500"
          >
            View All Computer Science Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
