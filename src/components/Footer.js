// Footer.js

import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
faEnvelope,
faPhone
} from '@fortawesome/free-solid-svg-icons';

import {
faLinkedin,
faGithub
} from '@fortawesome/free-brands-svg-icons';

function Footer() {

return (

<footer className="footer" id="contact">

{/* STARS */}

<div className="footer-stars">
{[...Array(55)].map((_,i)=>(
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

<div className="footer-orb orb1"></div>
<div className="footer-orb orb2"></div>

{/* CONTENT */}

<div className="footer-container">

{/* TITLE */}

<h2 className="footer-title">
Let’s Connect Beyond The Stars ✨
</h2>

{/* SUBTITLE */}

<p className="footer-subtitle">
Open to collaborations, innovative ideas, and building futuristic digital experiences together.
</p>

{/* CONTACT GRID */}

<div className="footer-contact">

{/* EMAIL */}

<a
href="mailto:Ayush.tamta111@gmail.com"
className="contact-card"
>

<div className="icon-box">
<FontAwesomeIcon icon={faEnvelope}/>
</div>

<div className="contact-text">

<span className="contact-heading">
Email
</span>

<span className="contact-value">
ayush.tamta111@gmail.com
</span>

</div>

</a>

{/* PHONE */}

<a
href="tel:+919990833893"
className="contact-card"
>

<div className="icon-box">
<FontAwesomeIcon icon={faPhone}/>
</div>

<div className="contact-text">

<span className="contact-heading">
Phone
</span>

<span className="contact-value">
+91 99908 33893
</span>

</div>

</a>

{/* LINKEDIN */}

<a
href="https://www.linkedin.com/in/ayushtamta/"
target="_blank"
rel="noopener noreferrer"
className="contact-card"
>

<div className="icon-box">
<FontAwesomeIcon icon={faLinkedin}/>
</div>

<div className="contact-text">

<span className="contact-heading">
LinkedIn
</span>

<span className="contact-value">
linkedin.com/in/ayushtamta
</span>

</div>

</a>

{/* GITHUB */}

<a
href="https://github.com/AyushTamta"
target="_blank"
rel="noopener noreferrer"
className="contact-card"
>

<div className="icon-box">
<FontAwesomeIcon icon={faGithub}/>
</div>

<div className="contact-text">

<span className="contact-heading">
GitHub
</span>

<span className="contact-value">
github.com/AyushTamta
</span>

</div>

</a>

</div>

{/* FOOTER BOTTOM */}

<div className="footer-bottom">

<div className="footer-line"></div>

<p>
© 2026 Ayush Tamta · All Rights Reserved
</p>

</div>

</div>

</footer>

);

}

export default Footer;