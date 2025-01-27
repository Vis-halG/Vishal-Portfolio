import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
    const [filter, setFilter] = useState("all");

    const projects = [
        { id: 1, type: "clone", title: "E-commerce Clone", description: "An Amazon-like e-commerce platform.", image: "BookMyShow.jpg", link: "https://example.com/ecommerce-clone" },
        { id: 2, type: "clone", title: "To-Do App", description: "A simple to-do list with local storage.", image: "Swiggy.jpg", link: "https://example.com/todo-app" },
        { id: 4, type: "clone", title: "Netflix Clone", description: "A Netflix UI clone with movie API.", image: "Netflix.jpg", link: "https://example.com/netflix-clone" },
        { id: 9, type: "clone", title: "E-commerce Clone", description: "An Amazon-like e-commerce platform.", image: "Spotify.jpg", link: "https://example.com/ecommerce-clone-2" },
        { id: 8, type: "clone", title: "Facebook Clone", description: "A Facebook UI clone with React.", image: "Cashify.png", link: "https://example.com/facebook-clone" },
        { id: 5, type: "basic", title: "Calculator", description: "A basic calculator using JavaScript.", image: "LaptopRent.png", link: "https://laptoprent.netlify.app/" },
        { id: 7, type: "basic", title: "Age Calculator", description: "Calculates age from date of birth.", image: "Enterprises.png", link: "https://aaradhyaenterprises.netlify.app/" },
        { id: 6, type: "mini", title: "Portfolio Website", description: "A personal portfolio with animations.", image: "CursorFollower.png", link: "https://example.com/portfolio-website" },
        { id: 3, type: "mini", title: "Weather App", description: "Fetches real-time weather updates.", image: "StopWatch.png", link: "https://example.com/weather-app" },
        { id: 10, type: "mini", title: "Weather App", description: "Fetches real-time weather updates.", image: "SearchBar.png", link: "https://example.com/weather-app" },
        
    ];

    const filteredProjects = filter === "all" ? projects : projects.filter(proj => proj.type === filter);

    return (
        <div>
            {/* Project Statistics Section */}
            <section>
                <div className="projects">
                    <div>
                        <h2>15+</h2>
                        <p>Total Projects</p>
                    </div>
                    <div>
                        <h2>03+</h2>
                        <p>Clone Projects</p>
                    </div>
                    <div>
                        <h2>08+</h2>
                        <p>Mini Projects</p>
                    </div>
                    <div>
                        <h2>02+</h2>
                        <p>Basic Web Pages</p>
                    </div>
                </div>
            </section>

            {/* Filter Buttons */}
            <section className="filter-buttons">
                <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All</button>
                <button className={filter === "clone" ? "active" : ""} onClick={() => setFilter("clone")}>Clone Projects</button>
                <button className={filter === "mini" ? "active" : ""} onClick={() => setFilter("mini")}>Mini Projects</button>
                <button className={filter === "basic" ? "active" : ""} onClick={() => setFilter("basic")}>Web Pages</button>
            </section>

            {/* Display Filtered Projects */}
            <section className="project-list">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="project-item">
                        <img src={`/assets/Projects/${project.image}`} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project-button">
                            View Project
                        </a>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Projects;
