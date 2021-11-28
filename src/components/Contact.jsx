import React, { Component } from 'react'
// import { init } from 'emailjs-com';
import emailjs from 'emailjs-com';


export default class Contact extends Component {

    render() {
        let templateID = "template_n14srsh";
        let serviceID = "service_79x9b9l"
        let userID = "user_YIptbOHIy9sETu4BiabOb";

        function sendEmail(event) {
            event.preventDefault();
            emailjs.sendForm(serviceID, templateID, "#contactForm", userID)
                .then((result) => {
                    console.log(result)
                }, (error) => {
                    console.log(error)
                });
        }

        return (
            <div>
                <h1 className="aboutTitle">Contact Me!</h1>
                <form id="contactForm" onSubmit={sendEmail}>
                    <input type="text" placeholder="Name" name="Name" />
                    <input type="text" placeholder="Email" name="Email" />
                    <input type="text" placeholder="Subject" name="Subject" />
                    <input type="text" placeholder="Message" name="Message" />
                    <input type="Submit" value="Send Message" />
                </form>
            </div>
        )
    }
}
