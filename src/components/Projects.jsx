import React from 'react';
import { Container } from "react-bootstrap";
import '../App.css'

function Projects(props) {
    return (
        <Container>
            <h1 className=" aboutTitle display-1 float-left p-5">Projects</h1><br />
            <div className="projects">
                <img src="LYRA-Question.png" className="project-thumbnail" alt="project thumbnail" /><br />
                <img src="rzlogin.png" className="project-thumbnail" alt="project thumbnail" />
            </div>
        </Container>
    )
}

export default Projects;