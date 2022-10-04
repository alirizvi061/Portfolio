import React from 'react'

export default function Skills(props) {
    const images = [
        [
            { pic: "HTML5_Badge_512.png", title: "HTML" },
            { pic: "cssImage.png", title: "CSS" },
            { pic: "JS-logo.png", title: "JavaScript" },
            { pic: "react-logo.png", title: "React" },
            { pic: "jquery-icon.png", title: "jQuery" },
            { pic: "python-logo.png", title: "Python" },
            { pic: "mongo-logo.png", title: "MongoDB" },
            { pic: "node-logo.png", title: "NodeJS" },
            { pic: "sql-logo.png", title: "SQL" },
            { pic: "bootstrap-logo.png", title: "Bootstrap" },
            { pic: "express-logo.jpeg", title: "ExpressJS" },
            { pic: "flask-logo.png", title: "Flask" },
        ]
    ]

    return (
        <main id="skillView" className='skillsPage'>
            <h1 className='skillsTitle'>Skills</h1>
            {images.map((row, index) => {
                return (
                    <>
                        <div className="skillsPics" key={index}>
                            {row.map((picture) => {
                                return (
                                    <div className="skillsText">
                                        <div>
                                            <img
                                                src={picture.pic}
                                                className="language-thumbnail"
                                                alt="project thumbnail"
                                            />
                                        </div>
                                        <h5 className="flip-card-back-text">{picture.title}</h5>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                )
            })}
        </main >
    );
}
