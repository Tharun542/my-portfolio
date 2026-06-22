import React from "react";
import Robot from "../assets/images/avator-Bn8UfA03.png";
import  { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Main() {
  const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Software Engineer",
  "Full Stack Developer"
];
const [currentRole, setCurrentRole] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentRole((prev) => (prev + 1) % roles.length);
  }, 2000);
  return () => clearInterval(interval);
}, []);
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden px-6">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/20 blur-3xl rounded-full animate-pulse pointer-events-none" />
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left">
          <p className="text-cyan-400 font-medium tracking-wider mb-3"> WELCOME TO MY PORTFOLIO </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm <br />
            <span className="text-cyan-400">Tharun Godasu</span>
          </h1>
          <div className="mt-4 h-12 flex justify-center md:justify-start items-center">
            <AnimatePresence mode="wait">
              <motion.h2
                key={roles[currentRole]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-semibold text-cyan-400"
              >
                {roles[currentRole]}
              </motion.h2>
            </AnimatePresence>
          </div>
          <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
            I create modern, scalable web applications using React, Node.js,
            Express.js, MongoDB, Vue.js and other cutting-edge technologies.
            Passionate about building user-focused digital experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="px-8 py-3 rounded-full bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/40 hover:scale-105 hover:shadow-cyan-500/60 transition-all duration-300">
             <a href="#projects">View My Work</a> 
            </button>
            <a href="/tharun1resume.pdf" download="Tharun_Godasu_Resume.pdf" className="px-8 py-3 rounded-full border border-cyan-400 text-cyan-300 font-semibold hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300" >
              Download Resume
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full scale-110 group-hover:scale-125 transition duration-500" />
            <img src={Robot} alt="robot"
                className="
                relative z-10
                w-[280px]
                md:w-[380px]
                object-contain
                drop-shadow-[0_0_35px_cyan]
                transition-all
                duration-500
                ease-out
                group-hover:-translate-y-6
                group-hover:scale-105
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}