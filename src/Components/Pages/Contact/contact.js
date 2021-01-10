import React from 'react';
import ContactForm from './contactForm'
import ContactMap from './contactMap'



function Contact() {
  return (
    <div className="App">
      <div className="flex-container">
      Contact us
        <div className="contactPage">
          <ContactForm/>
          <ContactMap/>
        </div>
      </div>
    </div>  
  );
}

export default Contact;