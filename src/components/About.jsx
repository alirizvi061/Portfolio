import React, { Component } from "react";
import Picture from "./profile-image.PNG";

class About extends Component {
  render() {
    return (
      <>
        <h1 className=" aboutTitle display-4 p-1 text-left">BIO</h1>
        <div className="aboutDiv">
          <p className="aboutPara ">
            My name is Ali Rizvi, I am a creative who is in love with creating
            things, whether it's original music, puzzles, or beautiful software
            applications... you name it I'll figure out how to make it! I've
            recently graduated from General Assembly: Full-Stack Software
            Engineer Immersive, where I focused on building full-stack
            applications using various technologies and I want to
            help build your next big idea. Check out my <a href="/">Projects</a> page for more info!
          </p>
          <img src={Picture} className="profilePic" alt="profile" />
        </div>
      </>
    );
  }
}

export default About;
