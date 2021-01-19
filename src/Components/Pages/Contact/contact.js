import React from 'react';
import ContactForm from './contactForm'
import ContactMap from './contactMap'



function Contact() {
  return (
    <div className="App">
      <div className="flex-container">
        <div className="areaHeading">
          <h3>Contact us</h3>
        </div>
        <div className="contactPage">
          <ContactForm/>
          <ContactMap/>
        </div>
      </div>
    </div>  
  );
}

export default Contact;