import React, { useState } from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Languages", "Tools"];

  const filteredCategories =
    activeCategory === "All"
      ? SkillsInfo
      : SkillsInfo.filter((cat) => cat.title.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-8 md:px-[7vw] lg:px-[12vw] font-sans relative"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          TECHNICAL <span className="gradient-text">SKILLS</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          A comprehensive suite of technologies, frameworks, databases, and development tools I work with.
        </p>

        {/* Category Filter Tabs */}
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

      {/* Skill Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCategories.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900/50 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6 sm:p-8 shadow-[0_0_25px_rgba(0,0,0,0.4)] hover:border-purple-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(130,69,236,0.25)]"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center justify-between pb-3 border-b border-purple-500/15">
              <span>{category.title}</span>
              <span className="text-xs font-semibold text-purple-400 bg-purple-950/60 border border-purple-500/30 px-3 py-1 rounded-full">
                {category.skills.length} Techs
              </span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
              {category.skills.map((skill) => (
                <Tilt
                  key={skill.name}
                  tiltMaxAngleX={12}
                  tiltMaxAngleY={12}
                  scale={1.03}
                  transitionSpeed={800}
                  gyroscope={true}
                  className="h-full"
                >
                  <div className="flex items-center space-x-3 bg-gray-950/60 border border-gray-800 hover:border-purple-500/60 rounded-2xl p-3 text-left transition-all duration-300 hover:bg-purple-950/30 group shadow-md">
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white truncate">
                      {skill.name}
                    </span>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;