import { useState } from 'react';
import { motion } from 'framer-motion';
import CalShare from '../assets/CalShare.png';
import DailyMOOd from '../assets/DailyMOOd.png';
import GDSC from '../assets/laptop.png';
import SafeDose from '../assets/SafeDose.png';
import TruckPedia from '../assets/Truckpedia.png';
import DSLD from '../assets/DSLD.png';
import CrypGo from '../assets/CrypGo.png';
import PayVault from '../assets/PayVault.png';
// import { FaHeart } from 'react-icons/fa';

const csProjects = [
  {
    title: 'GDSC Website',
    description: 'Google Developer Student Club’s official website for events, resources, and community updates for students.',
    imageUrl: GDSC,
    link: 'https://gdscucdavis.com/',
    skills: ['React', 'TypeScript', 'TailwindCSS', 'Vercel', 'SQL'],
  },
  {
    title: 'TruckPedia',
    description: 'A mobile app for Truckpedia that streamlines communication for shippers, brokers, and carriers to assign loads and share updates.',
    imageUrl: TruckPedia,
    link: 'https://codelabdavis.medium.com/truckpedia-2970c9b05b16',
    skills: ['React Native', 'TypeScript', 'Node.js', 'Express'],
  },
  {
    title: 'DSLD R Package',
    description: 'Statistical and graphical tools designed to detect and measure discrimination and bias, including racial, gender, age, and other forms.',
    imageUrl: DSLD,
    link: 'https://cran.r-project.org/web/packages/dsld/index.html',
    skills: ['R', 'Python', 'Statistics', 'Machine Learning'],
  },
  {
    title: 'CalShare',
    description: 'CalShare simplifies calendar sharing and scheduling by syncing Apple and Google Calendars, displaying shared free time slots.',
    imageUrl: CalShare,
    link: 'https://github.com/NitishGupta2306/CalShare',
    skills: ['Swift', 'Firebase', 'Google Auth', 'Google & iOS Calendar API'],
  },
  {
    title: 'PayVault / FroggyVault',
    description: 'PayVault is a mobile wallet app that securely stores your debit and credit cards, ensuring your financial interests are protected.',
    imageUrl: PayVault,
    link: 'https://github.com/smartha2003/PayVault',
    skills: ['Swift', 'PhoneNumberKit', 'API implementation', 'Phone Verification via OTP'],
  },
  {
    title: 'CrypGo',
    description: 'CrypGo is a wallet for ResilientDB, allowing seamless access to accounts and transactions on the go.',
    imageUrl: CrypGo,
    link: 'https://blog.resilientdb.com/2023/12/17/CrypoGo.html',
    skills: ['React Native', 'ResilientDB', 'GraphQL', 'UI/UX Design', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'DailyMOOd',
    description: 'Daily MOOd is a cutting-edge mobile app designed to help UC Davis students better understand and manage their emotions effectively.',
    imageUrl: DailyMOOd,
    link: 'https://codelabdavis.medium.com/daily-mood-5aa946535a53',
    skills: ['React Native', 'Firebase', 'Mood Tracking'],
  },
  {
    title: 'SafeDose',
    description: 'SafeDose tracks opioid intake, charts dosage, alerts users of excess doses, and recommends seeing a doctor if symptoms of overdose.',
    imageUrl: SafeDose,
    link: 'https://devpost.com/software/safedose',
    skills: ['Swift', 'VisionKit', 'Swift Charts'],
  },
];

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? csProjects : csProjects.slice(0, 4);
  
  return (
    <section id="projects" className="py-16 px-6 lg:px-16 bg-[#0c001d] text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-quantico font-bold mb-8 hover:text-turquoise text-white text-center">Projects 💻</h2>
        <p className="text-lg text-gray-400 mb-12 text-center">
          Explore the transformative projects that showcase my expertise. Click on the project to learn more!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col bg-gray-800 bg-opacity-60 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }} // Add subtle pop-up animation on hover
              onClick={() => project.link && window.open(project.link, '_blank')} // Opens the link in a new tab
            >
              {/* <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click event
                    toggleLike(index);
                  }}
                  className={`text-lg p-2 rounded-full ${
                    likes.includes(index) ? 'text-red-500' : 'text-gray-400'
                  } hover:text-red-500 transition duration-300`}
                >
                  <FaHeart />
                </button>
              </div> */}

              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="bg-[#f472b6] text-white py-1 px-3 text-sm rounded-lg shadow hover:bg-white hover:text-black transition duration-300 ease-in-out"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 bg-[#f472b6] text-white font-semibold rounded-full hover:bg-[#fde68a] hover:text-black transition duration-300"
            >
              View More ▼
            </button>
          </div>
        )}

        {showAll && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(false)}
              className="px-6 py-2 bg-[#f472b6] text-white font-semibold rounded-full hover:bg-[#fde68a] hover:text-black transition duration-300"
            >
              Show Less ▲
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;