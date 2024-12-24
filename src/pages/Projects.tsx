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
    description: 'Google Developer Student Club’s official website for events, resources, and community updates for students.',
    imageUrl: GDSC,
    link: 'https://gdscucdavis.com/',
    skills: ['React', 'Typescript.js', 'TailwindCSS', 'Vercel', 'SQL'],
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
    skills: ['Swift', 'Firebase', 'Google Authentification', 'Google & iOS Calendar API'],
  },
  {
    title: 'PayVault',
    description: 'PayVault is a mobile wallet app that securely stores your debit and credit cards, ensuring your financial interests are protected.',
    imageUrl: PayVault,
    link: 'https://github.com/smartha2003/PayVault',
    skills: ['Swift', 'PhoneNumberKit', 'API implementation', 'Phone Verification via OTP'],
  },
  {
    title: 'CrypGo',
    description: 'CrypGo is a wallet for ResilientDB, allowing seamless access to accounts and transactions on the go.!',
    imageUrl: CrypGo,
    link: 'https://blog.resilientdb.com/2023/12/17/CrypoGo.html',
    skills: ['React Native', 'ResilientDB', 'GraphQL', 'UI/UX Design', 'HTML', 'CSS', 'Javascript'],
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
  const navigate = useNavigate();

  return (
    <section id="projects" className="relative isolate px-6 py-24 sm:py-32 lg:px-8 min-h-screen">
      {/* Gradient Background Positioned Absolutely Behind the Form */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="gradient w-full h-full transform translate-x-1/2 translate-y-1/2"></div>
        <div className="gradient w-full h-full transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="mx-auto max-w-2xl">
        <h2 className="font-silkscreen text-5xl font-bold mb-4 pt-1 text-center leading-tight tracking-widest-custom transition-transform-color duration-300 ease hover:transform hover:-translate-y-2 hover:text-[#f472b6]">
          Projects 💻
        </h2>
      </div>

      {/* Computer Science Projects Section */}
      <div className="mt-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {csProjects.map((project, index) => (
            <motion.div
              key={index}
              className="shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out hover:border hover:border-[#f472b6] hover:shadow-xl group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => window.open(project.link, '_blank')} // Opens the link in a new tab
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-quantico font-bold text-[#f472b6]">{project.title}</h3>
                
                {/* Description hidden on hover */}
                <p className="font-quantico text-light-pink mt-2 group-hover:hidden">
                  {project.description}
                </p>

                {/* Skills displayed on hover */}
                <ul className="mt-2 hidden group-hover:flex gap-2 flex-wrap">
                  {project.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="bg-[#f472b6] text-white py-1 px-3 rounded-lg shadow hover:bg-[#fde68a] hover:text-black transition duration-300 ease-in-out">
                      {skill}
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
