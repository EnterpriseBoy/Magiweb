import React from 'react';
import ContactForm from './contactForm'
import ContactMap from './contactMap'
import { MDBRow, MDBCol} from 'mdbreact';



function Contact() {
  return (
    <div className="App">
        <div className="areaHeading">
          <h3>Contact us</h3>
        </div>
          <MDBRow>
              <MDBCol md="2"></MDBCol>
              <MDBCol md="4"><ContactForm/></MDBCol>
              <MDBCol md="4"><ContactMap/></MDBCol>
              <MDBCol md="2"></MDBCol>
          </MDBRow>
        <div className="contactPage">
          
          
        </div>
      </div>
  );
}

export default Contact;


