import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-4 md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I'm a passionate fresher actively seeking opportunities to begin my
          professional software development career.
        </p>
      </div>

      {/* Card */}
      <div className="flex justify-center">
        <div className="max-w-3xl w-full bg-gray-900 border border-white rounded-2xl p-5 sm:p-8 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-105">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left">
            <div className="w-16 h-16 shrink-0 rounded-full bg-[#8245ec] flex items-center justify-center">
              <FaBriefcase className="text-white text-3xl" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">
                Open to Work
              </h3>
              <p className="text-[#8245ec] font-medium mt-1">
                Fresher • Software Developer
              </p>
            </div>
          </div>

          <p className="text-gray-400 mt-6 leading-8 text-left sm:text-left">
            I am currently pursuing my MCA and actively looking for
            Software Developer, Full Stack Developer, Frontend Developer,
            Backend Developer, and SDE roles. Although I am a fresher,
            I have built multiple real-world projects using modern technologies
            and continuously improve my problem-solving skills through Data
            Structures & Algorithms.
          </p>

          <div className="mt-8">
            <h4 className="text-white font-semibold mb-4 text-center sm:text-left">
              What I Bring
            </h4>

            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
              {[
                "C++",
                "JavaScript",
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Tailwind CSS",
                "REST APIs",
                "Git",
                "GitHub",
                "DSA",
                "Problem Solving",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#8245ec] text-white px-4 py-2 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-3 text-green-400 text-center sm:text-left">
            <FaGraduationCap className="text-xl shrink-0" />
            <span>
              Available for Full-Time Opportunities & Internships
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;