import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="Intro_text_component">
        <div className="Intro_text">
          <p>Hi,</p>
          <p>I'm Ali,</p>
          <p>Full-Stack Software Engineer</p>
          <a href="/contact"><button>Contact Me!</button></a>
        </div>
      </div>
    );
  }
}

export default About;
