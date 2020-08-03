import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Thumbnail(props) {
    return (
        <div className="project">
            <Link to={props.link}>
                <div className="project-image">
                    <img src={props.image} className="project-image" alt="Project Image" />
                </div>
                <h6 className="project-title">{props.title}</h6>
                <h5 className="project-category">{props.category}</h5>
            </Link>
        </div>
    );
}

export default Thumbnail;