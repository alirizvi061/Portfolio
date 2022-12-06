import React, { Component } from 'react'
import emailjs from 'emailjs-com';


export default class Contact extends Component {

    handleChange = (event) => {
        if(event.target.value <= 0){
            event.target.style.border = "1px solid red"
        }else{
            event.target.style.border = "none"
        }
    }

    render() {

        function sendEmail(event) {
            event.preventDefault();
            
            let submit = true;
            let templateID = "template_n14srsh";
            let serviceID = "service_79x9b9l"
            let userID = "user_YIptbOHIy9sETu4BiabOb";
            let name = document.getElementById('Name');
            let email = document.getElementById('Email');
            let subject = document.getElementById('Subject');
            let message = document.getElementById('Message');

            if(name.value.length <= 0){
                name.style.border = "1px solid red"
                submit = false;
            }
            if (email.value.length <= 0){
                email.style.border = "1px solid red"
                submit = false;
            }
            if (subject.value.length <= 0){
                subject.style.border = "1px solid red"
                submit = false;
            }
            if(message.value.length <= 0){
                message.style.border = "1px solid red"
                submit = false;
            }
            
            if(submit){
                emailjs.sendForm(serviceID, templateID, "#contactForm", userID)
                .then((result) => {
                    console.log(result)
                    document.getElementById('contactForm').reset();
                    showThankYouMessage();
                }, (error) => {
                    console.log(error)
                });
            }
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
                        <input onChange={(event) => this.handleChange(event)} className="contactTextBox" type="text" placeholder="Name" id="Name" name="Name" />
                        <input onChange={(event) => this.handleChange(event)} className="contactTextBox" type="email" placeholder="Email" id="Email" name="Email" />
                        <input onChange={(event) => this.handleChange(event)} className="contactTextBox" type="text" placeholder="Subject" id="Subject" name="Subject" />
                        <textarea onChange={(event) => this.handleChange(event)} type="text" placeholder="Message" id="Message" name="Message" ></textarea>
                        <input type="Submit" id="contactSubmitButton" value="Send Message" />
                    </form>
                </div>
                <span id="thankYouSpan">
                    <div id="thankYoudiv">Thank you, we'll be in touch with you shortly!</div>
                </span>
            </div>
        )
    }
}
