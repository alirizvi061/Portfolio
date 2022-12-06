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
                <Intro />
                <About />
                <Projects />
                <Skills />
            </>
        )
    }
}

export default Home;