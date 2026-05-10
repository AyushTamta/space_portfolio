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
title:"Portfolio Website",
image:project1,
demo:"#",
github:"#",
desc:"React portfolio with cinematic space animations and immersive UI."
},

{
id:2,
title:"Banking Analytics",
image:project2,
demo:"#",
github:"#",
desc:"Fraud detection and banking analytics platform with intelligent reporting."
},

{
id:3,
title:"Task Manager",
image:project3,
demo:"#",
github:"#",
desc:"Full stack productivity platform with authentication and dashboards."
},

{
id:4,
title:"AI Assistant",
image:project1,
demo:"#",
github:"#",
desc:"AI powered conversational assistant with futuristic interactions."
},

{
id:5,
title:"Crypto Tracker",
image:project2,
demo:"#",
github:"#",
desc:"Crypto analytics dashboard with portfolio monitoring and live charts."
}

]

return (

<section className="projects-section" id="projects">

{/* DEPTH */}

<div className="projects-depth">

<div className="interstellar">
{[...Array(8)].map((_,i)=>(<span key={i}></span>))}
</div>

<div className="projects-stars">
{[...Array(70)].map((_,i)=>(
<span
key={i}
style={{
top:Math.random()*100+"%",
left:Math.random()*100+"%",
animationDelay:Math.random()*5+"s"
}}
/>
))}
</div>

</div>

{/* TITLE */}

<h2 className="section-title">
Projects
</h2>

{/* PROJECT AREA */}

<div className="projects-container">

{/* ASTRONAUT 1 */}

<div 
className="astronaut-card astronaut1"
onMouseEnter={()=>setActiveProject(projects[0])}
>

<img src={astronaut1} alt="" />

<div className="project-tag">
Portfolio Website
</div>

</div>

{/* ASTRONAUT 2 */}

<div 
className="astronaut-card astronaut2"
onMouseEnter={()=>setActiveProject(projects[1])}
>

<img src={astronaut2} alt="" />

<div className="project-tag">
Banking Analytics
</div>

</div>

{/* ASTRONAUT 3 */}

<div 
className="astronaut-card astronaut3"
onMouseEnter={()=>setActiveProject(projects[2])}
>

<img src={astronaut3} alt="" />

<div className="project-tag">
Task Manager
</div>

</div>

{/* ASTRONAUT 4 */}

<div 
className="astronaut-card astronaut4"
onMouseEnter={()=>setActiveProject(projects[3])}
>

<img src={astronaut4} alt="" />

<div className="project-tag">
AI Assistant
</div>

</div>

{/* ASTRONAUT 5 */}

<div 
className="astronaut-card astronaut5"
onMouseEnter={()=>setActiveProject(projects[4])}
>

<img src={astronaut5} alt="" />

<div className="project-tag">
Crypto Tracker
</div>

</div>

</div>

{/* PROJECT CARD */}

{activeProject && (

<div 
className="space-card-overlay"
onMouseLeave={()=>setActiveProject(null)}
>

<div className="space-card">

<h3>{activeProject.title}</h3>

<img 
src={activeProject.image}
className="project-image"
alt=""
/>

<p>{activeProject.desc}</p>

<div className="project-links">

<a href={activeProject.demo} target="_blank" rel="noreferrer">
Live Demo
</a>

<a href={activeProject.github} target="_blank" rel="noreferrer">
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