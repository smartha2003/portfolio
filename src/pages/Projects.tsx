// Projects.tsx
import React from 'react';
import { motion } from 'framer-motion';
import InfiniteScrollAnimation from '../components/InfiniteScrollAnimation'; // Import the Infinite Scroll Animation component

// Sample data for projects, replace with actual project details
const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    detailedDescription:
      'This project is about implementing a complex feature that enhances user experience by integrating seamless animations.',
    imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    detailedDescription:
      'This project focuses on creating an efficient backend system with robust APIs and data management solutions.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    title: 'Project Three',
    description: 'A brief description of Project Three.',
    detailedDescription:
      'An interactive web application designed to provide intuitive navigation and responsive design across devices.',
    imageUrl: 'https://via.placeholder.com/300',
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative isolate px-6 py-24 sm:py-32 lg:px-8 min-h-screen"
    >
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

      {/* Grid layout for project cards with descriptions below */}
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 mt-12 ">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out hover:border hover:border-[#f472b6] hover:shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Project Image */}
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Project Title and Short Description */}
            <div className="p-6">
              <h3 className="text-2xl font-special font-bold text-[#f472b6]">{project.title}</h3>
              <p className="font-special text-light-pink mt-2">{project.description}</p>
            </div>

            {/* Detailed Description Below */}
            <div className="px-6 pb-6">
              <p className="font-special text-gray-500">{project.detailedDescription}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
