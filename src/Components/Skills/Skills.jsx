import React from "react";
import "./Skills.css";

const skills = [
    { name: "Figma", image: "figma.png" },
    { name: "Git", image: "git.png" },
    { name: "GitHub", image: "github.png" },
    { name: "HTML", image: "html.png" },
    { name: "JavaScript", image: "javascript.png" },
    { name: "React", image: "react.png" },
    { name: "SQL", image: "sql.png" },
    { name: "Tailwind", image: "tailwind.png" },
    { name: "TypeScript", image: "typescript.png" },
    { name: "Adobe Photoshop", image: "adobe-photoshop.png" },
];

function Skills() {
    return (
        <div className="skills_section">
            <h1>My Skills</h1>
            <div className="skills_slider">
                <div className="skills_track">
                    {/* Duplicate images for smooth infinite scrolling */}
                    {[...skills, ...skills].map((skill, index) => (
                        <div key={index} className="skill_card">
                            <img src={`/assets/skills/${skill.image}`} alt={skill.name} />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
