import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [hover, setHover] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_i49kw1g', // Replace with your EmailJS service ID
          'template_197qjy8', // Replace with your EmailJS template ID
          form.current,
          '5j0iox2CZRckOz0tx' // Replace with your EmailJS public key
        )
        .then(
          () => {
            alert('Message sent successfully!');
            form.current?.reset(); // Reset the form after successful submission
          },
          () => {
            alert('Failed to send message. Please try again later.');
          }
        );
    }
  };

  return (
    <section id="contact" className="py-16 px-6 lg:px-16 bg-[#0c001d] text-white">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-4xl font-quantico font-bold mb-8 text-center leading-tight tracking-wide hover:text-turquoise text-white"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {hover ? 'Contact Me 📧' : 'Contact Me ✉️'}
        </h2>
        <p className="text-lg text-gray-400 mb-12 text-center">
          Feel free to reach out! Let’s connect and create something extraordinary together:)
        </p>

        <div className="bg-gray-800 bg-opacity-60 rounded-lg shadow-lg p-6 sm:p-12">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-sm font-semibold text-white text-left"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Enter your first name"
                  className="mt-2 w-full bg-transparent rounded-md border-0 px-4 py-3 text-light-pink shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#f472b6] sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm font-semibold text-white text-left"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Enter your last name"
                  className="mt-2 w-full bg-transparent rounded-md border-0 px-4 py-3 text-light-pink shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#f472b6] sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="user_email"
                className="block text-sm font-semibold text-white text-left"
              >
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                placeholder="Enter your email address"
                className="mt-2 w-full bg-transparent rounded-md border-0 px-4 py-3 text-light-pink shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#f472b6] sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-white text-left"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Write your message here"
                className="mt-2 w-full bg-transparent rounded-md border-0 px-4 py-3 text-light-pink shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#f472b6] sm:text-sm"
              ></textarea>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full rounded-md bg-[#f472b6] px-4 py-3 text-center text-sm font-semibold text-white shadow hover:bg-turquoise hover:text-black transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
