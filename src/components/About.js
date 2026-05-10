import React, { useRef } from "react";
import "./About.css";

import profilePhoto from "./photo6.jpg";

function About(){

const aboutRef = useRef(null);

const handleMouseMove=(e)=>{

const aboutElement=aboutRef.current;

if(aboutElement){

const sparkle=document.createElement("div");
sparkle.classList.add("sparkle");

const x=e.clientX - aboutElement.getBoundingClientRect().left;
const y=e.clientY - aboutElement.getBoundingClientRect().top;

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

<div className="about-container">

<div className="profile-photo-container">

<div className="photo-wrapper">

<img
src={profilePhoto}
className="profile-photo"
alt="profile"
/>

</div>

</div>

<div className="about-text">

<h2>About Me</h2>

<h3>Inquisitive Developer</h3>

<p>

I am a passionate software developer focused on building
modern, scalable and intelligent applications.

<br/><br/>

With strong expertise in React, JavaScript and backend
technologies, I enjoy solving real-world business problems.

<br/><br/>

Currently exploring AI, building intelligent systems,
and continuously learning cutting-edge technologies.

</p>

</div>

</div>

</section>

);

}

export default About;