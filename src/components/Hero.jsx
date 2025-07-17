import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ParticlesBackground from "./particlesBackground";
import { FaChevronDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative h-screen bg-black text-white flex flex-col justify-center items-center px-4 text-center overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Profile and Content */}
      <div className="z-10">
      <motion.div
  className="w-48 h-48 md:w-64 md:h-64 border-4 border-cyan-400 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500 transition-shadow duration-300 mx-auto mb-6"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
>
  <img
    src="/saaketh.jpg"
    alt="Saaketh"
    className="w-full h-full object-cover"
  />
</motion.div>



        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-2"
        >
          Hi, I'm{" "}
          <span className="text-cyan-400">Saaketh Choudarapu</span>
        </motion.h1>

        <TypeAnimation
          sequence={[
            "Data Analytics Engineer", 2000,
            "IoT Solutions Architect and IoT Developer", 2000,
            "Python developer", 2000,
          ]}
          wrapper="span"
          speed={50}
          className="text-xl md:text-2xl text-gray-300 mb-6"
          repeat={Infinity}
        />

<div className="max-w-xl mx-auto text-center mb-5">
  <p className="text-md md:text-lg text-gray-400 mb-5">
    Turning real-time data into real-world decisions
  </p>
  <p className="text-md md:text-lg text-gray-400">
    Creating a smarter, more connected world.
  </p>
</div>


        <div className="flex gap-6 justify-center">
          <a
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg shadow-md transition"
          >
            View My Work
          </a>
          <a
            href="/Saaketh_Choudarapu_Resume.pdf"
            download
            className="border border-cyan-500 text-cyan-500 px-6 py-2 rounded-lg hover:bg-cyan-500 hover:text-white transition"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-6 text-cyan-400 animate-bounce z-10">
        <FaChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
