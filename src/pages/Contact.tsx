import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative isolate px-6 py-24 sm:py-32 lg:px-8 min-h-screen">
      {/* Gradient Background Positioned Absolutely Behind the Form */}
      <div className="absolute inset-0 -z-10 flex">
        <div className="gradient w-full h-full"></div>
        <div className="gradient w-full h-full"></div>
      </div>

      <div className="mx-auto max-w-2xl">
        <h2 className="font-bebas text-8xl font-bold mb-4 pt-1 text-center leading-tight tracking-widest-custom transition-transform-color duration-300 ease hover:transform hover:-translate-y-2 hover:text-[#f472b6]">Contact Me</h2>
      </div>

      <form action="https://fabform.io/f/xxxxx" method="post" className="mx-auto mt-16 max-w-xl sm:mt-20 space-y-4">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="text-left">
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full bg-transparent rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-[#f472b6] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="text-left">
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full bg-transparent rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-[#f472b6] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2 text-left">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full bg-transparent rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-[#f472b6] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2 text-left">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full bg-transparent rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-[#f472b6] sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-light-pink px-3.5 py-2.5 text-center text-sm font-semibold text-dark-slate-grey shadow-sm hover:bg-[#f472b6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f472b6]"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
