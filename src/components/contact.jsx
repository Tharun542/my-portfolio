import React, { useState } from "react";
import { motion } from "framer-motion";
import robot from "../assets/images/astra---BKFCAy.png";
const API_URL = import.meta.env.VITE_API_URL;
console.log("API", API_URL);

export default function Contact() {
  const [contact, setContact ] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [error, setError] = useState([]);
  
  const handleChange=(e)=>{
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  }

  const handleFormSubmit = async(e) => {
    e.preventDefault()
    console.log("hello world");
    
    try{
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
      })

      const data = await response.json();
      console.log(data);
      if(!response.ok){
        setError(data.error)
      }
      setContact({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setError([]);
    }catch(error){
      console.log(error)
    }
  }

  return (
    <section id="contact" className="relative py-24 px-6 bg-black text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[150px] rounded-full" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full" />
              <motion.img
                src={robot}
                alt="AI Robot"
                animate={{
                  y: [0, -25, 0],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative z-10
                  w-[320px]
                  md:w-[450px]
                  drop-shadow-[0_0_40px_rgba(34,211,238,0.6)]
                "
              />
            </div>
          </div>
          <div>
            <div className="mb-10">
              <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
                Contact Me
              </p>
              <h2 className="text-4xl md:text-5xl font-black mt-4">
                Let's{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Work Together
                </span>
              </h2>
              <p className="text-gray-400 mt-4">Have a project, idea, collaboration, or opportunity? I'd love to hear from you.</p>
            </div>
            {error.length > 0 && (
              <div className="mb-6 p-4 rounded-xl border border-red-500/30 bg-red-500/10">

                {error.map((message, index) => (
                  <p
                    key={index}
                    className="text-red-400 text-sm mb-1 last:mb-0"
                  >
                   {message}
                  </p>
                ))}

              </div>
            )}
            <form onSubmit={handleFormSubmit} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-6 hover:border-cyan-400 transition-all duration-500">
              <div>
                <label className="block mb-2 text-gray-300">Full Name</label>
                <input type="text" name="name" value={contact.name} onChange={handleChange} placeholder="Enter your full name" className=" w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition"/>
              </div>
              <div>
                <label className="block mb-2 text-gray-300">Email Address</label>
                <input type="email" name="email" value={contact.email} onChange={handleChange} placeholder="Enter your email" className=" w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition"/>
              </div>
              <div>
                <label className="block mb-2 text-gray-300"> Subject</label>
                <input type="text" name="subject" value={contact.subject} onChange={handleChange} placeholder="Project, Collaboration, Query..." className=" w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition"/>
              </div>
              <div>
                <label className="block mb-2 text-gray-300"> Message</label>
                <textarea name="message" value={contact.message} onChange={handleChange} rows="5" placeholder="Tell me about your project or idea..." className=" w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none resize-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition"/>
              </div>
              <button
                type="submit"
                className=" w-full py-4 rounded-xl bg-cyan-500 text-black font-bold hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300">
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}