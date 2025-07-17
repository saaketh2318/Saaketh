import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-cyan-400">
          Saaketh.dev
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-md">
          <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
          <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
          <li><a href="#experience" className="hover:text-cyan-400 transition">Work Experience</a></li>
          <li><a href="#research" className="hover:text-cyan-400 transition">Research Work</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
          <li>
            <a
              href="/Saaketh_Choudarapu_Resume.pdf"
              download
              className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition"
            >
              Download Resume
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-50">
          {menuOpen ? (
            <FaTimes size={24} onClick={toggleMenu} />
          ) : (
            <FaBars size={24} onClick={toggleMenu} />
          )}
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <ul className="absolute top-20 left-0 w-full bg-black/90 backdrop-blur-md text-white flex flex-col items-center space-y-6 py-6 text-lg md:hidden">
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#experience" onClick={closeMenu}>Work Experience</a></li>
            <li><a href="#research" onClick={closeMenu}>Research Work</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            <li>
              <a
                href="/Saaketh_Choudarapu_Resume.pdf"
                download
                className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition"
              >
                Download Resume
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
