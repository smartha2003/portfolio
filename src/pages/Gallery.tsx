import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import DSLD from '../assets/dsld_symposium.webp';
import AISC from '../assets/AISC_Case_Study.jpeg';
import CodeLab from '../assets/CodeLab_minigolf.jpg';
import CodeLab2 from '../assets/CodeLab.png';
import CSTutoring2 from '../assets/CSTutoring_Tabling_wAditya.jpg';
import GDSC from '../assets/GDSC_midyear_Group.jpg';
import GDSC2 from '../assets/GDSC_midyear_Showcase.jpeg';
import HackDavis from '../assets/HackDavis.jpg';
import AIFS from '../assets/AIFS Hackathon.jpeg';
import HackDavis2 from '../assets/Me_w:Cow.jpeg';

const csProjects = [
  {
    title: 'Aggie Day Tabling',
    imageUrl: CSTutoring2,
    link: '',
  },
  {
    title: 'DSLD Statistics Symposium',
    imageUrl: DSLD,
    link: 'https://cran.r-project.org/web/packages/dsld/index.html',
  },
  {
    title: 'AIFS Hackathon Winner',
    imageUrl: AIFS,
    link: '',
  },
  {
    title: 'GDSC Mid Year Showcase',
    imageUrl: GDSC2,
    link: '',
  },
  {
    title: 'HackDavis 2024',
    imageUrl: HackDavis,
    link: 'https://devpost.com/software/safedose',
  },
  {
    title: 'HackDavis Cow',
    imageUrl: HackDavis2,
    link: '',
  },
  {
    title: 'CodeLab Social',
    imageUrl: CodeLab,
    link: '',
  },
  {
    title: 'AISC Case Study',
    imageUrl: AISC,
    link: '',
  },
  {
    title: 'CodeLab',
    imageUrl: CodeLab2,
    link: '',
  },
  {
    title: 'GDSC Mid Year Showcase',
    imageUrl: GDSC,
    link: '',
  },
];

const Gallery: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-16 px-6 lg:px-16 bg-[#0c001d] text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-quantico font-bold mb-8 hover:text-turquoise text-white ">Gallery 📷</h2>
        <p className="text-lg text-gray-400 mb-8">
          Snapshots of my journey with innovation and collaboration in Tech.
        </p>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#f472b6]  hover:text-[#f472b6] text-white p-2 rounded-full shadow hover:bg-white transition hidden md:block z-10"
          >
            ◀
          </button>

          {/* Scrollable Gallery */}
          <div
            ref={galleryRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          >
            {csProjects.map((project, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 snap-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-full h-48">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-md text-turquoise">{project.title}</h3>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#f472b6] text-white hover:text-[#f472b6] p-2 rounded-full shadow hover:bg-white transition hidden md:block z-10"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
