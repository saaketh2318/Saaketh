import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-cyan-400">
          Saaketh.dev
        </a>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-md items-center">
          <li>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-cyan-400 transition">
              Work Experience
            </a>
          </li>
          <li>
            <a href="#research" className="hover:text-cyan-400 transition">
              Research
            </a>
          </li>


          <li>
  <a href="#gallery" className="hover:text-cyan-400 transition">
    Gallery
  </a>
</li>
          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>




          <li>
            <a
              href="/Saaketh_Choudarapu_Resume.pdf"
              download
              className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
