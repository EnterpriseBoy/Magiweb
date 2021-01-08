import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';



function Contact() {
  return (
    <div className="App">
      <div className="flex-container">
        <div className="contactForm">
          <div className="contactFormDetails">
            <MDBContainer>
              <MDBRow>
                <MDBCol md="6">
                  <form>
                    <p className="h5 text-center mb-4">Sign in</p>
                    <div className="grey-text">
                      <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right" />
                      <MDBInput label="Type your password" icon="lock" group type="password" validate />
                    </div>
                    <div className="text-center">
                      <MDBBtn>Login</MDBBtn>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
          <div className="contactFormMap">
              <h1>Map</h1>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default Contact;