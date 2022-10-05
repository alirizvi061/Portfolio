import React from 'react';
import { Component } from 'react';

import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';


class Home extends Component {
    render() {
        return (
            <>
                {/* <div class="home_bio"> */}
                <Intro />
                <About />
                <Projects />
                <Skills />
                {/* </div> */}
            </>
        )
    }
}

export default Home;