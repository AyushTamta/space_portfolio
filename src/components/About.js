// About.js

import React, { useRef } from "react";
import "./About.css";

import profilePhoto from "./photo6.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
faGithub,
faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import {
faEnvelope
} from "@fortawesome/free-solid-svg-icons";

function About(){

const aboutRef = useRef(null);

const handleMouseMove=(e)=>{

const aboutElement=aboutRef.current;

if(aboutElement){

const sparkle=document.createElement("div");

sparkle.classList.add("sparkle");

const x =
e.clientX -
aboutElement.getBoundingClientRect().left;

const y =
e.clientY -
aboutElement.getBoundingClientRect().top;

sparkle.style.left=`${x}px`;
sparkle.style.top=`${y}px`;

aboutElement.appendChild(sparkle);

setTimeout(()=>{
sparkle.remove();
},600);

}

};

return(

<section
ref={aboutRef}
id="about"
className="about"
onMouseMove={handleMouseMove}
>

<div className="stars"></div>
<div className="stars2"></div>
<div className="stars3"></div>

<div className="particles">

{
[...Array(20)].map((_,i)=>(

<span
key={i}
style={{
left:Math.random()*100+"%",
top:Math.random()*100+"%",
animationDelay:Math.random()*10+"s"
}}
/>

))
}

</div>

{/* SINGLE GLASS CARD */}

<div className="about-card">

{/* LEFT PROFILE */}

<div className="profile-side">

<div className="planet-ring"></div>

<div className="photo-wrapper">

<img
src={profilePhoto}
className="profile-photo"
alt="profile"
/>

<div className="social-orbit">

<a
href="https://github.com/AyushTamta"
target="_blank"
rel="noreferrer"
className="social-icon github"
>

<FontAwesomeIcon icon={faGithub}/>

</a>

<a
href="https://www.linkedin.com/in/ayushtamta/"
target="_blank"
rel="noreferrer"
className="social-icon linkedin"
>

<FontAwesomeIcon icon={faLinkedin}/>

</a>

<a
href="mailto:ayush.tamta111@gmail.com"
className="social-icon mail"
>

<FontAwesomeIcon icon={faEnvelope}/>

</a>

</div>

</div>

</div>

{/* RIGHT CONTENT */}

<div className="content-side">

<div className="status-badge">

<span className="status-dot"></span>

AVAILABLE FOR OPPORTUNITIES

</div>

<div className="terminal-box">

<p>{">"} initializing developer profile...</p>
<p>{">"} loading creativity modules...</p>
<p>{">"} system ready</p>

</div>

<h5 className="mini-title">
MISSION BRIEF
</h5>

<h2>
Ayush Tamta
</h2>

<h3>
Software Developer • Data Analyst • Problem Solver
</h3>

<p>

I am a passionate software developer focused on building
modern, scalable and intelligent digital experiences.

<br/><br/>

With expertise in React, JavaScript, backend technologies,
banking systems and analytical applications, I enjoy solving
real-world business problems through elegant solutions.

<br/><br/>

Currently exploring AI systems, immersive interfaces and
future-ready technologies while continuously learning
and evolving.

</p>

{/* TECH STACK */}

<div className="tech-stack">

<span>React</span>
<span>JavaScript</span>
<span>Node.js</span>
<span>Python</span>
<span>SQL</span>
<span>AI</span>
<span>Data Analysis</span>
<span>Business Analysis</span>
<span>Banking Analytics</span>
<span>Data Visualization</span>

</div>

{/* STATS */}

<div className="about-stats">

<div className="stat-card">

<h4>4+</h4>
<p>Years</p>

</div>

<div className="stat-card">

<h4>15+</h4>
<p>Projects</p>

</div>

<div className="stat-card">

<h4>∞</h4>
<p>Curiosity</p>

</div>

</div>

</div>

</div>

</section>

);

}

export default About;