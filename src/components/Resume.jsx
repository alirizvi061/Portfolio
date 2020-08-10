import React, { Component } from "react";
class Resume extends Component {
  render() {
    return (
      <div>
        <h1 className=" resumeTitle display-3 float-left p-5">Resume</h1>
        <img className="resumePic" src="resume.png" alt="Resume" />
      </div>
    );
  }
}

export default Resume;
