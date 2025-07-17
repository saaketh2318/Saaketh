import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Python", "C", "HTML", "Java", "SQL", "Verilog"],
  },
  {
    category: "IoT Platforms",
    skills: ["AWS IoT Core", "MQTT", "Raspberry Pi", "Arduino"],
  },
  {
    category: "Development Tools",
    skills: ["JetBrains", "Visual Studio", "Jupyter", "MATLAB", "Power BI", "Postman", "Cooja", "NS3", "Intel Quartus", "FPGA", "Wireshark"],
  },
  {
    category: "Database Management",
    skills: ["MySQL", "MongoDB", "InfluxDB", "Grafana"],
  },
  {
    category: "Cloud & Infrastructure",
    skills: ["AWS (EC2, IAM, S3, Lambda)", "Terraform", "Microsoft Azure"],
  },
  {
    category: "Machine Learning",
    skills: ["Scikit-learn", "TensorFlow (Basics)", "Pandas", "NumPy", "LLMs"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          Skills
        </h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-cyan-500"
            >
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">{domain.category}</h3>
              <div className="flex flex-wrap gap-2">
                {domain.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
