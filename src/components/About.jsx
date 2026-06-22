import React from "react";
import face from "../assets/images/face.png";
export default function About() {
  const skills = [
    "ReactJS",
    "Vue.js",
    "Nuxt.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Python",
    "MySQL Basics"
  ];

  return (
    <section id="about" className="relative min-h-screen bg-black text-white overflow-hidden py-20 px-6" >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm"> Get To Know Me </p>
          <h2 className="text-5xl md:text-6xl font-black mt-4"> About{" "} <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Software Engineer Intern passionate about building modern,
            scalable, and user-focused web applications.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 gap-6 lg:auto-rows-[260px]">
          <div className="lg:col-span-2 lg:row-span-2 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:border-cyan-400 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-cyan-500/30 blur-3xl rounded-full group-hover:scale-125 transition duration-500" />
                <img
                  src={face}
                  alt="profile"
                  className="
                    relative z-10
                    w-48 h-48
                    rounded-full
                    object-cover
                    border-4 border-cyan-400
                    shadow-[0_0_25px_rgba(34,211,238,0.3)]
                    transition-all duration-500
                    group-hover:-translate-y-3
                    group-hover:scale-105
                  "
                />
              </div>
              <h3 className="text-4xl font-bold mt-8"> Tharun Godasu </h3>
              <p className="text-cyan-400 text-lg mt-2"> Software Engineer Intern </p>
              <div className="w-24 h-1 rounded-full bg-cyan-400 mt-4" />
              <p className="text-gray-400 mt-5 max-w-md leading-relaxed">
                Software Engineer Intern at DashLoc and a 2024 Computer
                Science graduate. Passionate about building modern web
                applications using ReactJS, Vue.js, Node.js, Express.js,
                MongoDB, and Tailwind CSS.
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 flex flex-col justify-center hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-4xl font-bold text-cyan-400"> 3+ </h3>
            <p className="text-gray-400 mt-2"> Months Internship </p>
          </div>
          <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 flex flex-col justify-center hover:border-purple-400 hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-4xl font-bold text-purple-400"> 10+ </h3>
            <p className="text-gray-400 mt-2"> Projects Built </p>
          </div>
          <div className="lg:col-span-2 lg:row-span-2 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:border-cyan-400 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
            <h3 className="text-2xl text-center font-bold mb-6"> My Journey</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I am currently working as a Software Engineer Intern
                at DashLoc, where I contribute to modern web
                applications and gain valuable industry experience.
              </p>
              <p>
                My expertise includes ReactJS, Vue.js, Nuxt.js,
                JavaScript, Tailwind CSS, and responsive frontend
                development.
              </p>
              <p>
                I am actively strengthening my backend skills with
                Node.js, Express.js, MongoDB, and REST APIs to become
                a strong Full Stack Developer.
              </p>
              <p>
                As a 2024 Computer Science graduate, I enjoy solving
                real-world problems through clean code, scalable
                architecture, and user-focused design.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:border-purple-400 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
            <h3 className="text-2xl font-bold mb-5"> Tech Stack </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    px-4 py-2
                    rounded-full
                    bg-cyan-500/10
                    border border-cyan-400/20
                    text-cyan-300
                    hover:bg-cyan-500/20
                    hover:scale-105
                    transition-all duration-300
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}