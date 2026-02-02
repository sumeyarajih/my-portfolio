import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionWrapper from './components/SectionWrapper';

function App() {
  return (
    <div className="font-sans antialiased text-dark bg-white selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />

        <SectionWrapper id="about">
          <About />
        </SectionWrapper>

        <SectionWrapper id="education">
          <Education />
        </SectionWrapper>

        <SectionWrapper id="languages">
          <Languages />
        </SectionWrapper>

        <SectionWrapper id="skills">
          <Skills />
        </SectionWrapper>

        <SectionWrapper id="projects">
          <Projects />
        </SectionWrapper>

        <SectionWrapper id="experience">
          <Experience />
        </SectionWrapper>

        <SectionWrapper id="contact">
          <Contact />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}

export default App;
