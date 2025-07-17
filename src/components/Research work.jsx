import React from "react";

const researchProjects = [
  {
    title: "An Intelligent System for Early Detection of Breast Cancer using ML",
    duration: "IEEE, Apr 2023",
    description:
      "Developed a machine learning system to detect early-stage breast cancer using supervised classifiers and hybrid algorithms. Published in an IEEE conference.",
    link: "https://ieeexplore.ieee.org/document/10627465", // Replace with actual URL
  },
  {
    title: "Priority-aware Routing Protocol for Autonomous Vehicles",
    duration: "Oct 2024 – Dec 2024",
    description:
      "Designed a latency-optimized routing protocol based on packet-level criticality for autonomous vehicle subsystems, improving response time for high-priority tasks.",
    link: "https://example.com/priority-aware-routing", // Replace with actual URL
  },
  {
    title: "Sentiment Classification of Airline Tweets using ML & Deep Learning",
    duration: "Apr 2025 – Jul 2025",
    description:
      "Classified tweets into sentiment classes using ML (SVM, Logistic Regression) and LSTM deep learning models. Achieved over 80% accuracy using advanced preprocessing.",
    link: "https://example.com/sentiment-analysis-airline", // Replace with actual URL
  },
  {
    title: "IoT-based Water Quality Monitoring System",
    duration: "Mar 2025 – Apr 2025",
    description:
      "Built an IoT system to collect water parameters (pH, turbidity, sulfate) in real-time and applied ML models to predict potability and contamination.",
    link: "https://example.com/iot-water-quality", // Replace with actual URL
  },
  {
    title: "Eco Farming using 5G Technology",
    duration: "Aug 2023 – Oct 2023",
    description:
      "Engineered a smart farming system that integrates IoT devices with 5G-based communication for high-speed sensor data transfer and remote crop monitoring.",
    link: "https://example.com/eco-farming-5g", // Replace with actual URL
  },
];

const ResearchWork = () => {
  return (
    <section id="research" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">Research Work</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {researchProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800 border border-cyan-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition hover:scale-105 hover:border-cyan-400"
            >
              <h3 className="text-xl font-semibold mb-1 text-white">{project.title}</h3>
              <p className="text-sm text-cyan-400 italic mb-3">{project.duration}</p>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchWork;
