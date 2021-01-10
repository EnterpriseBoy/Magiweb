import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn,MDBIcon } from 'mdbreact';

function ContactForm() {
  return (
    <div className="contactForm">
      <MDBContainer>
          <MDBRow>
              <MDBCol md="12">
              <form>
                  <p className="h5 text-center mb-4">Contact Us</p>
                  <div className="grey-text">
                    <MDBInput className="ContactInput" label="Name" group type="text" validate error="wrong" success="right" />
                    <MDBInput className="ContactInput" label="Email" group type="email" validate error="wrong" success="right" />
                    <MDBInput className="ContactInput" label="Subject" group type="text" validate error="wrong" success="right" />
                    <MDBInput className="ContactInput" type="textarea" rows="2" label="Message" />
                  </div>
                  <div className="text-center">
                  <MDBBtn outline color="secondary">Send
                      <MDBIcon far icon="paper-plane" className="ml-1" />
                  </MDBBtn>
                  </div>
              </form>
              </MDBCol>
          </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default ContactForm;