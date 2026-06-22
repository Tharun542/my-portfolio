import React from "react";
import linkedin from "../components/svg/linkedin.svg";
import github from "../components/svg/github.svg";

export default function Footer() {
  return (
    <>
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-12" />
          <div className="flex flex-col items-center text-center">
            <h3 className="text-3xl md:text-4xl font-black">
              Godasu{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Tharun
              </span>
            </h3>
            <p className="text-gray-400 mt-3">
              Software Engineer Intern | Full Stack Developer
            </p>
            <div className="flex gap-6 mt-8">
              <a href="https://www.linkedin.com/in/tharun-godasu-3a219a211/" target="_blank" rel="noreferrer" className=" p-4 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:-translate-y-1 transition-all duration-300">
                <img src={linkedin} alt="linkedin" className="w-6 h-6"/>
              </a>
              <a href="https://github.com/Tharun542" target="_blank" rel="noreferrer" className=" p-4 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:-translate-y-1 transition-all duration-300">
                <img src={github} alt="github" className="w-6 h-6"/>
              </a>
            </div>
            <p className="max-w-2xl text-gray-400 italic mt-10 leading-relaxed">
              "Excellence is never an accident. It is the result of
              high intention, sincere effort, and intelligent execution."
            </p>
          </div>
        </div>
      </section>
      <footer className="bg-black border-t border-white/10 py-6 text-center">
        <p className="text-gray-500 text-sm">
          © 2026 Godasu Tharun. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}