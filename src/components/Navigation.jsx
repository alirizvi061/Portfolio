import React from 'react';
import { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div class="navigation">
                <div>
                    <a href="/">
                        <img class="logo" src="Ali_logo.png" alt="Logo" />
                    </a>
                </div><br />
                <nav class="nav_links_div">
                    <a href="#aboutView" class="link_text">About</a>
                    <a href="#projectView" class="link_text">Work</a>
                    <a href="#skillView" class="link_text">My Skills</a>
                    <a href="#contactView" class="link_text">Contact</a>
                </nav>
            </div>
        )
    }
}

export default Navigation;