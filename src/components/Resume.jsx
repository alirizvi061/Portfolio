import React, { Component } from "react";
class Resume extends Component {
  render() {
    return (
      <div>
        <h1 className=" resumeTitle display-3 p-5 text-lg-left">Resume</h1>
        {/* <img className="resumePic" src="resume.png" alt="Resume" /> */}
        <iframe src="https://resume.creddle.io/resume/92ylnv5r0uo"
          width="850" height="1100" seamless></iframe>
      </div>
    );
  }
}

export default Resume;
