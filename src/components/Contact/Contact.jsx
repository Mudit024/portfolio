import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { bioInfo } from "../../constants";
import { FaEnvelope, FaMapMarkerAlt, FaCopy, FaCheck, FaPaperPlane, FaGithub, FaLinkedin, FaComments } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(bioInfo.email);
    setCopied(true);
    toast.success("Email copied to clipboard! 📋", {
      position: "top-right",
      autoClose: 2500,
      theme: "dark",
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_4wcj3bd",
        "template_gpgy1a8",
        form.current,
        "S0ls4Hlujj-yrtbl8"
      )
      .then(
        () => {
          setIsSubmitting(false);
          form.current.reset();
          toast.success("Message sent successfully! 🚀 I'll get back to you soon.", {
            position: "top-right",
            autoClose: 4000,
            theme: "dark",
          });
        },
        (error) => {
          setIsSubmitting(false);
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please email directly.", {
            position: "top-right",
            autoClose: 4000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-8 md:px-[7vw] lg:px-[12vw] font-sans relative"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          GET IN <span className="gradient-text">TOUCH</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          I'd love to hear from you! Whether you have a job opportunity, project inquiry, or just want to connect.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left Side: Contact Information Card */}
        <div className="lg:col-span-2 bg-gradient-to-b from-purple-950/40 via-gray-900/60 to-gray-950/80 border border-purple-500/20 backdrop-blur-xl rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
          <div>
            <div className="inline-flex items-center space-x-2 bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-bold px-3 py-1 rounded-full mb-6">
              <FaComments className="text-xs" />
              <span>Let's Connect</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-snug">
              Let's build something <span className="gradient-text">extraordinary</span> together.
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Open for full-time Software Developer, Frontend, Backend, and SDE roles. Feel free to drop a message or reach out directly via email.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-purple-500/15">
            {/* Email Card */}
            <div className="flex items-center justify-between p-3.5 bg-gray-950/70 border border-purple-500/20 rounded-2xl">
              <div className="flex items-center space-x-3 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-purple-400 text-sm" />
                </div>
                <div className="truncate">
                  <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Email</p>
                  <a href={`mailto:${bioInfo.email}`} className="text-xs font-bold text-white hover:text-purple-300 transition-colors truncate block">
                    {bioInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 text-gray-400 hover:text-white hover:bg-purple-950/60 rounded-xl transition shrink-0 ml-2"
                title="Copy Email"
              >
                {copied ? <FaCheck className="text-green-400 text-xs" /> : <FaCopy className="text-xs" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="flex items-center space-x-3 p-3.5 bg-gray-950/70 border border-purple-500/20 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                <FaMapMarkerAlt className="text-purple-400 text-sm" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Location</p>
                <p className="text-xs font-bold text-white">{bioInfo.location}</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={bioInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 bg-gray-900/80 hover:bg-gray-800 border border-purple-500/20 text-gray-200 py-2.5 rounded-xl text-xs font-bold transition-all"
              >
                <FaGithub className="text-sm" />
                <span>GitHub</span>
              </a>
              <a
                href={bioInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 bg-purple-950/60 hover:bg-purple-900/80 border border-purple-500/30 text-purple-200 py-2.5 rounded-xl text-xs font-bold transition-all"
              >
                <FaLinkedin className="text-sm text-[#0077b5]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Form */}
        <div className="lg:col-span-3 bg-gray-900/60 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6 sm:p-8 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-6">
            Send Me a Message 🚀
          </h3>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                Your Email Address
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="name@example.com"
                required
                className="w-full px-4 py-3 rounded-2xl bg-gray-950/80 text-white border border-purple-500/20 focus:border-purple-500 focus:outline-none transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Mudit Jawara"
                required
                className="w-full px-4 py-3 rounded-2xl bg-gray-950/80 text-white border border-purple-500/20 focus:border-purple-500 focus:outline-none transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Job Opportunity / Project Collaboration"
                required
                className="w-full px-4 py-3 rounded-2xl bg-gray-950/80 text-white border border-purple-500/20 focus:border-purple-500 focus:outline-none transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Hi Mudit, I'd like to discuss an opportunity..."
                required
                className="w-full px-4 py-3 rounded-2xl bg-gray-950/80 text-white border border-purple-500/20 focus:border-purple-500 focus:outline-none transition-all text-sm resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-shimmer text-white py-3.5 px-6 rounded-2xl font-extrabold text-sm flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(130,69,236,0.4)] disabled:opacity-50"
            >
              <FaPaperPlane className="text-xs" />
              <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;