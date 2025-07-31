import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building, Calendar, TrendingUp, Database } from "lucide-react";

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "VIP, Sports Performance Intelligence Platform",
      company: "Atlanta, GA",
      period: "Aug 2024 - Present",
      icon: <TrendingUp size={24} />,
      achievements: [
        "Designed and implemented 15+ RESTful API endpoints using Node.js and Express to support real-time athlete performance analytics",
        "Developed and optimized PostgreSQL schemas, reducing query response times by 30% and supporting structured athlete performance tracking",
        "Integrated backend services with predictive machine learning models, supporting injury risk analysis and performance readiness insights, reducing injuries by over 10% and improving overall performance",
        "Partnered with a cross-disciplinary team of 12+ developers, researchers, and athletic staff in weekly Agile sprints to deliver MVP features",
      ],
      technologies: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "Machine Learning",
        "RESTful APIs",
        "Agile",
      ],
    },
    {
      title: "Software Automation Assistant",
      company: "Chopsticks Cafe, Hinesville, GA",
      period: "Aug 2020 - Aug 2023",
      icon: <Database size={24} />,
      achievements: [
        "Modernized inventory tracking via Python scripts and spreadsheets, reducing waste by over 15%",
        "Supported front & back of house in high-traffic settings",
      ],
      technologies: ["Python", "Spreadsheets", "Inventory Management"],
    },
  ];

  return (
    <section id="experience" className="section relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional journey in software development and automation,
            focusing on creating impactful solutions and driving innovation.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass rounded-2xl p-8 hover:glow transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon and Title Section */}
                <div className="flex items-center lg:items-start gap-4 lg:w-1/3">
                  <div className="p-4 bg-blue-500 rounded-xl">{exp.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-400 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-gray-400 text-sm mb-1">
                      <Building size={16} className="mr-2" />
                      {exp.company}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-2/3">
                  <h4 className="text-lg font-semibold mb-4 text-white">
                    Key Achievements
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.2 + idx * 0.1,
                        }}
                        className="flex items-start"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300 leading-relaxed">
                          {achievement}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.2 + idx * 0.05,
                          }}
                          className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
