// Header.js

import React, { useState, useEffect } from "react";
import "./Header.css";

import { Link } from "react-scroll";

function Header() {

const [scrolled, setScrolled] = useState(false);

useEffect(() => {

const handleScroll = () => {

if(window.scrollY > 40){
setScrolled(true);
}
else{
setScrolled(false);
}

};

window.addEventListener("scroll", handleScroll);

return () => window.removeEventListener("scroll", handleScroll);

}, []);

return (

<header className={`header ${scrolled ? "header-scrolled" : ""}`}>

{/* STARS */}

<div className="header-stars">
{[...Array(25)].map((_,i)=>(
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

{/* GLOW ORBS */}

<div className="header-glow glow1"></div>
<div className="header-glow glow2"></div>

{/* LOGO */}

<div className="logo">

<h1>
Ayush Tamta
</h1>

</div>

{/* NAVIGATION */}

<nav className="nav">

<ul>

<li>

<Link
to="about"
smooth={true}
duration={500}
spy={true}
offset={-80}
activeClass="active-link"
>

About

</Link>

</li>

<li>

<Link
to="skills"
smooth={true}
duration={500}
spy={true}
offset={-80}
activeClass="active-link"
>

Skills

</Link>

</li>

<li>

<Link
to="projects"
smooth={true}
duration={500}
spy={true}
offset={-80}
activeClass="active-link"
>

Projects

</Link>

</li>

<li>

<Link
to="extra-curricular"
smooth={true}
duration={500}
spy={true}
offset={-80}
activeClass="active-link"
>

Gallery

</Link>

</li>

{/* CONTACT */}

<li>

<Link
to="contact"
smooth={true}
duration={700}
offset={0}
spy={true}
className="contact-btn"
>

Contact

</Link>

</li>

</ul>

</nav>

</header>

);

}

export default Header;