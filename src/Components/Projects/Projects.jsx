import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
    const [filter, setFilter] = useState("all");

    const projects = [
        { id: 1, type: "clone", title: "E-commerce Clone", description: "An Amazon-like e-commerce platform.", image: "ecommerce.jpg" },
        { id: 2, type: "mini", title: "To-Do App", description: "A simple to-do list with local storage.", image: "todo.jpg" },
        { id: 3, type: "mini", title: "Weather App", description: "Fetches real-time weather updates.", image: "weather.jpg" },
        { id: 4, type: "clone", title: "Netflix Clone", description: "A Netflix UI clone with movie API.", image: "netflix.jpg" },
        { id: 5, type: "basic", title: "Calculator", description: "A basic calculator using JavaScript.", image: "calculator.jpg" },
        { id: 6, type: "mini", title: "Portfolio Website", description: "A personal portfolio with animations.", image: "portfolio.jpg" },
        { id: 7, type: "basic", title: "Age Calculator", description: "Calculates age from date of birth.", image: "age_calculator.jpg" },
        { id: 8, type: "clone", title: "Facebook Clone", description: "A Facebook UI clone with React.", image: "facebook.jpg" },
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
                        <p>Basic Projects</p>
                    </div>
                </div>
            </section>

            {/* Filter Buttons */}
            <section className="filter-buttons">
                <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All</button>
                <button className={filter === "clone" ? "active" : ""} onClick={() => setFilter("clone")}>Clone Projects</button>
                <button className={filter === "mini" ? "active" : ""} onClick={() => setFilter("mini")}>Mini Projects</button>
                <button className={filter === "basic" ? "active" : ""} onClick={() => setFilter("basic")}>Basic Projects</button>
            </section>

            {/* Display Filtered Projects */}
            <section className="project-list">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="project-item">
                        <img src={`./images/${project.image}`} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Projects;
