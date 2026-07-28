import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';

const App = () => {
  return (
    <div className="bg-[#050414] text-white min-h-screen relative overflow-x-hidden selection:bg-purple-600 selection:text-white">
      {/* Background Ambient Glow Blobs */}
      <BlurBlob position={{ top: '15%', left: '15%' }} size={{ width: '400px', height: '400px' }} />
      <BlurBlob position={{ top: '45%', left: '85%' }} size={{ width: '500px', height: '500px' }} />
      <BlurBlob position={{ top: '75%', left: '20%' }} size={{ width: '450px', height: '450px' }} />
      
      {/* Subtle Dark Mesh Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>
      
      <div className="relative z-10">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;