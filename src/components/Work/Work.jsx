import React, { useState } from "react";
import { projects } from "../../constants";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCheckCircle, FaLayerGroup } from "react-icons/fa";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Full Stack", "Desktop App"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="work"
      className="py-20 px-4 sm:px-8 md:px-[7vw] lg:px-[12vw] font-sans relative"
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          FEATURED <span className="gradient-text">PROJECTS</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          A curated collection of full-stack web applications, desktop tools, and algorithms built with modern technologies.
        </p>

        {/* Project Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(130,69,236,0.5)] scale-105"
                  : "bg-gray-900/60 border border-purple-500/20 text-gray-300 hover:border-purple-500/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id + project.title}
            className="group bg-gray-900/60 backdrop-blur-xl border border-purple-500/20 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/60 hover:shadow-[0_0_35px_rgba(130,69,236,0.3)] flex flex-col h-full"
          >
            {/* Project Image & Category Pill */}
            <div className="relative overflow-hidden cursor-pointer" onClick={() => handleOpenModal(project)}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80"></div>
              
              {/* Category Tag */}
              <div className="absolute top-4 left-4 bg-purple-950/80 backdrop-blur-md border border-purple-500/30 text-purple-300 text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1.5">
                <FaLayerGroup className="text-[10px]" />
                <span>{project.category || "Full Stack"}</span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-purple-950/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-xs">
                <span className="text-white font-bold text-xs bg-purple-600 px-4 py-2 rounded-full shadow-lg">
                  View Project Details
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3
                onClick={() => handleOpenModal(project)}
                className="text-2xl font-bold text-white mb-3 hover:text-purple-300 cursor-pointer transition-colors"
              >
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.slice(0, 5).map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-950/40 border border-purple-500/20 text-purple-300 px-2.5 py-0.5 rounded-md text-[11px] font-semibold"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 5 && (
                  <span className="text-gray-500 text-xs py-0.5 font-semibold">
                    +{project.tags.length - 5} more
                  </span>
                )}
              </div>

              {/* Card Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-purple-500/15 gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 bg-gray-800/80 hover:bg-gray-700 text-gray-200 py-2.5 rounded-xl text-xs font-bold transition-all"
                >
                  <FaGithub className="text-sm" />
                  <span>Code</span>
                </a>

                {project.webapp && (
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white py-2.5 rounded-xl text-xs font-bold transition-all shadow-[0_0_12px_rgba(130,69,236,0.4)]"
                  >
                    <FaExternalLinkAlt className="text-[10px]" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div
          onClick={handleCloseModal}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0d081f] border border-purple-500/30 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-[fadeIn_0.3s_ease] my-8 text-left"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-purple-500/20">
              <div className="flex items-center space-x-3">
                <span className="bg-purple-950 text-purple-300 border border-purple-500/40 text-xs font-bold px-3 py-1 rounded-full">
                  {selectedProject.category || "Project Overview"}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Modal Image */}
            <div className="px-6 pt-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 sm:h-80 rounded-2xl object-cover border border-purple-500/20 shadow-lg"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <h4 className="text-lg font-bold text-white mb-2">Overview</h4>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-6">
                {selectedProject.description}
              </p>

              {/* Key Features */}
              {selectedProject.features && (
                <div className="mb-6 bg-gray-950/60 border border-purple-500/20 p-4 sm:p-5 rounded-2xl">
                  <h4 className="text-base font-bold text-purple-300 mb-3">Key Highlights & Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-300">
                        <FaCheckCircle className="text-purple-400 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-purple-950/60 border border-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-purple-500/20">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white py-3.5 rounded-xl font-bold transition-all text-sm"
                >
                  <FaGithub size={18} />
                  <span>View Source Code</span>
                </a>

                {selectedProject.webapp && (
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white py-3.5 rounded-xl font-bold transition-all text-sm shadow-[0_0_15px_rgba(130,69,236,0.4)]"
                  >
                    <FaExternalLinkAlt size={14} />
                    <span>Open Live Application</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
