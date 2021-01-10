import React from 'react';
import Map from '../../../assets/Citymap.jpg';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn,MDBIcon } from 'mdbreact';

function ContacatMap() {
  return (
    <div className="contactDetails">
      <MDBContainer>
          <MDBRow>
              <MDBCol md="12">
                  <img className="contactMap" src={Map} alt="Map" />
                  <div className="contactMapText">Event Services</div>
                  <div className="contactMapText">Portland Place</div>
                  <div className="contactMapText"> London</div>
                  <div className="contactMapText">W1A 1AA</div>
              </MDBCol>
          </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default ContacatMap;