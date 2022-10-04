import React from 'react';
import { Component } from 'react';

import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Navigation from './Navigation';
import Footer from './Footer';

class Home extends Component {
    render() {
        return (
            <>
                {/* <div class="home_bio"> */}
                <Intro />
                <About />
                <Projects />
                <Skills />
                <Contact />
                {/* </div> */}
            </>
        )
    }
}

export default Home;