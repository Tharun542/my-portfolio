import React from "react";
import { motion } from "framer-motion";
import Expresslogo from "../components/svg/express.svg";
import Nodejslogo from "../components/svg/node.svg";
import Reactlogo from "../components/svg/react.svg";
import Vuelogo from "../components/svg/vue.svg";
import Html from "../components/svg/html.svg";
import MongoDB from "../components/svg/mongo.svg";
import MUI from "../components/svg/materialUI.svg";
import Python from "../components/svg/python.svg";
import Tailwind from "../components/svg/taildwind.svg";
import NuxtJS from "../components/svg/nuxt.svg"
export default function Skills() {
  const skills = [
    {
      name: "ReactJS",
      img: Reactlogo,
      color: "text-cyan-400",
    },
    {
      name: "NodeJS",
      img: Nodejslogo,
      color: "text-green-400",
    },
    {
      name: "ExpressJS",
      img: Expresslogo,
      color: "text-gray-300",
    },
    {
      name: "VueJS",
      img: Vuelogo,
      color: "text-green-500",
    },
    {
      name: "HTML",
      img: Html,
      color: "text-orange-500",
    },
    {
      name: "MongoDB",
      img: MongoDB,
      color: "text-green-400",
    },
    {
      name: "Material UI",
      img: MUI,
      color: "text-blue-400",
    },
    {
      name: "Python",
      img: Python,
      color: "text-yellow-400",
    },
    {
      name: "Tailwind",
      img: Tailwind,
      color: "text-cyan-400",
    },
    {
      name: "NuxtJS",
      img: NuxtJS,
      color: "text-cyan-400",
    }
  ];
  return (
    <section id="skills" className="relative py-24 bg-black text-white overflow-hidden" >
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />
      <div className="relative z-10">
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm"> Technologies I Use </p>
          <h2 className="text-5xl md:text-6xl font-black mt-4"> My{" "}<span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> Skills</span></h2>
          <p className="text-gray-400 mt-4"> Modern Technologies | Modern Applications</p>
        </div>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="
                  group
                  w-44 h-44
                  shrink-0
                  rounded-3xl
                  bg-white/5
                  backdrop-blur-xl
                  border border-white/10
                  flex flex-col
                  items-center
                  justify-center
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-cyan-400
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]
                "
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="
                    w-20 h-20
                    object-contain
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />
                <p
                  className={`
                    mt-4
                    font-semibold
                    ${skill.color}
                    transition-all
                    duration-300
                  `}
                >
                  {skill.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}