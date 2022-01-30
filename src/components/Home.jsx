import React from 'react'
import About from './About'
import { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <>
                <div class="Intro_text">
                    <p>Hi,</p>
                    <p>I'm Ali,</p>
                    <p>Full-Stack Software Engineer</p>
                    <button>Contact Me!</button>
                </div>
                <div class="home_bio">
                    <About />
                </div>
            </>
        )
    }
}

export default Home;