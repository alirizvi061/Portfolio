import React, { Component } from 'react';
import Picture from "./profile-image.PNG"
import { Container } from "react-bootstrap";


class About extends Component {
    render() {
        return (
            <Container fluid>
                <h1 className="display-1 float-left p-5">About</h1>

                <p className="aboutPara h6 p-5">
                    I am a creative who is in love with creating things, whether it's original music, puzzles, or beautiful software applications... you name it I'll figure out how to make it! I've recently graduated from General Assembly: Full-Stack Software Engineer Immersive, where I focused on building full-stack applications using various technologies listed below and I want to help build your next big idea.
                    <img src={Picture} className="profilePic float-mid" />
                </p>

            </Container >

        );
    }
}

export default About;