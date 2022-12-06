import React from "react";
import "../App.css";

function Projects(props) {
  const emoji = require("emoji-dictionary");
  console.log(emoji.getName("😍"));


  return (
    <>
      <main id="projectView" className="projectPage">
        <h1 className="projectTitle">Projects</h1>
        <div className="projects">
          <div className="projectCardDiv">
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
                  <div className="flip-card-back-text">
                    <p>
                      The LYRA-Trivia project is a versitile single-page trivia
                      game that pulls challenging questions from the opentdb.com
                      API and scores user's responses! User can gain upto 10
                      points before choosing to endgame or restart. How many
                      points can you gain? Click the <span className="applink" role="img" aria-label="Link">👉🏼</span> to go to the app or GitHub
                      to see the code on GitHub!
                    </p>
                    <p>
                      Technologies used: HTML, CSS, JavaScript, JQuery, AJAX, & GitHub Pages.
                    </p>
                  </div>
                  <div className="cardLogoDiv">
                    <a
                      href="https://github.com/alirizvi061/alirizvi061.github.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="gitLink"
                        src="github-logo.png"
                        alt="github logo"
                      />
                    </a>

                    <a
                      href="https://alirizvi061.github.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >

                      <span className="applink" role="img" aria-label="Link">
                        👉🏼
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="projectCardDiv">
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
                  <div className="flip-card-back-text">
                    <p>
                      RZEssentials is a community store that allows creatives from
                      all walks of life to come together, list and buy items off
                      the store! This community is built to allow collaboration
                      between artists and finds a better home for un-used items
                      rather than throwing them away! Click the <span className="applink" role="img" aria-label="Link">👉🏼</span> to go to the
                      app or GitHub to see the code on GitHub!
                    </p>
                    <p>
                      Technologies used: HTML, CSS, JavaScript, EJS, MongoDB, Axios, GitHub, & Heroku
                    </p>
                  </div>
                  <a
                    href="https://github.com/alirizvi061/rzessentials"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="gitLink"
                      src="github-logo.png"
                      alt="github logo"
                    />
                  </a>
                  <a
                    href="https://rzessentials.herokuapp.com/sessions/new"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="applink" role="img" aria-label="Link">
                      👉🏼
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projectCardDiv">
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
                  <div className="flip-card-back-text">
                    <p>
                      The SUDB web application boasts a plethora of books using
                      the Google Books api and an amazing "Blind Date with a Book"
                      feature that allows the user to pick a random book of their
                      favorite category from New York Times - Best Seller's list.!
                      Click the <span className="applink" role="img" aria-label="Link">👉🏼</span> to go to the app or GitHub to see the code on
                      GitHub!
                    </p>
                    <p>
                      Technologies used: HTML, CSS, ReactJS, Google Books & New York Time Bestseller API, NodeJS, MongoDB, Heroku.
                    </p>
                  </div>

                  <a
                    href="https://github.com/root2point0/SUDB-front-end"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="gitLink"
                      src="github-logo.png"
                      alt="github logo"
                    />
                  </a>
                  <a
                    href="https://sudb-front.herokuapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    <span className="applink" role="img" aria-label="Link">
                      👉🏼
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projectCardDiv">
            <div className="flip-picture">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src="picngoimg.png"
                    className="project-thumbnail"
                    alt="project thumbnail"
                  />
                </div>
                <div className="flip-card-back">
                  <p className="flip-card-back-text">
                    The PIC-N-GO web application posseses a massive gallery of images generated from the Unsplash API. It allows users create a personal account and search for pictures of destinations they want to visit, write notes on the picture for future use, and add them to their own personal bucket list. Click the <span role="img" aria-label="Link">👉🏼</span> to go to the app or GitHub to see the code on GitHub!
                  </p>
                  <a
                    href="https://github.com/alirizvi061/pic-n-go"
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
                    href="https://shiny-rugelach-94ba83.netlify.app/"
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
          <div className="projectCardDiv">
            <div className="flip-picture">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src="Netflix_Clone.png"
                    className="project-thumbnail"
                    alt="project thumbnail"
                  />
                </div>
                <div className="flip-card-back">
                  <p className="flip-card-back-text">
                    The Netflix web application posseses a massive library of movies whose thumbnails and banners are aggregated from the image.tmdb.org API. It uses movie information provided by image.tmdb.org API in conjunction with api.themoviedb.org API to retrieve movie's trailer if available on YouTube. This application is deployed using Google Firebase. Click the <span className="applink" role="img" aria-label="Link">👉🏼</span> to go to the app or GitHub to see the code on GitHub!
                  </p>
                  <a
                    href="https://github.com/alirizvi061/fe-netflix"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="gitLink"
                      src="github-logo.png"
                      alt="github logo"
                    />
                  </a>
                  <a
                    href="https://netflix-clone-b650e.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="applink" role="img" aria-label="Link">
                      👉🏼
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Projects;
