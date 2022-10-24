import React, { Component } from "react";
class About extends Component {
  render() {
    return (
      <div id="aboutView" class="aboutMePage">
        <h1 className=" aboutTitle">BIO</h1>
        <div className="aboutDiv">
          <p className="aboutPara ">
            My name is Ali Rizvi, I am a full stack developer and a creative who is in love with creating
            new things, whether it's original music, puzzles, or beautiful software
            applications... you name it I'll figure out how to make it! I consistently push myself to focus on honing my full-stack development skills by building
            applications using various technologies. Check out my <a href="/work">projects</a> page for more info!
          </p>
          <img src="profile-image.PNG" className="profilePic" alt="profile" />
        </div>
      </div>
    );
  }
}

export default About;
