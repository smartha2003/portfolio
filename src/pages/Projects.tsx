// Projects.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Assuming you are using react-router for navigation

// Sample data for projects, replace with actual project details
// const designProjects = [
//   {
//     title: 'CS Tutoring Club',
//     description: 'A brief description of Design Project One.',
//     detailedDescription:
//       'This design project focuses on creating a visually appealing user interface with a focus on color and typography.',
//     imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
//     link: 'https://example.com/design-project-one',
//   },
//   {
//     title: 'CalShare',
//     description: 'A brief description of CS Project One.',
//     detailedDescription:
//       'This project is about implementing a complex feature that enhances user experience by integrating seamless animations.',
//     imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
//     link: 'https://example.com/design-project-one',
//   },
//   {
//     title: 'Kultrify',
//     description: 'A brief description of Design Project Two.',
//     detailedDescription:
//       'This project involves creating engaging graphics and animations for a marketing campaign.',
//     imageUrl: 'https://via.placeholder.com/300',
//     link: 'https://example.com/design-project-one',
//   },
//   {
//     title: 'FarmChain',
//     description: 'A brief description of CS Project Three.',
//     detailedDescription:
//       'An interactive web application designed to provide intuitive navigation and responsive design across devices.',
//     imageUrl: 'https://via.placeholder.com/300',
//     link: 'https://example.com/design-project-one',
//   },
//   {
//     title: 'RideSync',
//     description: 'A brief description of CS Project Three.',
//     detailedDescription:
//       'An interactive web application designed to provide intuitive navigation and responsive design across devices.',
//     imageUrl: 'https://via.placeholder.com/300',
//     link: 'https://example.com/design-project-one',
//   },
//   {
//     title: 'Naruto: Shuriken Zine',
//     description: 'A brief description of CS Project Three.',
//     detailedDescription:
//       'An interactive web application designed to provide intuitive navigation and responsive design across devices.',
//     imageUrl: 'https://via.placeholder.com/300',
//     link: 'https://example.com/design-project-one',
//   },
//   {
//     title: 'The Weeknd Poster',
//     description: 'A brief description of CS Project Three.',
//     detailedDescription:
//       'An interactive web application designed to provide intuitive navigation and responsive design across devices.',
//     imageUrl: 'https://via.placeholder.com/300',
//     link: 'https://example.com/design-project-one',
//   },
//   {
//     title: 'Typography Poster',
//     description: 'A brief description of CS Project Three.',
//     detailedDescription:
//       'An interactive web application designed to provide intuitive navigation and responsive design across devices.',
//     imageUrl: 'https://via.placeholder.com/300',
//     link: 'https://example.com/design-project-one',
//   },
// ];

const csProjects = [
  {
    title: 'GDSC Website',
    description: 'Google Developer Student Club’s official website for events, resources, and community updates for students.',
    imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
    link: 'https://gdscucdavis.com/',
  },{
    title: 'TruckPedia',
    description: 'A mobile app for Truckpedia that streamlines communication for shippers, brokers, and carriers to assign loads and share updates.',
    imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
    link: 'https://codelabdavis.medium.com/truckpedia-2970c9b05b16',
  },
  {
    title: 'DSLD',
    description: 'Statistical and graphical tools designed to detect and measure discrimination and bias, including racial, gender, age, and other forms.',
    imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
    link: 'https://cran.r-project.org/web/packages/dsld/index.html',
  },
  {
    title: 'CalShare',
    description: 'CalShare simplifies calendar sharing and scheduling by syncing Apple and Google Calendars, displaying shared free time slots.',
    imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
    link: 'https://github.com/NitishGupta2306/CalShare',
  },
  {
    title: 'PiggyBank',
    description: 'PiggyBank is a mobile wallet app that securely stores your debit and credit cards, ensuring your financial interests are protected.',
    imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
    link: 'https://github.com/macintAsh1984/PiggyBank',
  },
  {
    title: 'CrypGo',
    description: 'CrypGo is a wallet for ResilientDB, allowing seamless access to accounts and transactions on the go.!',
    imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
    link: 'https://blog.resilientdb.com/2023/12/17/CrypoGo.html',
  },
  // {
  //   title: 'Mitigating Bias in Machine Learning: A Logistic Regression Approach',
  //   description: 'A brief description of CS Project One.',
  //   detailedDescription:
  //     'This project is about implementing a complex feature that enhances user experience by integrating seamless animations.',
  //   imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
  //   link: 'https://example.com/design-project-one',
  // },
  {
    title: 'DailyMOOd',
    description: 'Daily MOOd is a cutting-edge mobile app designed to help UC Davis students better understand and manage their emotions effectively.',
    imageUrl: 'https://via.placeholder.com/300',
    link: 'https://codelabdavis.medium.com/daily-mood-5aa946535a53',
  },
  {
    title: 'SafeDose',
    description: 'SafeDose tracks opioid intake, charts dosage, alerts users of excess doses, and recommends seeing a doctor if symptoms of overdose.',
    imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
    link: 'https://devpost.com/software/safedose',
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
      {/* <div className="mt-12">
        <h3 className="text-4xl font-bold text-center text-light-pink mb-6">Design Projects</h3>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {designProjects.map((project, index) => (
            <motion.div
              key={index}
              className="shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out hover:border hover:border-[#f472b6] hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => window.open(project.link, '_blank')} // Opens the link in a new tab
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
      </div> */}

      {/* Computer Science Projects Section */}
      <div className="mt-24">
        {/* <h3 className="text-4xl font-bold text-center text-light-pink mb-6">Computer Science Projects</h3> */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {csProjects.map((project, index) => (
            <motion.div
              key={index}
              className="shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out hover:border hover:border-[#f472b6] hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => window.open(project.link, '_blank')} // Opens the link in a new tab
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
        {/* <div className="text-center mt-6">
          <button
            onClick={() => navigate('')}
            className="text-dark-slate-grey underline hover:text-pink-500"
          >
            View All Computer Science Projects
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
