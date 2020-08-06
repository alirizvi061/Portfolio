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
                            <p className="flip-card-back-text">The LYRA-Trivia project is a versitile single-page trivia game that pulls challenging questions from an API and scores user's responses! Click the 👉🏼 to go to the app or GitHub to see the code on GitHub! </p>
                            <a href="https://alirizvi061.github.io/" target="_blank" rel="noopener noreferrer"> <span className="applink" role="img" aria-label="Link" >👉🏼</span> </a>
                        </div>
                    </div>
                </div>

                <div className="flip-picture">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="rzlogin.png" className="project-thumbnail" alt="project thumbnail" />
                        </div>
                        <div className="flip-card-back">
                            <p className="flip-card-back-text">RZEssentials is a community store that allows creatives to come together, list and buy items off the store! Click the 👉🏼 to go to the app or GitHub to see the code on GitHub! </p>
                            <a href="https://rzessentials.herokuapp.com/sessions/new" target="_blank" rel="noopener noreferrer"> <span className="applink" role="img" aria-label="Link" >👉🏼</span> </a>
                        </div>
                    </div>
                </div>

                <div className="flip-picture">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="SUDB-Main-WithMenu.png" className="project-thumbnail" alt="project thumbnail" />
                        </div>
                        <div className="flip-card-back">
                            <p className="flip-card-back-text">The LYRA-Trivia project is a versitile single-page trivia game that pulls challenging questions from an API and scores user's responses! Click the 👉🏼 to go to the app or GitHub to see the code on GitHub! </p>
                            <a href="https://sudb-front.herokuapp.com" target="_blank" rel="noopener noreferrer"> <span className="applink" role="img" aria-label="Link" >👉🏼</span> </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;