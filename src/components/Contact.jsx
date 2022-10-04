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
            <div id="contactView" className='contactPage'>
                <h1 className="contactTitle">Contact Me!</h1>
                <div>
                    <form class="contact_form_class" id="contactForm" onSubmit={sendEmail}>
                        <input class="contactTextBox" type="text" placeholder="Name" name="Name" />
                        <input class="contactTextBox" type="email" placeholder="Email" name="Email" />
                        <input class="contactTextBox" type="text" placeholder="Subject" name="Subject" />
                        <textarea id="contact_message_area" type="text" placeholder="Message" name="Message" ></textarea>
                        <input type="Submit" value="Send Message" />
                    </form>
                </div>
            </div>
        )
    }
}
