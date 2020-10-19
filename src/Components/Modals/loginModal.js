import React from "react";
import { MDBContainer,MDBModalHeader,MDBModalBody,MDBModalFooter, MDBBtn, MDBModal } from 'mdbreact';

const LoginModal = (props) => {
return (
   <MDBContainer>
        <MDBModal isOpen={props.show} centered>
          <MDBModalHeader >
            <div class="flex-grid">
              <div class="col login_lable">Login</div>
              <div class="col"></div>
              <div class="col login_lable">Register</div>
            </div>
          </MDBModalHeader>
          <MDBModalBody>
            <div class="flex-grid">
              <div class="colOne login_lable">Login</div>
              <div class="colTwo login_lable">Register</div>
            </div>
            <div class="flex-grid">
              <div class="colOne login_lable">Login</div>
              <div class="colTwo login_lable">Register</div>
            </div>
            <div class="flex-grid">
              <div class="colOne login_lable">Login</div>
              <div class="colTwo login_lable">Register</div>
            </div>
            <div class="flex-grid">
              <div class="colOne login_lable">Login</div>
              <div class="colTwo login_lable">Register</div>
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" >Close</MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
);
};

export default LoginModal;
