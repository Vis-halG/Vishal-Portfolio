import React, { useEffect, useState, useRef } from "react";
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
    const [isVisible, setIsVisible] = useState(false);
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                setIsVisible(entries[0].isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);

    return (
        <div ref={skillsRef} className="skills_section" id="skills_section">
            <h1>Tech Stack</h1>
            <div className="skills_grid">
                {skills.map((skill, index) => (
                    <div 
                        key={index} 
                        className={`skill_card ${isVisible ? "pop-move" : "pop-down"}`} 
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <img src={`/assets/skills/${skill.image}`} alt={skill.name} />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
