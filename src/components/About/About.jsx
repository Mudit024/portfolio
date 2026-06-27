import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.webp";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Mudit Jawara
          </h2>

          {/* Typing Animation */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-white">I am a </span>

            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
               "Competitive Programmer!",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#8245ec]"
            />
          </h3>

          {/* About */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a full-stack developer with over 2 years of experience in
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and modern
            technologies to create seamless user experiences and efficient
            solutions.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1gs3LY7GpXINJkJcRtc5NFygh-nWhFUho/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 10px #8245ec, 0 0 30px #8245ec",
            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] rounded-full border-4 border-purple-700 overflow-hidden"
          >
            <img
              src={profileImage}
              alt="Mudit Jawara"
              className="w-full h-full object-cover"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;