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
                    document.getElementById('contactForm').reset();
                    showThankYouMessage();
                }, (error) => {
                    console.log(error)
                });
        }

        function showThankYouMessage(){
            document.getElementById('thankYoudiv').style.display = 'block';
            setTimeout(() => {
                document.getElementById('thankYoudiv').style.display = 'none'
              }, 3000);
          
        }

        return (
            <div id="contactView" className='contactPage'>
                <h1 className="contactTitle">Contact Me!</h1>
                <div>
                    <form className="contact_form_class" id="contactForm" onSubmit={sendEmail}>
                        <input className="contactTextBox" type="text" placeholder="Name" name="Name" />
                        <input className="contactTextBox" type="email" placeholder="Email" name="Email" />
                        <input className="contactTextBox" type="text" placeholder="Subject" name="Subject" />
                        <textarea id="contact_message_area" type="text" placeholder="Message" name="Message" ></textarea>
                        <input type="Submit" value="Send Message" />
                    </form>
                </div>
                <span id="thankYouSpan">
                    <div id="thankYoudiv">Thank you, We'll be in touch with you shortly!</div>
                </span>
            </div>
        )
    }
}
