import React from "react";
import qkart from "../assets/images/qkart.png";
import tracker from "../assets/images/expensetracker.png";
import portfolio from "../assets/images/portfolio.png";
import qtify from "../assets/images/qtify.png";
import calculator from "../assets/images/calculator.png";
import botAI from "../assets/images/botAI.png";
import qtrip from "../assets/images/qtrip.png";

export default function Projects() {
  const projects = [
    {
      name: "QKart Project Frontend",
      img: qkart,
      desc: "A modern e-commerce platform featuring product browsing, search, filtering, and shopping cart functionality.",
      technologies: [
        "ReactJS",
        "JavaScript",
        "Material UI",
      ],
      livedemo: 'https://godasutharun143-me-qkart-frontend-v2-9dze4p91f.vercel.app/'
    },
    {
      name: "Expense Tracker",
      img: tracker,
      desc: "Track expenses and visualize spending patterns using charts and analytics dashboards.",
      technologies: [
        "ReactJS",
        "JavaScript",
        "Charts",
        "Material UI",
      ],
      livedemo: 'https://xpense-tracker-blue.vercel.app/'
    },
    {
      name: "Portfolio Website",
      img: portfolio,
      desc: "Personal portfolio showcasing projects, skills, experience, and modern UI animations.",
      technologies: [
        "ReactJS",
        "Tailwind CSS",
        "Framer Motion",
      ],
      livedemo: 'https://my-portfolio-swart-seven-96.vercel.app/'
    },
    {
      name: "QTify App",
      img: qtify,
      desc: "Personal portfolio showcasing projects, skills, experience, and modern UI animations.",
      technologies: [
        "ReactJS",
        "Material UI",
        "Javascript",
      ],
      livedemo: 'https://qtifyapp-psi.vercel.app/'
    },
    {
      name: "Calculator By React",
      img: calculator,
      desc: "Personal portfolio showcasing projects, skills, experience, and modern UI animations.",
      technologies: [
        "ReactJS",
        "Javascript",
        "CSS",
      ],
      livedemo: 'https://calculator-app-7uu2.vercel.app/'
    },
    {
      name: "BotAI App",
      img: botAI,
      desc: "Personal portfolio showcasing projects, skills, experience, and modern UI animations.",
      technologies: [
        "ReactJS",
        "Javascript",
        "Material UI",
      ],
      livedemo: 'https://ai-bot-app-hazel.vercel.app/'
    },
    {
      name: "QTrip Static website",
      img: qtrip,
      desc: "Personal portfolio showcasing projects, skills, experience, and modern UI animations.",
      technologies: [
        "HTML",
        "Javascript",
        "CSS",
        "Bootstrap"
      ],
      livedemo: 'https://qtrip-static-chi-ten.vercel.app/'
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-6 bg-black text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm"> My Work </p>
          <h2 className="text-5xl md:text-6xl font-black mt-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Projects built using modern frontend and full-stack
            technologies with focus on performance and user experience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className=" group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]
                transition-all duration-500">
              <div className="overflow-hidden">
                <img src={project.img} alt={project.name} className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"/>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {project.name}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-5">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className=" px-3 py-1 rounded-full text-xs bg-cyan-500/10 border border-cyan-400/20 text-cyan-300"> {tech} </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className=" flex-1 py-2 rounded-xl bg-cyan-500 text-black font-semibold hover:scale-105 transition"><a href={project.livedemo}>Live Demo</a></button>
                  <button className="flex-1 py-2 rounded-xl border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition">GitHub</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}