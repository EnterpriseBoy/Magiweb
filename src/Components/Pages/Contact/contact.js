import React from 'react';
import ContactForm from './contactForm'
import ContactMap from './contactMap'



function Contact() {
  return (
    <div className="App">
      <div className="flex-container">
        <div className="contactForm">
          <ContactForm/>
          <div className="contactFormMap">
              <ContactMap/>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default Contact;