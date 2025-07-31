import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/azhu97",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/alan-zhu-a3b306305/",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:alanzhu9000@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="border-t border-gray-800 bg-black/20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left mb-4 md:mb-0"
          >
            <p className="text-gray-400">
              © {currentYear} Alan Zhu. Made with{" "}
              <Heart size={16} className="inline text-red-500 animate-pulse" />{" "}
              using React & TypeScript
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 glass rounded-lg hover:glow transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-6 pt-6 border-t border-gray-800"
        >
          <p className="text-gray-500 text-sm">
            Computer Science Student at Georgia Tech • Full-Stack Developer •
            Problem Solver
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
