import React from "react";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
const Projects = () => {
  const projects = [
    {
      id: 1,
      type: "clone",
      title: "Book My Show Clone",
      description: "Movie ticket booking platform built with React & Tailwind.  featuring real-time cursor tracking and smooth animations.",
      image: "BookMyShow.png",
      link: "https://bookmyshow-clone-kappa.vercel.app/",
    },
    {
      id: 2,
      type: "clone",
      title: "Spotify Clone",
      description: "Music streaming website UI built with React & Tailwind.  featuring real-time cursor tracking and smooth animations.",
      image: "Spotify.png",
      link: "https://spotify-clone-mauve-eight-16.vercel.app/",
    },
    // {
    //   id: 3,
    //   type: "clone",
    //   title: "Netflix Clone",
    //   description: "Movie streaming UI built with React & Tailwind.",
    //   image: "Netflix.jpg",
    //   link: "https://example.com/netflix-clone",
    // },
    {
      id: 4,
      type: "clone",
      title: "E-commerce Clone",
      description: "E-commerce website UI built with React & Tailwind.  featuring real-time cursor tracking and smooth animations.",
      image: "Cashify.png",
      link: "https://example.com/ecommerce-clone-2",
    },
    // {
    //   id: 5,
    //   type: "Basic",
    //   title: "Facebook Clone",
    //   description: "Social media UI built with React & Tailwind.",
    //   image: "Cashify.png",
    //   link: "https://example.com/facebook-clone"
    // },
    {
      id: 6,
      type: "basic",
      title: "Laptop Rent",
      description: "Rental service website made with HTML, CSS, JS & GSAP.  featuring real-time cursor tracking and smooth animations.",
      image: "LaptopRent.png",
      link: "https://laptoprent.netlify.app/",
    },
    {
      id: 7,
      type: "basic",
      title: "Enterprises",
      description:
        "Business website with animations using HTML, CSS, JS & GSAP.  featuring real-time cursor tracking and smooth animations.",
      image: "Enterprises.png",
      link: "https://aaradhyaenterprises.netlify.app/",
    },
    {
      id: 7,
      type: "basic",
      title: "Food Ordering",
      description:
        "Business website with animations using HTML, CSS, JS & GSAP.  featuring real-time cursor tracking and smooth animations.",
      image: "FoodKa.png",
      link: "https://aaradhyaenterprises.netlify.app/",
    },
    {
      id: 8,
      type: "mini",
      title: "Cursor Follower",
      description:
        "Built with HTML, Internal CSS, and JavaScript, featuring real-time cursor tracking and smooth animations.",
      image: "CursorFollower.png",
      link: "https://cursor-follower-mini.vercel.app/",
    },
    // {
    //   id: 9,
    //   type: "mini",
    //   title: "Stop Watch",
    //   description:
    //     "Implemented using HTML, external CSS, and JavaScript, displaying time using number images instead of text-based numbers.",
    //   image: "StopWatch.png",
    //   link: "https://stop-watch-mini.vercel.app/",
    // },
    {
      id: 9,
      type: "mini",
      title: "Number Guessing Game",
      description:
        "A number guessing game built with HTML, internal CSS, and JavaScript. numbers are shown as images instead of text.",
      image: "NumberGuessing.png",
      link: "https://number-game-mini.vercel.app/",
    },
    {
      id: 10,
      type: "mini",
      title: "Memory Card Game",
      description:
        "A Memory Card Game built with HTML, internal CSS, and JavaScript, featuring smooth animations and engaging gameplay.",
      image: "MemoryCard.png",
      link: "https://memory-game-mini.vercel.app/",
    },
  ];
  const countProjects = (type) => projects.filter((p) => p.type === type).length;

  const renderProjects = (category, title) => {
    const filteredProjects = projects.filter((proj) => proj.type === category);
    return (
      <section>
        <h2 className="project-category-title">{title}</h2>
        <div className="project-list">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-item">
              <div className="main">
                <img src={`/assets/Projects/${project.image}`} alt={project.title} />
                <div className="background"></div>
              </div>
              <div className="details">
                <img src={`/assets/Projects/GithubLogo.png`} alt="Project icon" />
                <div className="title">
                <h3>
    {project.title}{" "} 
    <a href={project.link} target="_blank" rel="noreferrer">
  <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginRight: "0" }} />
</a>

  </h3>
                  
                </div>
              </div>
              <p className="description">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  

  return (
    <div>
      {/* Project Statistics Section */}
      <section>
        <div className="projects">
          <div>
            <h2>{projects.length}+</h2>
            <p>Total Projects</p>
          </div>
          <div>
            <h2>{countProjects("clone")}+</h2>
            <p>Clone Projects</p>
          </div>
          <div>
            <h2>{countProjects("mini")}+</h2>
            <p>Mini Projects</p>
          </div>
          <div>
            <h2>{countProjects("basic")}+</h2>
            <p>Own Design</p>
          </div>
        </div>
      </section>

      {/* Filtered Categories */}
      {renderProjects("mini", "Mini Projects")}
      {renderProjects("basic", "Own Design ")}
       {renderProjects("clone", "Clone Projects")}
    </div>
  );
};

export default Projects;
