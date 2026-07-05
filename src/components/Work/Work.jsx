import React, { useState } from "react";
import { projects } from "../../constants";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
      className="py-24 px-4 md:px-[7vw] lg:px-[14vw] font-sans relative"
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>

        <div className="w-28 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>

        <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto leading-8">
          A curated collection of projects showcasing my expertise in Full Stack
          Development, problem-solving, and building scalable web applications
          using modern technologies.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group bg-[#111827]/90 border border-purple-500/20 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:border-purple-500 hover:shadow-[0_0_35px_rgba(130,69,236,0.35)] flex flex-col h-full"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  Click to View Details
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-7 line-clamp-3 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-purple-400 px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          onClick={handleCloseModal}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#111827] border border-purple-500/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-[fadeIn_.3s_ease] my-8"
          >
            {/* Close Button */}
            <div className="flex justify-end p-5">
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-white transition"
              >
                <FaTimes size={26} />
              </button>
            </div>

            {/* Image */}
            <div className="px-4 sm:px-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full rounded-xl object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5 sm:p-8">
              <h3 className="text-3xl font-bold text-white mb-5">
                {selectedProject.title}
              </h3>

              <p className="text-gray-400 leading-8 mb-6">
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-purple-400 px-3 py-2 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-xl font-semibold transition-all"
                >
                  <FaGithub />
                  For more details-View Code
                </a>

                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 bg-[#8245ec] hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition-all"
                >
                  <FaExternalLinkAlt />
                  Live Demo(to be added)
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
