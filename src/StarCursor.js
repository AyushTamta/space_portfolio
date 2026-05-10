// StarCursor.js

import { useEffect, useState } from "react";
import "./StarCursor.css";

const StarCursor = () => {

const [position,setPosition] = useState({
x:0,
y:0
});

useEffect(()=>{

const createTrail = (x,y)=>{

const star = document.createElement("div");

star.className = "rocket-trail";

star.style.left = `${x}px`;
star.style.top = `${y}px`;

document.body.appendChild(star);

setTimeout(()=>{
star.remove();
},500);

};

const handleMouseMove = (e)=>{

const x = e.clientX;
const y = e.clientY;

setPosition({
x,
y
});

/* PERFECT ROCKET EXHAUST POSITION */

createTrail(
x - 2,
y + 18
);

};

window.addEventListener(
"mousemove",
handleMouseMove
);

return ()=>{

window.removeEventListener(
"mousemove",
handleMouseMove
);

};

},[]);

return(

<div
className="rocket-cursor"
style={{
left:`${position.x}px`,
top:`${position.y}px`
}}
/>

);

};

export default StarCursor;