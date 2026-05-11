import React from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
faHtml5,
faCss3Alt,
faJs,
faReact,
faNodeJs,
faGit,
faJava,
faPython
} from "@fortawesome/free-brands-svg-icons";

import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {

return (

<div className="skills-section" id="skills">

{/* Rotated Depth Background */}

<div className="space-depth">

{/* Interstellar Glow */}

<div className="interstellar">
{[...Array(8)].map((_,i)=>(
<span key={i}></span>
))}
</div>

{/* Twinkling Stars */}

<div className="skills-stars">
{[...Array(40)].map((_,i)=>(
<span
key={i}
style={{
top:Math.random()*100+"%",
left:Math.random()*100+"%",
animationDelay:Math.random()*5+"s"
}}
></span>
))}
</div>

</div>

{/* Title */}

<h2 className="section-title">Skills</h2>

{/* Sun */}

<div className="solar-system"></div>

{/* Skills Orbit */}

<div className="planet1">
<FontAwesomeIcon icon={faHtml5} className="skill-icon"/>
<div className="skill-name">HTML</div>
</div>

<div className="planet2">
<FontAwesomeIcon icon={faCss3Alt} className="skill-icon"/>
<div className="skill-name">CSS</div>
</div>

<div className="planet3">
<FontAwesomeIcon icon={faJs} className="skill-icon"/>
<div className="skill-name">JavaScript</div>
</div>

<div className="planet4">
<FontAwesomeIcon icon={faReact} className="skill-icon"/>
<div className="skill-name">React</div>
</div>

<div className="planet5">
<FontAwesomeIcon icon={faNodeJs} className="skill-icon"/>
<div className="skill-name">Node</div>
</div>

<div className="planet6">
<FontAwesomeIcon icon={faGit} className="skill-icon"/>
<div className="skill-name">Git</div>
</div>

<div className="planet7">
<FontAwesomeIcon icon={faJava} className="skill-icon"/>
<div className="skill-name">Java</div>
</div>

<div className="planet8">
<FontAwesomeIcon icon={faPython} className="skill-icon"/>
<div className="skill-name">Python</div>
</div>

<div className="planet9">
<FontAwesomeIcon icon={faDatabase} className="skill-icon"/>
<div className="skill-name">SQL</div>
</div>
x
</div>

);

};

export default Skills;
