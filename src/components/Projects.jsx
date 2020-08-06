import React from 'react';
import '../App.css'




function Projects(props) {
    const emoji = require("emoji-dictionary");
    console.log(emoji.getName("😍"));

    return (
        <>

            <h1 className=" aboutTitle display-3 float-left p-5">Projects</h1><br />
            <div className="projects">
                <div className="flip-picture">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="LYRA-Question.png" className="project-thumbnail" alt="project thumbnail" /><br />
                        </div>
                        <div className="flip-card-back">
                            <a href="https://alirizvi061.github.io/" target="_blank" rel="noopener noreferrer"> <span role="img" aria-label="Link" >👉🏼</span> </a>
                        </div>
                    </div>
                </div>

                <div className="flip-picture">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="rzlogin.png" className="project-thumbnail" alt="project thumbnail" />
                        </div>
                        <div className="flip-card-back">
                            <a href="https://rzessentials.herokuapp.com/sessions/new" target="_blank" rel="noopener noreferrer"> <span role="img" aria-label="Link" >👉🏼</span> </a>
                        </div>
                    </div>
                </div>

                <div className="flip-picture">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="SUDB-Main-WithMenu.png" className="project-thumbnail" alt="project thumbnail" />
                        </div>
                        <div className="flip-card-back">
                            <a href="https://sudb-front.herokuapp.com" target="_blank" rel="noopener noreferrer"> <span role="img" aria-label="Link" >👉🏼</span> </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;