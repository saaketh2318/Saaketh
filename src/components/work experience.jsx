import React from "react";

const experiences = [
  {
    role: "Teaching Assistant",
    company: "Northeastern University, Boston, USA",
    duration: "Dec 2024 – Present",
    responsibilities: [
      "Delivered lab sessions for 125+ students on digital circuit design and FPGA programming using Verilog HDL.",
      "Guided circuit simulation using Intel Quartus tools.",
      "Mentored students on sequential logic, combinational circuits, and FPGA gate-level programming.",
    ],
  },
  {
    role: "Research Assistant",
    company: "Northeastern University, Boston, USA",
    duration: "Sep 2024 – Present",
    responsibilities: [
      "Researched latency-optimized routing algorithms for autonomous vehicle networks.",
      "Developed a priority-based routing algorithm improving link quality and energy efficiency.",
      "Simulated performance across platforms to optimize the algorithm’s efficiency.",
    ],
  },
  {
    role: "IoT Engineer & Python Developer",
    company: "Frugal Labs, Bangalore, India",
    duration: "May 2023 – Jul 2023",
    responsibilities: [
      "Built Python-based backend for MQTT microservices in IoT gateways.",
      "Deployed systems to AWS and built automated IoT alerts for agriculture use-cases.",
      "Improved data handling and reduced latency through optimization.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="bg-gray-950 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 shadow-lg border border-cyan-800">
              <h3 className="text-2xl font-semibold text-white mb-1">{exp.role}</h3>
              <p className="text-cyan-400 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-4 italic">{exp.duration}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {exp.responsibilities.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
