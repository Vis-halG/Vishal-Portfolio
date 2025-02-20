import React from "react";
import "./Projects.css";

const Projects = () => {
    const projects = [
        { 
            id: 1, 
            type: "clone", 
            title: "Book My Show Clone", 
            description: "Movie ticket booking platform built with React & Tailwind.", 
            image: "BookMyShow.jpg", 
            link: "https://bookmyshow-clone-kappa.vercel.app/" 
          },
          { 
            id: 2, 
            type: "clone", 
            title: "Spotify Clone", 
            description: "Music streaming website UI built with React & Tailwind.", 
            image: "Spotify.jpg", 
            link: "https://spotify-clone-mauve-eight-16.vercel.app/" 
          },
          { 
            id: 3, 
            type: "clone", 
            title: "Netflix Clone", 
            description: "Movie streaming UI built with React & Tailwind.", 
            image: "Netflix.jpg", 
            link: "https://example.com/netflix-clone" 
          },
          { 
            id: 4, 
            type: "clone", 
            title: "E-commerce Clone", 
            description: "E-commerce website UI built with React & Tailwind.", 
            image: "Swiggy.jpg", 
            link: "https://example.com/ecommerce-clone-2" 
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
            description: "Rental service website made with HTML, CSS, JS & GSAP.", 
            image: "LaptopRent.png", 
            link: "https://laptoprent.netlify.app/" 
          },
          { 
            id: 7, 
            type: "basic", 
            title: "Enterprises", 
            description: "Business website with animations using HTML, CSS, JS & GSAP.", 
            image: "Enterprises.png", 
            link: "https://aaradhyaenterprises.netlify.app/" 
          },
          { 
            id: 7, 
            type: "basic", 
            title: "Enterprises", 
            description: "Business website with animations using HTML, CSS, JS & GSAP.", 
            image: "Enterprises.png", 
            link: "https://aaradhyaenterprises.netlify.app/" 
          },
            { 
              id: 8, 
              type: "mini", 
              title: "Cursor Follower", 
              description: "Built with HTML, Internal CSS, and JavaScript, featuring real-time cursor tracking and smooth animations.", 
              image: "CursorFollower.png", 
              link: "https://cursor-follower-mini.vercel.app/" 
            },
            { 
              id: 9, 
              type: "mini", 
              title: "Stop Watch", 
              description: "Implemented using HTML, external CSS, and JavaScript, displaying time using number images instead of text-based numbers.", 
              image: "StopWatch.png", 
              link: "https://stop-watch-mini.vercel.app/" 
            },
            { 
                id: 9, 
                type: "mini", 
                title: "Number Guessing Game", 
                description: "A number guessing game built with HTML, internal CSS, and JavaScript. Features a unique display where numbers are shown as images instead of text.", 
                image: "NumberGame.png", 
                link: "https://number-game-mini-qgk3jy4ae-vishalgs-projects.vercel.app/" 
              },
            { 
              id: 10, 
              type: "mini", 
              title: "Memory Card Game", 
              description: "A fun and interactive Memory Card Game built with HTML, internal CSS, and JavaScript, featuring smooth animations and engaging gameplay.", 
              image: "MemoryCard.png", 
              link: "https://memory-game-mini.vercel.app/" 
            }
          ];
    const renderProjects = (category, title) => {
        const filteredProjects = projects.filter(proj => proj.type === category);
        return (
            <section>
                <h2 className="category-title">{title}</h2>
                <div className="project-list">
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

            {/* Filtered Categories */}
             {renderProjects("mini", "Mini Projects")}
            {renderProjects("clone", "Clone Projects")}
           
            {renderProjects("basic", "Basic Web Pages")}
        </div>
    );
};

export default Projects;
