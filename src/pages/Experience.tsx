import React from 'react';
import { motion } from 'framer-motion';

// Sample data for experience items, replace with actual details
const experiences = [
  {
    role: 'Software Developer',
    company: 'GBCS Group',
    description: 'Developing and maintaining the frontend of the company website using React and Tailwind CSS.',
    duration: 'Sep 2024 - Present',
    skills: ['React', 'Tailwind CSS', 'TypeScript', 'GraphQL', 'Microsoft Azure'],
  },
  {
    role: 'Technical Director',
    company: 'Google Developer Student Club (GDSC)',
    description: 'Guiding teams, designing educational programs, and organizing impactful events that promote learning and community engagement.',
    duration: 'Aug 2024 - Present',
    skills: ['Leadership', 'Event Planning', 'Web Development', 'Team Management'],
  },
  {
    role: 'VP of Marketing',
    company: 'CS Tutoring Club at UC Davis',
    description: 'Spearhead the club’s promotional efforts, driving engagement through creative strategies.',
    duration: 'Jul 2023 - Present',
    skills: ['Marketing', 'Content Creation', 'FIGMA', 'Social Media Strategy'],
  },
  {
    role: 'Product Manager',
    company: 'Google Developer Student Club (GDSC)',
    description: 'Led the revamp of the GDSC and DevFest websites, enhancing performance, usability, and user experience.',
    duration: 'Oct 2023 - May 2024',
    skills: ['Product Management', 'TypeScript', 'Google Cloud', 'SQL'],
  },
  {
    role: 'Software Developer and UI/UX Designer',
    company: 'Expo Lab',
    description: 'Designed app prototypes and developed intuitive user interfaces.',
    duration: 'May 2023 - Dec 2023',
    skills: ['UI/UX Design', 'React', 'HTML', 'CSS', 'Javascript', 'GraphQL'],
  },
  {
    role: 'Software Developer',
    company: 'TruckPedia',
    description: 'Developed a React Native mobile app for TruckPedia, transforming website designs into a mobile experience.',
    duration: 'Oct 2023 - Dec 2023',
    skills: ['React Native', 'TypeScript', 'Express', 'Axios'],
  },
  {
    role: 'Research Assistant',
    company: 'Professor Norman Matloff',
    description: 'Contributed to the development of the DSLD R package available on CRAN.',
    duration: 'Jun 2023 - Sep 2023',
    skills: ['R', 'Python', 'rpy2', 'Plotly', 'Pandas', 'Data Science', 'Statistical Analysis'],
  },
  {
    role: 'Software Developer',
    company: 'CodeLab',
    description: 'Developed Daily MOOd, a React Native mobile app for self-care and mood tracking.',
    duration: 'Jan 2023 - Jun 2023',
    skills: ['React Native', 'Google Auth', 'MongoDB', 'Mobile Development'],
  },
  {
    role: 'UI/UX Designer',
    company: 'Design Interactive',
    description: 'Redesigned the User Interface of the Hinge mobile app, improving user engagement and experience.',
    duration: 'Mar 2022 - May 2022',
    skills: ['FIGMA', 'Adobe', 'Canva','UI Design', 'Prototyping', 'User Research', 'Mobile App Design'],
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
        <h2 className="font-silkscreen text-5xl font-bold mb-4 pt-1 text-center leading-tight tracking-widest-custom transition-transform-color duration-300 ease hover:transform hover:-translate-y-2 hover:text-[#f472b6]">
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
            } group`}
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
              <h3 className="text-xl font-quantico font-bold text-[#f472b6] transition-transform-color duration-300 ease hover:transform hover:-translate-y-2 hover:text-[#fde68a]">
                {experience.role}
              </h3>
              <p className="text-white font-quantico font-medium">
                {experience.company}
              </p>
              <p className="text-light-pink font-quantico text-sm mt-1">
                {experience.duration}
              </p>

              {/* Description hidden on hover */}
              <p className="text-white font-quantico mt-2 group-hover:hidden">
                {experience.description}
              </p>

              {/* Skills displayed on hover */}
              <ul className="mt-4 hidden group-hover:flex gap-2 flex-wrap">
                {experience.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="bg-[#f472b6] text-white py-1 px-3 rounded-lg shadow hover:bg-[#fde68a] hover:text-black transition duration-300 ease-in-out">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Infinite Scroll Animation */}
      {/* <InfiniteScrollAnimation /> */}
    </section>
  );
};

export default Experience;
