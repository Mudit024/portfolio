import React from "react";
import { education } from "../../constants";
import { FaGraduationCap, FaCalendarAlt, FaStar, FaMapMarkerAlt } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-8 md:px-[7vw] lg:px-[12vw] font-sans relative"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          ACADEMIC <span className="gradient-text">EDUCATION</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          My academic foundation in Computer Science, Software Engineering, Data Structures, and System Design.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Central Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500 via-indigo-500 to-purple-900 transform md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative flex flex-col md:flex-row items-start ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Icon Node */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 border-4 border-[#050414] flex items-center justify-center z-20 shadow-[0_0_15px_rgba(130,69,236,0.6)]">
                <FaGraduationCap className="text-white text-lg" />
              </div>

              {/* Desktop Spacer */}
              <div className="hidden md:block md:w-1/2"></div>

              {/* Card Container */}
              <div className="pl-14 md:pl-0 md:w-1/2 md:px-8 w-full">
                <div className="group bg-gray-900/60 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6 transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(130,69,236,0.25)] hover:-translate-y-1">
                  {/* Top Info */}
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-14 h-14 shrink-0 rounded-2xl bg-white object-contain p-2 shadow-md border border-purple-500/20"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-purple-400 font-semibold text-sm mt-0.5">
                        {edu.school}
                      </p>
                      {edu.location && (
                        <p className="text-gray-400 text-xs flex items-center space-x-1 mt-1">
                          <FaMapMarkerAlt className="text-purple-400 text-[10px]" />
                          <span>{edu.location}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Date & Grade Badges */}
                  <div className="flex flex-wrap items-center gap-3 my-3">
                    <div className="inline-flex items-center space-x-1.5 bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full">
                      <FaCalendarAlt className="text-[10px]" />
                      <span>{edu.date}</span>
                    </div>

                    <div className="inline-flex items-center space-x-1.5 bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-xs font-bold px-3 py-1 rounded-full">
                      <FaStar className="text-[10px]" />
                      <span>Grade: {edu.grade}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mt-4">
                    {edu.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
