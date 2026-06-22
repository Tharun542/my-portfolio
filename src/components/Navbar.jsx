import React, { useState } from "react";
import ToggleButton from "./svg/toggle.svg";
import Letter from "./svg/letter.svg";

export default function Navbar() {
  const [isButton, setIsButton] = useState(false);
  function isShown() {
    setIsButton((prev) => !prev);
  }
  function closeMenu() {
    setIsButton(false);
  }
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-slate-950/70 backdrop-blur-md border-b border-white/10 text-white">
      <div className="flex items-center gap-2">
        <img src={Letter} alt="logo" className="w-9 h-9" />
        <span className="text-xl font-bold tracking-wide bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Tharun
        </span>
      </div>
      <div className="relative">
        <button onClick={isShown} className="p-2 rounded-lg hover:bg-white/10 transition" >
          <img src={ToggleButton} alt="menu" className="w-7 h-7" />
        </button>
        {isButton && (
          <ul className="absolute right-0 top-14 w-48 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-xl p-4 flex flex-col gap-3 animate-fade-in">
            <li>
              <a href="#home" onClick={closeMenu} className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-blue-400 transition" >
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu} className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-blue-400 transition" >
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu} className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-blue-400 transition" >
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu} className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-blue-400 transition" >
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu} className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-blue-400 transition" >
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}