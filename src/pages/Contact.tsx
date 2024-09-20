import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen p-10">
      <h2 className="text-3xl font-bold text-white-800 mb-4 p-10">Contact Me</h2>
      <div className="flex w-screen h-screen top-0 items-center justify-center right-1 -z-10">
            <div className="gradient"></div>
            <div className="gradient"></div>
          </div>
      <form className="space-y-4">
        {/* Contact Form Elements */}
      </form>
    </section>
  );
};

export default Contact;
