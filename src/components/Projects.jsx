import React from "react";

import "../App.css";

function Projects(props) {
  const emoji = require("emoji-dictionary");
  console.log(emoji.getName("😍"));


  const images = [
    [
      { pic: "HTML5_Badge_512.png", title: "HTML" },
      { pic: "cssImage.png", title: "CSS" },
      { pic: "JS-logo.png", title: "JavaScript" },
      { pic: "react-logo.png", title: "React" },
      { pic: "jquery-icon.png", title: "jQuery" },
      { pic: "python-logo.png", title: "Python" },
      { pic: "mongo-logo.png", title: "MongoDB" },
      { pic: "node-logo.png", title: "NodeJS" },
      { pic: "sql-logo.png", title: "SQL" },
      { pic: "bootstrap-logo.png", title: "Bootstrap" },
      { pic: "express-logo.jpeg", title: "ExpressJS" },
      { pic: "flask-logo.png", title: "Flask" },
    ]
  ]

  return (
    <>
      <header></header>
      <main>
        <h1 className=" aboutTitle display-3 p-5 text-lg-left">Projects</h1>
        <br />
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
                      points can you gain? Click the 👉🏼 to go to the app or GitHub
                    to see the code on GitHub!{" "}
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
                      rather than throwing them away! Click the 👉🏼 to go to the
                    app or GitHub to see the code on GitHub!{" "}
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
                      Click the 👉🏼 to go to the app or GitHub to see the code on
                    GitHub!{" "}
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
          <div className="projectCardDiv">
            <div className="flip-picture">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src="beigecashmerewebsite.png"
                    className="project-thumbnail"
                    alt="project thumbnail"
                  />
                  <br />
                </div>
                <div className="flip-card-back">
                  <div className="flip-card-back-text">
                    <p>
                      Beige Cashmere is your destination for all your video production & photography needs! Click the 👉🏼 to go to the website or GitHub
                    to see the code on GitHub!{" "}

                    </p>
                    <p>
                      Technologies used: HTML, CSS, ReactJS, GitHub, Vimeo Integration, Email Integration, & Heroku
                  </p>
                  </div>

                  <a
                    href="https://github.com/alirizvi061/beigecashmere"
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
                    href="http://www.beigecashmere.com/"
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
          {/* <div className="projectCardDiv">
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
                    The PIC-N-GO web application posseses a massive gallery of images generated from the Flickr API. It allows users create a personal account and search for pictures of destinations they want to visit, write notes on the picture for future use, and add them to their own personal bucket list. Click the 👉🏼 to go to the app or GitHub to see the code on GitHub!{" "}
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
                    href="https://pic-n-go.herokuapp.com/home"
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
          </div> */}
        </div>


        <div>
          <div className="skillsDiv">
            <h1 id="skills" className=" skillsTitle display-3 p-5 text-lg-left">
              Skills
          </h1>
          </div>
          <br />
          {images.map((row, index) => {
            console.log(row[index])
            return (
              <>
                <div className="skillsPics" key={index}>
                  {row.map((picture) => {
                    console.log(picture.pic)
                    return (
                      <div className="skillsText">
                        <div>
                          <img
                            src={picture.pic}
                            className="language-thumbnail"
                            alt="project thumbnail"
                          />
                        </div>
                        <h5 className="flip-card-back-text">{picture.title}</h5>
                      </div>
                    )

                  })}

                </div>

              </>
            )
          })}
        </div>
      </main>
    </>
  );
}

export default Projects;
