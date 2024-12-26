import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    company: 'GBCS Group',
    role: 'Full Stack Intern',
    description:
      'Spearheading the development and enhancement of the company’s website frontend using React and Tailwind CSS. Streamlined workflows and automated critical processes with TypeScript and GraphQL, ensuring optimal performance and scalability for internal tools. Demonstrating strong problem-solving skills to drive innovative web solutions.',
    duration: 'Sep 2024 – Present',
    location: 'Remote',
    type: 'Part-time',
  },
  {
    company: 'Google Developer Student Club (GDSC)',
    role: 'Technical Director',
    description:
      'Strategically leading technical initiatives and mentoring student teams to create impactful projects. Designed educational programs that boosted community engagement and equipped students with cutting-edge skills in web and app development. Organized technical events, fostering an inclusive learning environment at UC Davis.',
    duration: 'Aug 2024 – Present',
    location: 'UC Davis, California',
    type: 'Leadership',
  },
  {
    company: 'CS Tutoring Club at UC Davis',
    role: 'VP of Marketing',
    description:
      'Amplified club visibility by driving a 96.7% increase in Instagram followers within three months. Executed strategic marketing campaigns with visually appealing flyers and social media content. Delivered tutoring sessions in Python, C++, Algorithms, and Assembly, employing creative methods to simplify complex topics for students.',
    duration: 'Jul 2023 – Present',
    location: 'UC Davis, California',
    type: 'Part-time',
  },
  {
    company: 'Google Developer Student Club (GDSC)',
    role: 'Product Manager',
    description:
      'Successfully revamped the GDSC and DevFest websites using TypeScript and Google Cloud, significantly improving their usability and user experience. Led a team of three under Agile methodology, ensuring seamless collaboration with designers and adherence to project timelines. Delivered industry-level project management expertise under the guidance of the Technical Director.',
    duration: 'Oct 2023 – May 2024',
    location: 'UC Davis, California',
    type: 'Project-based',
  },
  {
    company: 'Expo Lab',
    role: 'Software Developer and UI/UX Designer',
    description:
      'Designed and developed user-centric app prototypes, implementing intuitive interfaces aligned with best UI/UX practices. Contributed to research-focused initiatives by delivering efficient and elegant solutions tailored to exploratory systems.',
    duration: 'May 2023 – Dec 2023',
    location: 'Remote',
    type: 'Research',
  },
  {
    company: 'TruckPedia',
    role: 'Full Stack Intern',
    description:
      'Engineered mobile app functionalities in React Native, transforming existing website designs into a cohesive mobile experience. Collaborated directly with the TruckPedia team to understand business needs and deliver a robust and scalable application that surpassed client expectations.',
    duration: 'Oct 2023 – Dec 2023',
    location: 'Remote',
    type: 'Part-time',
  },
  {
    company: 'Professor Norman Matloff',
    role: 'Machine Learning Research Assistant',
    description:
      'Played an important role in the development of the DSLD R package, integrating statistical and graphical tools to measure discrimination and bias. Optimized data analysis processes using Python and rpy2, enhancing the package\'s performance and utility for real-world applications.',
    duration: 'Jun 2023 – Sep 2023',
    location: 'UC Davis, California',
    type: 'Research',
  },
  {
    company: 'CodeLab',
    role: 'Software Developer',
    description:
      'Developed features for TruckPedia’s React Native mobile app, ensuring seamless integration and enhanced usability. Collaborated with clients to refine requirements and deliver a polished product tailored to their business objectives.',
    duration: 'Jan 2023 – Jun 2023',
    location: 'Davis, California',
    type: 'Part-time',
  },
  {
    company: 'Design Interactive',
    role: 'UI/UX Designer',
    description:
      'Redesigned the UI for the Hinge mobile app, incorporating user research to improve engagement and retention. Produced visually compelling designs and prototypes, showcasing a deep understanding of user behavior and design trends.',
    duration: 'Mar 2022 – May 2022',
    location: 'Remote',
    type: 'Part-time',
  },
];

const Experience = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 4);

  return (
    <section id="experience" className="py-16 px-6 lg:px-16 bg-[#0c001d] text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-quantico font-bold mb-8 hover:text-[#f472b6]">Technical Experience 🌐</h2>
        <p className="text-lg text-gray-400 mb-8">
          Embarking on a relentless pursuit of growth, leadership, and excellence opportunities.
        </p>
        <div className="flex gap-4 mb-12">
          <a
            href="https://www.linkedin.com/in/shubhada-martha/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#f472b6] text-white rounded-full text-sm hover:bg-[#fde68a] hover:text-black transition"
          >
            LinkedIn
          </a>
          <a
            href="public/ShubhadaMartha_Resume.pdf"
            download
            className="px-6 py-2 bg-[#f472b6] text-white rounded-full text-sm hover:bg-[#fde68a] hover:text-black transition"
          >
            View Resume
          </a>
        </div>
        {displayedExperiences.map((exp, index) => (
          <div
            key={index}
            className="mb-12 pb-8 border-b border-gray-700 last:border-0 flex flex-col md:flex-row md:items-start"
          >
            <div className="flex-shrink-0 w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4 md:mb-0">
              <FaBriefcase className="text-[#f472b6] text-2xl" />
            </div>
            <div className="flex-1 md:ml-6 text-left">
              <h3 className="text-xl font-semibold text-[#f472b6]">{exp.company}</h3>
              <p className="text-lg font-bold mb-2">{exp.role}</p>
              <p className="text-gray-400 text-sm mb-4">{exp.description}</p>
              <div className="flex items-center text-sm text-gray-500 gap-4">
                <div className="flex items-center gap-2">
                  <FaBriefcase />
                  <span>{exp.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt />
                  <span>{exp.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt />
                  <span>{exp.duration}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-8 px-6 py-2 bg-[#f472b6] text-white rounded-full text-sm hover:bg-[#fde68a] hover:text-black transition"
          >
            View More
          </button>
        )}
      </div>
    </section>
  );
};

export default Experience;
