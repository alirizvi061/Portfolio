import React from 'react';
import Thumbnail from './Thumbnail';
import '../App.css'

function Projects(props) {
    return (
        <div className="">
            <h1>Projects</h1>
            <Thumbnail
                link="https://alirizvi061.github.io/"
                image=""
                title="LYRA-Trivia App"
                category="Web Application"
            />
        </div>
    )
}

export default Projects;