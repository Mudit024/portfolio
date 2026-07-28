import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["about", "skills", "experience", "work", "education", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-4 md:px-[7vw] lg:px-[12vw] ${
        isScrolled
          ? "py-3 bg-[#050414]/80 backdrop-blur-xl border-b border-purple-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <div
          onClick={() => handleMenuItemClick("about")}
          className="group flex items-center space-x-2 text-xl font-extrabold cursor-pointer tracking-tight"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center shadow-[0_0_15px_rgba(130,69,236,0.5)] group-hover:scale-110 transition-transform duration-300">
            <FaCode className="text-white text-base" />
          </div>
          <div className="font-sans">
            <span className="text-purple-400">&lt;</span>
            <span className="text-white group-hover:text-purple-300 transition-colors">Mudit</span>
            <span className="gradient-text">.Jawara</span>
            <span className="text-purple-400">/&gt;</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1 bg-gray-900/60 border border-purple-500/20 backdrop-blur-md px-4 py-1.5 rounded-full shadow-inner">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuItemClick(item.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(130,69,236,0.5)]"
                  : "text-gray-300 hover:text-white hover:bg-purple-950/40"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Social Icons & CTA */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="https://github.com/Mudit024"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-gray-900/80 border border-purple-500/20 rounded-full text-gray-300 hover:text-white hover:border-purple-500 hover:scale-110 transition-all shadow-md"
            aria-label="GitHub Profile"
          >
            <FaGithub size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/mudit-jawara/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-gray-900/80 border border-purple-500/20 rounded-full text-gray-300 hover:text-[#0077b5] hover:border-purple-500 hover:scale-110 transition-all shadow-md"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={17} />
          </a>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 bg-gray-900/80 border border-purple-500/30 rounded-2xl text-purple-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden mt-3 bg-[#0d081f]/95 border border-purple-500/30 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl animate-[fadeIn_0.2s_ease-out]">
          <ul className="flex flex-col space-y-3">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`w-full text-left px-5 py-3 rounded-2xl text-sm font-semibold transition-all ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-md"
                      : "text-gray-300 hover:bg-gray-800/60 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-center space-x-6 pt-5 mt-4 border-t border-purple-500/15">
            <a
              href="https://github.com/Mudit024"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/mudit-jawara/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#0077b5]"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;