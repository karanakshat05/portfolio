import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.error(error.text);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center relative z-10 py-8 group transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="w-full max-w-6xl px-4 flex flex-col items-center gap-4">
        <h1 className="text-4xl font-semibold text-center text-gray-900 dark:text-gray-100">Contact</h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 max-w-2xl">
          Feel free to reach out to me for any questions or opportunities!
        </p>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg flex flex-col gap-4"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Email Me 🚀</h2>
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500"
            required
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="w-full py-3 text-center text-white font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md cursor-pointer hover:opacity-90 transition-opacity"
          />
        </form>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
        />
      </div>
    </div>
  );
};

export default Contact;


