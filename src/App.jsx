import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Experience from './Components/Experience/Experience.jsx';
import ContactUs from './Components/ContactUs/ContactUs.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Experience />
      <ContactUs />
    </>
  );
}

export default App;
