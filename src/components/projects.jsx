import React from "react";
import { motion } from "framer-motion";

const projects = [
    {
      title: "Smart Shopping Cart",
      description: "Fully autonomous cart with product scanning, voice assistant, and checkout automation.",
      tech: ["React", "Web Speech API", "Node.js"],
      link: "https://github.com/your-repo/cart",
    },
    {
      title: "Self-Healing IoT Engine",
      description: "Real-time analytics system with anomaly detection and recovery in sensor networks.",
      tech: ["Python", "TensorFlow", "MQTT"],
      link: "https://github.com/your-repo/engine",
    },
    {
      title: "Token Blacklist System",
      description: "Secure API token propagation system for cross-instance syncing and cache eviction.",
      tech: ["Java", "Spring Boot", "Redis"],
      link: "https://github.com/your-repo/tokens",
    },
    {
      title: "Priority-aware Protocol for Autonomous Vehicles",
      description: "Designed a priority-based routing protocol to improve latency in noncritical vehicle subsystems.",
      tech: ["C", "NS2", "Embedded Systems"],
      link: "#", // Replace with real link if available
    },
    {
      title: "IoT-based Irrigation System",
      description: "Built an automated irrigation system using pH sensors and AWS IoT Core for optimized water usage.",
      tech: ["AWS IoT", "Python", "MQTT"],
      link: "#",
    },
    {
      title: "Airline Tweet Sentiment Analysis",
      description: "Developed ML pipeline to classify airline tweets with >80% accuracy using traditional and deep learning models.",
      tech: ["Python", "SVM", "LSTM", "TF-IDF"],
      link: "#",
    },
    {
      title: "Water Quality Prediction using IoT & AI",
      description: "Built an IoT + ML system to predict potable water quality with high accuracy using real-time sensor data.",
      tech: ["IoT", "Random Forest", "LSTM", "SVM"],
      link: "#",
    },
  ];
  

const Projects = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20" id="projects">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-cyan-400 transition-colors duration-300 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-cyan-200">
                {project.tech.map((techItem, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-cyan-900 px-2 py-1 rounded-md"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
