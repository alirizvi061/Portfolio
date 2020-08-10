import React, { Component } from "react";
import Picture from "./profile-image.PNG";

class About extends Component {
  render() {
    return (
      <>
        <h1 className=" aboutTitle display-3 p-5 text-lg-left">BIO</h1>
        <div className="aboutDiv">
          <p className="aboutPara ">
            My name is Ali Rizvi, I am a creative who is in love with creating
            things, whether it's original music, puzzles, or beautiful software
            applications... you name it I'll figure out how to make it! I've
            recently graduated from General Assembly: Full-Stack Software
            Engineer Immersive, where I focused on building full-stack
            applications using various technologies listed below and I want to
            help build your next big idea.
          </p>
          <img src={Picture} className="profilePic" alt="profile" />
        </div>
        {/* <div className="myLinkDiv">
          <a
            href="https://www.linkedin.com/in/rizvisyedali/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="linkedin-logo.png"
              className="myLinks linkedIn"
              alt="github logo"
            />
          </a>
          <a
            href="https://github.com/alirizvi061"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="github-logo.png"
              className="myLinks gitHub"
              alt="github logo"
            />
          </a>
          <a
            href="mailto:alirizvi061@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="email-logo.png"
              className="myLinks email"
              alt="github logo"
            />
          </a>
        </div> */}
      </>
    );
  }
}

export default About;
