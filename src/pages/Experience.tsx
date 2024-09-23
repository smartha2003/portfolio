// Experience.tsx
import React from 'react';
import { motion } from 'framer-motion';
import InfiniteScrollAnimation from '../components/InfiniteScrollAnimation'; // Import the new component

// Sample data for experience items, replace with actual details
const experiences = [
    
    {
        role: 'Frontend Developer',
        company: 'GBCS Group',
        description:
          'Developing and maintaining the frontend of the company website using React and Tailwind CSS.',
        duration: 'Sep 2024 - Present',
    },
    {
        role: 'Technical Director',
        company: 'GDSC',
        description:
          'Playing a pivotal role in guiding teams, designing educational programs, and organizing impactful events that promote learning and community engagement.',
        duration: 'Aug 2024 - Present',
    },
    {
    role: 'Marketing Lead',
    company: 'CS Tutoring Club at UC Davis',
    description:
      'Spearhead the club’s promotional efforts, driving engagement through creative strategies and enhancing the club’s visibility within the UC Davis community.',
    duration: 'Jul 2023 - Present',
  },
  {
    role: 'Product Manager',
    company: 'GDSC',
    description:
      'Led the revamp of the GDSC and DevFest websites, utilizing TypeScript and hosting the platforms on Google Cloud with a SQL backend. This project aimed to enhance the websites performance, usability, and overall user experience.',
    duration: 'Oct 2023 - May 2024',
  },
  {
    role: 'Software Developer and UI/UX Designer',
    company: 'Expo Lab',
    description:
      'Engaged in various roles, from designing app prototypes to developing intuitive user interfaces. My work focused on creating engaging, user-friendly experiences while ensuring detailed project documentation and seamless front-end functionality.',
    duration: 'May 2020 - Dec 2020',
  },
  {
    role: 'Software Developer',
    company: 'TruckPedia',
    description:
      'Contributed to the development of a React Native mobile app for TruckPedia, transforming their existing website designs into a cohesive and intuitive mobile experience. This project focused on ensuring seamless integration and delivering a consistent user experience across platforms.',
    duration: 'Oct 2023 - Dec 2023',
  },
  {
    role: 'Research Assistant',
    company: 'Professor Norman Matloff',
    description:
      'Contributed to the development of the DSLD R package, now available on CRAN. This package aims to democratize the critical processes of bias detection and mitigation, making these advanced techniques accessible to individuals with varying levels of expertise in statistics and machine learning.',
    duration: 'Jun 2023 - Sep 2023',
  },
  {
    role: 'Software Developer',
    company: 'CodeLab',
    description:
      'Collaborated on developing Daily MOOd, a React Native mobile app designed to encourage self-care among UC Davis students. The app helps students track their moods, organize their thoughts, and slow down during the fast-paced quarter system, fostering a mindful daily routine.',
    duration: 'Jan 2023 - Jun 2023',
  },
  {
    role: 'UI/UX Designer',
    company: 'Design Interactive',
    description:
      'Played a key role in ideating, researching, and redesigning the User Interface of the Hinge mobile app. Our team followed a user-centered design process, guiding us through every phase of the redesign to create a more engaging and intuitive experience for users.',
    duration: 'Mar 2022 - May 2022',
  },
];

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative isolate px-6 py-24 sm:py-32 lg:px-8 min-h-screen"
    >
      {/* Gradient Background Positioned Absolutely Behind the Form */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="gradient w-full h-full transform translate-x-1/2 translate-y-1/2"></div>
        <div className="gradient w-full h-full transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="mx-auto max-w-2xl">
        <h2 className="font-bebas text-8xl font-bold mb-4 pt-1 text-center leading-tight tracking-widest-custom transition-transform-color duration-300 ease hover:transform hover:-translate-y-2 hover:text-[#f472b6]">
          Experience 🌐
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative mt-12">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[4px] bg-gray-300"></div>

        {/* Experience Cards */}
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className={`flex items-center mb-12 ${
              index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Experience Card */}
            <div
              className={`relative p-4 rounded-lg shadow-lg w-[45%] hover:border hover:border-[#f472b6] hover:shadow-xl ${
                index % 2 === 0
                  ? 'mr-8 items-start text-left'
                  : 'ml-8 items-end text-right'
              } flex flex-col backdrop-blur-md duration-300 ease hover:transform hover:-translate-y-2`}
            >
              {/* Arrow */}
              <div
                className={`absolute top-5 w-0 h-0 border-8 border-transparent ${
                  index % 2 === 0
                    ? 'right-full border-r-white'
                    : 'left-full border-l-white'
                }`}
              ></div>
              <h3 className="text-xl font-special font-bold text-[#f472b6] transition-transform-color duration-300 ease hover:transform hover:-translate-y-2 hover:text-[#fde68a]">
                {experience.role}
              </h3>
              <p className="text-white font-special font-medium">
                {experience.company}
              </p>
              <p className="text-light-pink font-special text-sm mt-1">
                {experience.duration}
              </p>
              <p className="text-white font-special mt-2">
                {experience.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Infinite Scroll Animation */}
      <InfiniteScrollAnimation />
    </section>
  );
};

export default Experience;
