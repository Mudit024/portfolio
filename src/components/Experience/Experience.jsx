import React from "react";
import { experiences, bioInfo } from "../../constants";
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaCheckCircle, FaBuilding, FaCode } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-8 md:px-[7vw] lg:px-[12vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          WORK <span className="gradient-text">EXPERIENCE</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Actively seeking full-time Software Engineer, Full Stack Developer, Frontend, Backend, and SDE opportunities.
        </p>
      </div>

      {/* Experience Timeline */}
      {experiences.length > 0 && (
        <div className="space-y-8 mb-16 max-w-4xl mx-auto">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group bg-gray-900/50 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(130,69,236,0.25)] hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-purple-500/15">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-purple-500/30 p-2.5 shrink-0 flex items-center justify-center">
                    {exp.img ? (
                      <img src={exp.img} alt={exp.company} className="w-full h-full object-contain" />
                    ) : (
                      <FaBuilding className="text-purple-400 text-2xl" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-purple-400 font-semibold text-sm sm:text-base flex items-center space-x-2">
                      <span>{exp.company}</span>
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center space-x-2 bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full self-start md:self-auto">
                  <FaCalendarAlt className="text-purple-400 text-xs" />
                  <span>{exp.date}</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-6 mb-6">
                {exp.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-950/40 border border-purple-500/25 text-purple-300 text-xs font-semibold px-3 py-1 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Open to Work Card */}
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-950/50 via-gray-900/80 to-indigo-950/50 border border-purple-500/30 rounded-3xl p-6 sm:p-10 shadow-[0_0_35px_rgba(130,69,236,0.3)]">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg">
            <FaBriefcase className="text-white text-2xl" />
          </div>

          <div className="text-center sm:text-left flex-1">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold px-3 py-1 rounded-full mb-3">
              <FaCheckCircle className="text-xs" />
              <span>Available Immediately</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Seeking Full-Time Software Engineering Roles
            </h3>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              Pursuing MCA at MNNIT Allahabad, actively looking for <strong className="text-white">Software Developer, Full Stack Developer, Frontend, Backend, and SDE roles</strong>. Equipped with strong problem-solving skills, MERN stack expertise, and competitive programming proficiency.
            </p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-4 items-center text-sm font-medium text-gray-300">
              <span className="flex items-center space-x-2 text-purple-400 font-semibold">
                <FaGraduationCap className="text-lg" />
                <span>MCA Candidate @ MNNIT Allahabad</span>
              </span>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <a
                href={`mailto:${bioInfo.email}`}
                className="text-[#8245ec] hover:underline font-bold"
              >
                {bioInfo.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;