import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <span>ALI RIZVI 2021</span>
        <div className="footerLinks">
          <a
            href="https://www.linkedin.com/in/rizvisyedali/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="linkedin-logo.png" id="linkedIn" alt="github logo" />
          </a>
          <a
            href="https://github.com/alirizvi061"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="github-logo.png" id="gitHub" alt="github logo" />
          </a>
          <a
            href="mailto:alirizvi061@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="email-logo.png" id="email" alt="github logo" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
