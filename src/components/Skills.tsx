import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Database, Globe, Smartphone } from "lucide-react";

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C",
    "Assembly",
    "React",
    "Node.js",
    "Express.js",
    "HTML & CSS",
    "REST APIs",
    "OAuth & JWT",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "AWS",
    "Docker",
    "Kubernetes",
    "Android SDK",
    "Git & GitHub",
    "Maven",
    "NPM",
    "JUnit",
    "Postman",
    "Spring Boot",
    "Prisma",
    "NumPy",
    "Matplotlib",
    "Vite",
    "Chrome API",
  ];

  return (
    <section id="skills" className="section relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A toolkit of programming languages, frameworks, and
            technologies that I use. 
          </p>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 hover:glow transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
