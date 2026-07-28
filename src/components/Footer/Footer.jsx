import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp, FaCode } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative text-white py-12 px-4 md:px-[7vw] lg:px-[12vw] border-t border-purple-500/15 bg-gray-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left: Brand */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="flex items-center space-x-2 text-lg font-extrabold tracking-tight">
            <FaCode className="text-purple-400" />
            <span className="gradient-text">Mudit Jawara</span>
          </div>
          <p className="text-xs text-gray-400 max-w-sm">
            Full-Stack Software Engineer & MCA Candidate @ MNNIT Allahabad.
          </p>
        </div>

        {/* Center: Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-gray-300">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-400 transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Right: Social Icons & Back to Top */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/Mudit024"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-gray-900 border border-purple-500/20 rounded-full text-gray-300 hover:text-white hover:border-purple-500 transition-all shadow-sm"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/mudit-jawara/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-gray-900 border border-purple-500/20 rounded-full text-gray-300 hover:text-[#0077b5] hover:border-purple-500 transition-all shadow-sm"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="https://www.instagram.com/_muditjawara/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-gray-900 border border-purple-500/20 rounded-full text-gray-300 hover:text-pink-400 hover:border-purple-500 transition-all shadow-sm"
            aria-label="Instagram"
          >
            <FaInstagram size={16} />
          </a>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-full text-white hover:scale-110 transition-transform shadow-[0_0_15px_rgba(130,69,236,0.5)]"
            title="Back to Top"
          >
            <FaArrowUp size={14} />
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-8 pt-6 border-t border-purple-500/10">
        © 2026 Mudit Jawara. All rights reserved. Built with React & Tailwind CSS.
      </div>
    </footer>
  );
};

export default Footer;