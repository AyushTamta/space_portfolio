import React from 'react';
import './App.css'; 

import StarCursor from "./StarCursor";
import Header from './components/Header';
import About from './components/About';
import Organizations from './components/Organizations';
import Projects from './components/Projects';
import ExtraCurricular from './components/ExtraCurricular';
import Contact from './components/Footer';

import Skills from './components/Skills'; 

function App() {
    return (
        <div className="App" id="top">
            <div className="cosmic-canvas" aria-hidden="true">
                <div className="cosmic-nebula cosmic-nebula-one"></div>
                <div className="cosmic-nebula cosmic-nebula-two"></div>
                <div className="cosmic-horizon"></div>
                <span className="shooting-star shooting-star-one"></span>
                <span className="shooting-star shooting-star-two"></span>
                <span className="shooting-star shooting-star-three"></span>
            </div>
            <Header />
            <About />
            <Organizations />
            <Skills /> 
            <Projects />
            <ExtraCurricular />
            <Contact />
            <StarCursor />
            
        </div>
    );
}

export default App;
