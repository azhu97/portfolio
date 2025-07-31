import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = {
    institution: "Georgia Institute of Technology",
    degree: "BS in Computer Science, Minor in Math",
    concentration: "System & Architecture | Info Networks",
    gpa: "3.9/4.0",
    dates: "Aug 2023 - May 2027",
    location: "Atlanta, Georgia",
  };

  const coursework = [
    "Data Structures & Algorithms",
    "Computer Systems",
    "Computer Organization & Programming",
    "Discrete Math",
    "Computer Networking",
    "Design & Analysis-Algorithms",
    "Linear Algebra",
    "Artificial Intelligence",
  ];

  return (
    <section id="about" className="section relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A passionate Computer Science student at Georgia Tech, focused on
            learning and applying new technologies. I'm currently looking for a
            software engineering internship for Summer 2026.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-2xl p-8 hover:glow transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-500 rounded-full mr-4">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-2">
                  {education.institution}
                </h4>
                <p className="text-gray-300 mb-1">{education.degree}</p>
                <p className="text-gray-400 text-sm mb-3">
                  {education.concentration}
                </p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <Award className="mr-2 text-blue-400" size={16} />
                    <span className="text-gray-300">GPA: {education.gpa}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2 text-blue-400" size={16} />
                    <span className="text-gray-300">{education.dates}</span>
                  </div>
                  <div className="flex items-center col-span-2">
                    <MapPin className="mr-2 text-blue-400" size={16} />
                    <span className="text-gray-300">{education.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coursework */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Key Coursework</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {coursework.map((course, index) => (
                <motion.div
                  key={course}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center p-3 glass rounded-lg hover:glow transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">{course}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Personal Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">What Drives Me</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm passionate about leveraging technology to solve real-world
              problems. I thrive on the challenge of turning complex ideas into
              elegant, user-friendly experiences. My academic focus on systems &
              architecture, combined with hands-on development experience on
              projects, has equipped me with a unique perspective on building
              scalable, efficient solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
