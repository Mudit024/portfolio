
import React from "react";
import { education } from "../../constants";
import { FaGraduationCap, FaCalendarAlt, FaStar } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-4 md:px-[7vw] lg:px-[14vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>

        <div className="w-28 h-1 bg-[#8245ec] rounded-full mx-auto mt-4"></div>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
          My academic journey has helped me build a strong foundation in
          computer science, software engineering, and problem solving while
          continuously exploring modern technologies.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">

        {/* Vertical Line */}
        <div className="absolute left-5 md:left-1/2 top-0 h-full w-[3px] bg-gradient-to-b from-[#8245ec] to-purple-900 transform md:-translate-x-1/2"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex items-center mb-16 ${
              index % 2 === 0
                ? "md:flex-row"
                : "md:flex-row-reverse"
            }`}
          >

            {/* Timeline Icon */}
            <div className="absolute left-5 md:left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-[#8245ec] border-4 border-gray-900 flex items-center justify-center z-20 shadow-lg">
              <FaGraduationCap className="text-white text-xl" />
            </div>

            {/* Spacer */}
            <div className="hidden md:block md:w-1/2"></div>

            {/* Card */}
            <div className="ml-16 md:ml-0 md:w-1/2 md:px-10">
              <div className="group bg-[#111827]/90 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-5 sm:p-6 transition-all duration-500 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_35px_rgba(130,69,236,0.35)]">

                {/* Top */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left">

                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-16 h-16 shrink-0 rounded-xl bg-white object-contain p-2"
                  />

                  <div>

                    <h3 className="text-xl font-bold text-white">
                      {edu.degree}
                    </h3>

                    <p className="text-[#8245ec] font-medium mt-1">
                      {edu.school}
                    </p>

                    <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-400 text-sm mt-2">
                      <FaCalendarAlt />
                      {edu.date}
                    </div>

                  </div>

                </div>

                {/* Grade */}
                <div className="mt-5 flex items-center justify-center sm:justify-start gap-2">
                  <FaStar className="text-yellow-400" />

                  <span className="text-white font-medium">
                    Grade:
                  </span>

                  <span className="text-gray-300">
                    {edu.grade}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-7 mt-5 text-center sm:text-left">
                  {edu.desc}
                </p>

              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Education;

