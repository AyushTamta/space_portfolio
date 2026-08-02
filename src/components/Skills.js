import React from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faGitAlt,
  faJava, faPython, faDocker, faAws, faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase, faLayerGroup, faBolt, faWind, faRobot, faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";

const skills = [
  { name: "HTML", icon: faHtml5, ring: 1, delay: 0 },
  { name: "CSS", icon: faCss3Alt, ring: 1, delay: -4.3 },
  { name: "JavaScript", icon: faJs, ring: 1, delay: -8.6 },
  { name: "React", icon: faReact, ring: 2, delay: 0 },
  { name: "Node.js", icon: faNodeJs, ring: 2, delay: -5 },
  { name: "Git", icon: faGitAlt, ring: 2, delay: -10 },
  { name: "Java", icon: faJava, ring: 2, delay: -15 },
  { name: "Python", icon: faPython, ring: 3, delay: 0 },
  { name: "SQL", icon: faDatabase, ring: 3, delay: -5.2 },
  { name: "Databricks", icon: faLayerGroup, ring: 3, delay: -10.4 },
  { name: "PySpark", icon: faBolt, ring: 3, delay: -15.6 },
  { name: "Airflow", icon: faWind, ring: 3, delay: -20.8 },
  { name: "Azure", icon: faMicrosoft, ring: 4, delay: 0 },
  { name: "AWS", icon: faAws, ring: 4, delay: -6.4 },
  { name: "Docker", icon: faDocker, ring: 4, delay: -12.8 },
  { name: "Delta Lake", icon: faDatabase, ring: 4, delay: -19.2 },
  { name: "GenAI", icon: faRobot, ring: 4, delay: -25.6 },
  { name: "RAG", icon: faDiagramProject, ring: 4, delay: -32 },
];

const Skills = () => (
  <section className="skills-section" id="skills" aria-labelledby="skills-title">
    <div className="space-depth" aria-hidden="true">
      <div className="interstellar">{[...Array(8)].map((_, i) => <span key={i}></span>)}</div>
      <div className="skills-stars">
        {[...Array(40)].map((_, i) => (
          <span key={i} style={{ top: `${(i * 37) % 100}%`, left: `${(i * 61) % 100}%`, animationDelay: `${(i % 8) * .55}s` }}></span>
        ))}
      </div>
    </div>

    <h2 className="section-title" id="skills-title">Skills</h2>
    <p className="skills-subtitle">Engineering across full-stack, data platforms, cloud, and AI.</p>

    <div className="solar-system" aria-hidden="true"></div>

    {skills.map((skill) => (
      <div
        className={`skill-planet ring-${skill.ring}`}
        key={skill.name}
        style={{ animationDelay: `${skill.delay}s` }}
      >
        <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
        <div className="skill-name">{skill.name}</div>
      </div>
    ))}
  </section>
);

export default Skills;
