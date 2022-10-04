import React from 'react';
import { Component } from 'react';

import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

class Home extends Component {
    render() {
        return (
            <>
                {/* <div class="home_bio"> */}
                <Intro />
                <About />
                <Projects />
                <Contact />
                {/* </div> */}
            </>
        )
    }
}

export default Home;