import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-4" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-cyan-400">Contact Me</h2>
        <p className="text-gray-400 mb-10">
          Have a question, opportunity, or just want to say hi? I’d love to hear from you.
        </p>

        <form
          action="https://formspree.io/f/xzzvbown"
          method="POST"
          className="space-y-6"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 h-32"
          ></textarea>

          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-md transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 flex justify-center gap-6 text-2xl text-cyan-400">
          <a
            href="https://www.linkedin.com/in/saaketh-choudarapu-094056208"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:choudarapu.s@northeastern.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/saakethchoudarapu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
