import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

function Projects(props) {
  const emoji = require("emoji-dictionary");
  console.log(emoji.getName("😍"));

  return (
    <>
      <h1 className=" aboutTitle display-3 float-left p-5">Projects</h1>
      <br />
      <div className="projects">
        <div className="flip-picture">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="LYRA-Question.png"
                className="project-thumbnail"
                alt="project thumbnail"
              />
              <br />
            </div>
            <div className="flip-card-back">
              <p className="flip-card-back-text">
                The LYRA-Trivia project is a versitile single-page trivia game
                that pulls challenging questions from an API and scores user's
                responses! Click the 👉🏼 to go to the app or GitHub to see the
                code on GitHub!{" "}
              </p>
              <a
                href="https://github.com/alirizvi061/alirizvi061.github.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="gitLink"
                  src="github-logo.png"
                  alt="github logo"
                />{" "}
              </a>

              <a
                href="https://alirizvi061.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <span className="applink" role="img" aria-label="Link">
                  👉🏼
                </span>{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="flip-picture">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="rzlogin.png"
                className="project-thumbnail"
                alt="project thumbnail"
              />
            </div>
            <div className="flip-card-back">
              <p className="flip-card-back-text">
                RZEssentials is a community store that allows creatives to come
                together, list and buy items off the store! Click the 👉🏼 to go
                to the app or GitHub to see the code on GitHub!{" "}
              </p>
              <a
                href="https://github.com/alirizvi061/rzessentials"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="gitLink"
                  src="github-logo.png"
                  alt="github logo"
                />{" "}
              </a>
              <a
                href="https://rzessentials.herokuapp.com/sessions/new"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <span className="applink" role="img" aria-label="Link">
                  👉🏼
                </span>{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="flip-picture">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="SUDB-logo.png"
                className="project-thumbnail"
                alt="project thumbnail"
              />
            </div>
            <div className="flip-card-back">
              <p className="flip-card-back-text">
                The SUDB web application boasts a plethora of books using the
                Google Books api and an amazing "Blind Date with a Book" feature
                that allows the user to pick a random book of their favorite
                category from New York Times - Best Seller's list.! Click the 👉🏼
                to go to the app or GitHub to see the code on GitHub!{" "}
              </p>
              <a
                href="https://github.com/root2point0/SUDB-front-end"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="gitLink"
                  src="github-logo.png"
                  alt="github logo"
                />{" "}
              </a>
              <a
                href="https://sudb-front.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <span className="applink" role="img" aria-label="Link">
                  👉🏼
                </span>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <Link name="skills"></Link>
      <div className="skillsDiv">
        <h1 className=" skillsTitle display-3 float-left p-5">Skills</h1>
      </div>
      <br />
      <div className="skillsPics">
        <img
          src="HTML5_Logo.svg"
          className="language-thumbnail"
          alt="project thumbnail"
        />
        <br />
        <img
          src="CSS3_logo.svg"
          className="language-thumbnail"
          alt="project thumbnail"
        />
        <br />
        <img
          src="JS-logo.png"
          className="language-thumbnail jsLogo"
          alt="project thumbnail"
        />
        <br />
        <img
          src="react-logo.png"
          className="language-thumbnail"
          alt="project thumbnail"
        />
        <br />
        <img
          src="jquery-icon.png"
          className="language-thumbnail"
          alt="project thumbnail"
        />
        <br />
        <img
          src="python-logo.png"
          className="language-thumbnail"
          alt="project thumbnail"
        />
        <br />
        <img
          src="mongo-logo.png"
          className="language-thumbnail"
          alt="project thumbnail"
        />
        <br />
        <img
          src="node-logo.png"
          className="language-thumbnail"
          alt="project thumbnail"
        />
        <br />
        <img
          src="sql-logo.png"
          className="language-thumbnail"
          alt="project thumbnail"
        />
        <br />
        <img
          src="bootstrap-logo.png"
          className="language-thumbnail"
          alt="project thumbnail"
        />
        <br />
        <img
          src="express-logo.jpeg"
          className="language-thumbnail expressLogo"
          alt="project thumbnail"
        />
        <br />
        <img
          src="flask-logo.png"
          className="language-thumbnail flaskLogo"
          alt="project thumbnail"
        />
        <br />
      </div>
    </>
  );
}

export default Projects;
