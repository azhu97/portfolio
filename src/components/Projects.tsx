import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Github,
  Code,
  Users,
  Zap,
  Shield,
} from "lucide-react";

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Progressive Training: Gym Application",
      description:
        "A full-stack workout tracking application with AI-powered personalized training recommendations",
      longDescription:
        "Developed a comprehensive fitness application that combines traditional workout tracking with AI-driven progressive overload training. The system analyzes user progress and goals to provide personalized workout recommendations, improving strength efficiency by over 20%.",
      features: [
        "Full-stack development with Node.js, Express, MongoDB, and React",
        "Secure JWT-based authentication system",
        "AI-powered workout recommendations using OpenAI API",
        "Dynamic progress tracking and goal management",
        "Encrypted password storage and secure data workflows",
      ],
      technologies: [
        "JS",
        "Node.js",
        "Express.js",
        "React.js",
        "HTML & CSS",
        "JWT",
        "OpenAI API",
        "PostgreSQL",
        "Prisma",
      ],
      stats: { users: "50+", improvement: "20%", efficiency: "High" },
      icon: <Zap size={24} />,
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "S-Chart: NBA Shot Chart Generator",
      description:
        "Python terminal app for NBA player shot analysis and visualization",
      longDescription:
        "A sophisticated data visualization tool that integrates with the NBA Stats API to provide detailed shot analysis. Features animated visualizations and zone-based analysis to help understand player shooting patterns across different court areas.",
      features: [
        "Real-time NBA Stats API integration",
        "Advanced shot chart visualizations with animations",
        "Zone-based shot analysis across all court areas",
        "Interactive terminal interface",
        "Comprehensive player data processing",
      ],
      technologies: ["Python", "NBA API", "Matplotlib", "NumPy", "CLI"],
      stats: { data: "Real-time", zones: "All Major", engagement: "High" },
      icon: <Code size={24} />,
      color: "from-green-500 to-teal-600",
    },
    {
      title: "WanderSync: Mobile Vacation Planner",
      description:
        "Android travel planning app with extensive destination database",
      longDescription:
        "A comprehensive travel planning application built for Android that leverages Firebase for data persistence and integrates with multiple third-party travel APIs. The app stores over 10 million destination points and provides users with detailed travel planning capabilities.",
      features: [
        "Android SDK development with Java",
        "Firebase integration for data persistence",
        "10M+ destination points from 3rd-party APIs",
        "Comprehensive travel planning features",
        "Agile development methodology",
      ],
      technologies: [
        "Java",
        "Android SDK",
        "JUnit",
        "Maven",
        "XML",
        "Firebase",
      ],
      stats: {
        destinations: "10M+",
        platform: "Android",
        methodology: "Agile",
      },
      icon: <Users size={24} />,
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Tabby: Automatic Tab Manager",
      description:
        "Chrome extension for intelligent tab management and browser optimization",
      longDescription:
        "A smart Chrome extension that automatically manages browser tabs to improve performance and user productivity. Features an intuitive interface for tab restoration and intelligent tab closing algorithms that improve browser performance by an average of 25%.",
      features: [
        "Automatic inactive tab management",
        "25% average browser performance improvement",
        "User interface for tab restoration",
        "Intelligent tab closing algorithms",
        "Cross-platform Chrome compatibility",
      ],
      technologies: ["TypeScript", "HTML", "CSS", "Chrome API"],
      stats: { users: "30+", improvement: "25%", platform: "Chrome" },
      icon: <Shield size={24} />,
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section id="projects" className="section relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of my most impactful projects, showcasing full-stack
            development, data visualization, mobile development, and browser
            extension expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass rounded-2xl p-6 hover:glow transition-all duration-300 cursor-pointer"
              onClick={() =>
                setSelectedProject(selectedProject === index ? null : index)
              }
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${project.color}`}
                  >
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: selectedProject === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ExternalLink size={20} className="text-gray-400" />
                </motion.div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-2 py-1 bg-gray-500/20 border border-gray-500/30 rounded-full text-xs text-gray-300">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-lg font-bold text-blue-400">
                      {value}
                    </div>
                    <div className="text-xs text-gray-400 capitalize">
                      {key}
                    </div>
                  </div>
                ))}
              </div>

              {/* Expanded Content */}
              <motion.div
                initial={false}
                animate={{
                  height: selectedProject === index ? "auto" : 0,
                  opacity: selectedProject === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.longDescription}
                  </p>

                  <h4 className="text-white font-semibold mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-300 text-sm hover:bg-blue-500/30 transition-colors"
                    >
                      <Github size={16} />
                      View Code
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-sm hover:bg-green-500/30 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/azhu97"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
