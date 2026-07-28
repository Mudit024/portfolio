import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/image2.png";
import { bioInfo, bioStats } from "../../constants";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight, FaCode, FaGraduationCap, FaTrophy } from "react-icons/fa";

const About = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="pt-24 pb-16 md:py-28 px-4 sm:px-8 md:px-[7vw] lg:px-[12vw] font-sans relative"
    >
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12 lg:gap-16">
        {/* Left Side: Information */}
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2.5 bg-purple-950/60 border border-purple-500/30 px-4 py-2 rounded-full mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(130,69,236,0.2)]">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-semibold text-purple-300">
              Open for Software Engineering Roles & Internships
            </span>
          </div>

          {/* Greeting */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight leading-none">
            <span className="gradient-text">{bioInfo.name}</span>
          </h2>

          {/* Typing Animation */}
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-gray-200 flex flex-wrap items-center justify-center lg:justify-start gap-2 min-h-[44px]">
            <span>I am a</span>
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "MERN Stack Specialist",
                2000,
                "Competitive Programmer",
                2000,
                "MCA Candidate @ MNNIT Allahabad",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#8245ec] font-bold underline decoration-purple-500/50 underline-offset-4"
            />
          </div>

          {/* Bio Description */}
          <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
            {bioInfo.bio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
            <a
              href={bioInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 text-white btn-shimmer py-3.5 px-8 rounded-full text-sm font-extrabold shadow-[0_0_25px_rgba(130,69,236,0.5)] transition-all duration-300 hover:scale-105"
            >
              <FaDownload className="text-sm" />
              <span>DOWNLOAD RESUME</span>
            </a>

            <button
              onClick={() => scrollToSection("work")}
              className="flex items-center space-x-2 text-gray-200 border border-purple-500/40 hover:border-purple-500 bg-gray-900/60 hover:bg-purple-950/40 py-3.5 px-6 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
            >
              <span>Explore Projects</span>
              <FaArrowRight className="text-xs text-purple-400" />
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start space-x-4 text-gray-400">
            <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Connect:</span>
            <a
              href={bioInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900/80 border border-purple-500/20 rounded-full text-gray-300 hover:text-white hover:border-purple-500 hover:scale-110 transition-all shadow-md"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={bioInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900/80 border border-purple-500/20 rounded-full text-gray-300 hover:text-[#0077b5] hover:border-purple-500 hover:scale-110 transition-all shadow-md"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={`mailto:${bioInfo.email}`}
              className="p-3 bg-gray-900/80 border border-purple-500/20 rounded-full text-gray-300 hover:text-purple-400 hover:border-purple-500 hover:scale-110 transition-all shadow-md"
              aria-label="Email"
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>

        {/* Right Side: Profile Image with Parallax & Floating Tech Badges */}
        <div className="w-full lg:w-2/5 flex justify-center items-center mt-4 lg:mt-0">
          <Tilt
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
            className="relative group cursor-pointer"
          >
            {/* Outer Pulsing Glow */}
            <div className="absolute -inset-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition duration-700 animate-pulse-glow"></div>

            {/* Image Container */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 bg-gradient-to-tr from-purple-500 via-indigo-500 to-pink-500 shadow-2xl">
              <img
                src={profileImage}
                alt={bioInfo.name}
                className="w-full h-full object-cover object-[center_30%] rounded-full bg-[#050414]"
              />

              {/* Floating Badge Top Left */}
              <div className="absolute -top-2 -left-2 bg-gray-900/90 border border-purple-500/40 backdrop-blur-md px-3.5 py-1.5 rounded-2xl shadow-xl flex items-center space-x-2">
                <FaGraduationCap className="text-purple-400 text-sm" />
                <span className="text-xs font-bold text-white">MCA @ MNNIT</span>
              </div>

              {/* Floating Tech Badge Bottom Right */}
              <div className="absolute bottom-4 right-2 bg-gray-900/90 border border-purple-500/40 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl flex items-center space-x-2">
                <FaCode className="text-purple-400 text-sm" />
                <span className="text-xs font-bold text-white">Full-Stack SDE</span>
              </div>
            </div>
          </Tilt>
        </div>
      </div>

      {/* Bio Stats Counter Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-12 border-t border-purple-500/15">
        {bioStats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-gray-900/50 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/50 p-5 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(130,69,236,0.25)]"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1 gradient-text">
              {stat.value}
            </h3>
            <p className="text-sm font-semibold text-gray-200">{stat.label}</p>
            <p className="text-xs text-gray-400 mt-1">{stat.subtext}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;