import React from "react";
import Home from    "./Components/Home/Home.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
// import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects/>
      <Skills/>
      <Experience/>
      <ContactUs/>
       {/* <Dashboard/> */}
    </div>
  );
}

export default App;
