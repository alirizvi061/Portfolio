import React from 'react'
import About from './About'
import { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <>
                <div class="Intro_text">
                    <div>
                        <p>Hi,</p><br />
                        <p>I'm Ali,</p><br />
                        <p>Full-Stack Software Engineer</p><br />
                        <button>Contact Me!</button>
                    </div>
                </div>
                <div class="home_bio">
                    <About />
                </div>
            </>
        )
    }
}

export default Home;