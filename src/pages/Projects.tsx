import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen p-10">
      <h2 className="text-3xl font-bold text-white-800 mb-4 p-10">My Projects</h2>
      <div className="flex w-screen h-screen top-0 left-0 -z-10">
            <div className="gradient"></div>
            <div className="gradient"></div>
          </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Project Cards */}
      </div>
    </section>
  );
};

export default Projects;
