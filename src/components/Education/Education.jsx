import React, { useState } from "react";
import { education } from "../../constants";
import { FaGraduationCap, FaCalendarAlt, FaStar, FaMapMarkerAlt, FaTrophy, FaMedal, FaCheckCircle, FaBookOpen } from "react-icons/fa";

const Education = () => {
  const [activeTab, setActiveTab] = useState(0);

  const mnnitSubjects = [
    "Data Structures & Algorithms",
    "System Design & OOPs",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
  ];

  const honors = [
    {
      id: 1,
      title: "NIMCET 2024 AIR 192",
      desc: "Secured All India Rank 192 in NIMCET 2024 national entrance exam for MCA admissions across premier NITs.",
      badge: "AIR 192",
    },
    {
      id: 2,
      title: "700+ DSA Problems Solved",
      desc: "Mastered algorithmic problem solving with 700+ problems solved on LeetCode & Codeforces.",
      badge: "700+ Solved",
    },
    {
      id: 3,
      title: "MNNIT Softablitz Top 8",
      desc: "Finalist ranked in Top 8 at MNNIT Allahabad's annual flagship software competition Softablitz.",
      badge: "Top 8 Finalist",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-8 md:px-[7vw] lg:px-[12vw] font-sans relative"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          ACADEMIC <span className="gradient-text">EDUCATION</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          A horizontal milestone roadmap of my academic background, institutions, and competitive honors.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Horizontal Timeline Bar Navigation */}
        <div className="relative mb-12 hidden md:block">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-8 right-8 h-[2px] bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-900 -translate-y-1/2 z-0"></div>

          {/* Stepper Nodes */}
          <div className="relative z-10 flex justify-between items-center">
            {education.map((edu, idx) => (
              <button
                key={edu.id}
                onClick={() => setActiveTab(idx)}
                className={`group flex flex-col items-center focus:outline-none transition-all duration-300 ${
                  activeTab === idx ? "scale-110" : "opacity-75 hover:opacity-100"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 shadow-xl ${
                    activeTab === idx
                      ? "bg-gradient-to-tr from-purple-600 to-indigo-600 border-white text-white shadow-[0_0_20px_rgba(130,69,236,0.8)]"
                      : "bg-gray-900 border-purple-500/40 text-purple-400 group-hover:border-purple-400"
                  }`}
                >
                  <FaGraduationCap size={22} />
                </div>
                <span
                  className={`text-xs font-bold mt-2.5 px-3 py-1 rounded-full transition-all ${
                    activeTab === idx
                      ? "bg-purple-950 text-purple-300 border border-purple-500/50"
                      : "text-gray-400"
                  }`}
                >
                  {edu.date.split("-")[0].trim()}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Cards Grid Layout (4 Columns Desktop / Responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {education.map((edu, index) => {
            const isFeatured = index === 0;
            const isSelected = activeTab === index;

            return (
              <div
                key={edu.id}
                onClick={() => setActiveTab(index)}
                className={`group relative cursor-pointer rounded-3xl p-6 transition-all duration-500 flex flex-col justify-between h-full border ${
                  isSelected
                    ? "bg-gradient-to-b from-purple-950/70 via-gray-900/90 to-indigo-950/70 border-purple-500/60 shadow-[0_0_30px_rgba(130,69,236,0.35)] -translate-y-2"
                    : "bg-gray-900/50 backdrop-blur-xl border-purple-500/20 hover:border-purple-500/40 hover:-translate-y-1"
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[10px] font-extrabold px-3 py-0.5 rounded-full shadow-md">
                    CURRENT DEGREE
                  </div>
                )}

                <div>
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between mb-4">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-12 h-12 shrink-0 rounded-2xl bg-white object-contain p-1.5 shadow-md border border-purple-500/20"
                    />
                    <div className="inline-flex items-center space-x-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-xs font-extrabold px-2.5 py-1 rounded-full">
                      <FaStar className="text-[10px] text-yellow-400" />
                      <span>{edu.grade}</span>
                    </div>
                  </div>

                  {/* Degree Title & Institution */}
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors leading-snug mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-purple-400 font-semibold text-xs mb-3 line-clamp-2">
                    {edu.school}
                  </p>

                  {/* Date & Location Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center space-x-1 bg-purple-950/70 border border-purple-500/30 text-purple-300 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                      <FaCalendarAlt className="text-[9px]" />
                      <span>{edu.date}</span>
                    </span>
                    {edu.location && (
                      <span className="inline-flex items-center space-x-1 text-gray-400 text-[11px] px-1 py-0.5">
                        <FaMapMarkerAlt className="text-purple-400 text-[9px]" />
                        <span>{edu.location}</span>
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-xs leading-relaxed line-clamp-4 mb-4">
                    {edu.desc}
                  </p>
                </div>

                {/* Coursework Tags for Featured Card */}
                {isFeatured && (
                  <div className="pt-3 border-t border-purple-500/20 mt-auto">
                    <p className="text-[10px] font-bold text-purple-300 uppercase tracking-wider mb-2 flex items-center space-x-1">
                      <FaBookOpen className="text-[9px]" />
                      <span>Key Subjects</span>
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {mnnitSubjects.slice(0, 3).map((sub, i) => (
                        <span key={i} className="bg-purple-950/80 border border-purple-500/30 text-purple-300 text-[10px] font-semibold px-2 py-0.5 rounded-md">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Horizontal Academic Honors Grid */}
        <div className="pt-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center justify-center space-x-2.5">
              <FaTrophy className="text-yellow-400 text-xl" />
              <span>ACADEMIC & COMPETITIVE <span className="gradient-text">HONORS</span></span>
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">Key entrance ranks, algorithmic solving records, and competition results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {honors.map((item) => (
              <div
                key={item.id}
                className="bg-gray-900/60 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(130,69,236,0.3)] hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-md">
                      <FaMedal className="text-base" />
                    </div>
                    <span className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-xs font-extrabold px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1.5">{item.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
