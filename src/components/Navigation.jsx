import React from 'react';
import { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <div>
                    <a href="/">
                        <img className="logo" src="Ali_logo.png" alt="Logo" />
                    </a>
                </div><br />
                <nav className="nav_links_div">
                    <a href="/#aboutView" className="link_text">About</a>
                    <a href="/#projectView" className="link_text">Projects</a>
                    <a href="/#skillView" className="link_text">My Skills</a>
                    <a href="/contact" className="link_text">Contact</a>
                </nav>
            </div>
        )
    }
}

export default Navigation;