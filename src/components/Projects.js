// Projects.js

import React, { useState } from "react";
import "./Projects.css";

/* ASTRONAUTS */

import astronaut1 from "./astro.png";
import astronaut2 from "./astro2.png";
import astronaut3 from "./astro3.png";
import astronaut4 from "./astro4.png";
import astronaut5 from "./astro5.png";

/* PROJECT IMAGES */

import project1 from "./project1.png";
import project2 from "./project2.png";
import project3 from "./project3.png";

const Projects = () => {

const [activeProject,setActiveProject] = useState(null)

const projects = [

{
id:1,
mission:"Sensa AI",
title:"AI Customer Intelligence Platform",
image:project1,

demo:"https://sense-ai-ayushtamtas-projects.vercel.app/",

github:"https://github.com/AyushTamta/sense-ai",

status:"LIVE",

sector:"Artificial Intelligence",

desc:"Enterprise-grade AI customer intelligence platform featuring ML-powered churn prediction, agentic AI workflows, executive intelligence generation, conversational analytics, and predictive business intelligence systems.",

tech:[
"Next.js",
"FastAPI",
"TypeScript",
"Scikit-learn",
"Machine Learning",
"Agentic AI"
]
},

{
id:2,
mission:"Portfolio-website",
title:"Cinematic Space Portfolio",
image:project2,

demo:"https://space-portfolio-seven-rho.vercel.app/",

github:"https://github.com/AyushTamta/space_portfolio",

status:"LIVE",

sector:"developer portfolio",

desc:"Immersive cinematic portfolio experience featuring futuristic space-themed UI, animated astronaut interactions, orbital skill systems, custom cursor mechanics, glassmorphism project cards, dynamic hover animations, and responsive visual storytelling built with modern React architecture.",

tech:[
"React",
"JavaScript",
"CSS3",
"React Hooks",
"useState",
"Responsive Design",
"Glassmorphism",

]
},

{
  id:3,
  mission:"VEYRO AI",
  title:"AI Client Retention Platform",
  image:project3,
  demo:"https://veyro-ad4s.vercel.app/",
  github:"https://github.com/AyushTamta/veyro",
  status:"LIVE",
  sector:"AI SaaS / Fitness Tech",
  desc:"Premium AI-powered client retention platform for online fitness coaches featuring churn prediction, WhatsApp automation, recovery intelligence, revenue tracking, and smart retention dashboards.",
  tech:[
    "Next.js",
    "React",
    "Tailwind CSS",
    "Twilio",
    "WhatsApp API",
    "micro-saas",
    "AI Automation",
    "JavaScript",
  ]
},

{
id:4,
mission:"Quantum Mind",
title:"AI Assistant",
image:project1,
demo:"#",
github:"#",
status:"EXPERIMENTAL",
sector:"Artificial Intelligence",
desc:"AI powered conversational assistant with futuristic interactions.",
tech:["AI","NLP","React","APIs"]
},

{
id:5,
mission:"Crypto Orbit",
title:"Crypto Tracker",
image:project2,
demo:"#",
github:"#",
status:"LIVE",
sector:"Blockchain Systems",
desc:"Crypto analytics dashboard with portfolio monitoring and live charts.",
tech:["React","Charts","API","Crypto"]
}

]

return (

<section className="projects-section" id="projects">

{/* DEPTH */}

<div className="projects-depth">

<div className="interstellar">
{
[...Array(8)].map((_,i)=>(
<span key={i}></span>
))
}
</div>

<div className="projects-stars">
{
[...Array(70)].map((_,i)=>(
<span
key={i}
style={{
top:Math.random()*100+"%",
left:Math.random()*100+"%",
animationDelay:Math.random()*5+"s"
}}
/>
))
}
</div>

{/* SATELLITES */}

<div className="satellite sat1"></div>
<div className="satellite sat2"></div>
<div className="satellite sat3"></div>

</div>

{/* TITLE */}

<h2 className="section-title">
Mission Projects
</h2>

{/* PROJECT AREA */}

<div className="projects-container">

{
projects.map((project,index)=>(

<div
key={project.id}
className={`astronaut-card astronaut${index+1}`}
onMouseEnter={()=>setActiveProject(project)}
>

{/* SPOTLIGHT */}

<div className="spotlight"></div>

<img
src={
index===0 ? astronaut1 :
index===1 ? astronaut2 :
index===2 ? astronaut3 :
index===3 ? astronaut4 :
astronaut5
}
alt=""
/>

<div className="project-tag">
{project.mission}
</div>

</div>

))
}

</div>

{/* PROJECT CARD */}

{activeProject && (

<div
className="space-card-overlay"
onMouseLeave={()=>setActiveProject(null)}
>

<div className="space-card">

<div className="scan-lines"></div>

<div className="mission-header">

<h5>
{activeProject.mission}
</h5>

<div className="mission-status">
{activeProject.status}
</div>

</div>

<h3>
{activeProject.title}
</h3>

<div className="sector">
SECTOR: {activeProject.sector}
</div>

<img
src={activeProject.image}
className="project-image"
alt=""
/>

<p className="typing-text">
{activeProject.desc}
</p>

{/* TECH STACK */}

<div className="tech-stack">

{
activeProject.tech.map((item,index)=>(

<span key={index}>
{item}
</span>

))
}

</div>

<div className="project-links">

<a
href={activeProject.demo}
target="_blank"
rel="noreferrer"
>
Live Demo
</a>

<a
href={activeProject.github}
target="_blank"
rel="noreferrer"
>
Github
</a>

</div>

</div>

</div>

)}

{/* MOON */}

<div className="moon-surface"></div>

</section>

);

};

export default Projects;