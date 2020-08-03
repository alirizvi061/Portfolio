import React from 'react';
import Thumbnail from './Thumbnail';
import '../App.css'

function Projects(props) {
    return (
        <div>
            <h1>Projects</h1>
            <div className="projects">
                <div className="project-thumbnail">
                    <Thumbnail
                        link="https://alirizvi061.github.io/"
                        image="LYRA-Question.png"
                        title="LYRA-Trivia App"
                    // category="Web Application"
                    />
                </div>
                <div className="project-thumbnail">
                    <Thumbnail
                        link="https://rzessentials.herokuapp.com/sessions/new"
                        image="rzlogin.png"
                        title="RZEssential Store"
                    // category="Web Application"
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects;