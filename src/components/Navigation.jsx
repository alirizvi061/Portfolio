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
                </div>
                <nav class="nav_links_div">
                    <a href="/about" class="link_text">About</a>
                    <a href="" class="link_text">My Skills</a>
                    <a href="/work" class="link_text">Work</a>
                    <a href="" class="link_text">Contact</a>
                </nav>

            </div>
        )
    }
}

export default Navigation;