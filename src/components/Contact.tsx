import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  MessageCircle,
} from "lucide-react";

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "alanzhu9000@gmail.com",
      link: "mailto:alanzhu9000@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "917 470 5751",
      link: "tel:9174705751",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Atlanta, Georgia",
      link: "#",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      value: "linkedin.com/in/alan-zhu-a3b306305/",
      link: "https://linkedin.com/in/alan-zhu-a3b306305/",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: <Github size={24} />,
      title: "GitHub",
      value: "github.com/azhu97",
      link: "https://github.com/azhu97",
      color: "from-gray-600 to-gray-700",
    },
  ];

  return (
    <section id="contact" className="section relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or
            just having a great conversation about technology. Feel free to
            reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>

            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-center p-4 glass rounded-xl hover:glow transition-all duration-300 group"
              >
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${info.color} mr-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{info.title}</h4>
                  <p className="text-gray-300">{info.value}</p>
                </div>
              </motion.a>
            ))}

            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4">Social Profiles</h4>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="flex items-center p-3 glass rounded-lg hover:glow transition-all duration-300 group"
                  >
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${social.color} mr-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {social.icon}
                    </div>
                    <div>
                      <h5 className="text-white font-medium">{social.title}</h5>
                      <p className="text-gray-400 text-sm">{social.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass rounded-2xl p-8 text-center"
          >
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <MessageCircle size={32} className="text-white" />
            </div>

            <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm currently looking for exciting opportunities in software
              development, particularly in full-stack development, data
              analysis, and innovative tech solutions. Whether it's a project
              collaboration, internship, or full-time position, I'd love to hear
              from you!
            </p>

            <div className="space-y-4">
              <motion.a
                href="mailto:alanzhu9000@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary w-full"
              >
                Send Me a Message
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/alan-zhu-a3b306305/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-secondary w-full"
              >
                Connect on LinkedIn
              </motion.a>
            </div>

            <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-blue-300 text-sm">
                <strong>Available for:</strong> Internships, Full-time
                positions, Project collaborations, Open source contributions
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
