import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20" id="about">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">
          About Me
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I'm Saaketh Choudarapu, a passionate IoT and Data Analytics engineer dedicated to building intelligent, connected systems that solve real-world problems. With a strong background in software engineering and experience across research, product prototyping, and real-time data visualization, I love creating systems that think and react like humans.
        </p>
        <p className="text-md text-gray-400 mt-6">
          From smart carts and self-healing analytics engines to secure token systems and anomaly detectors, I bring creative logic, performance optimization, and a deep love for futuristic tech into every line of code I write.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
