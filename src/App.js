import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills"; // ✅ New Skills component
import Contact from "./components/contact";
import WorkExperience from "./components/work experience";
import ResearchWork from "./components/Research work";
import Gallery from "./components/Gallery";



function App() {
  return (
    <div>
      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Me Section */}
      <section id="about">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>



    {/* Skills Section */}
<section id="skills">
  <Skills />
</section>



      {/* Work Experience Section */}
<section id="experience">
  <WorkExperience />
</section>

<section id="research">
  <ResearchWork />
</section>


{/* Gallery Section */}
<section id="gallery">
  <Gallery />
</section>

   {/* Contact Placeholder */}
      <section id="contact">
  <Contact />
</section>




    </div>
  );
}

export default App;
