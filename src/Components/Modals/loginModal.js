import React from "react";
import { MDBContainer,MDBModalHeader,MDBInput,MDBModalFooter, MDBBtn, MDBModal } from 'mdbreact';
import SliderSwitch from "../Helpers/SlliderSwitch/SliderSwitch";

import { faUser,faKey,faSignature } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LoginModal = (props) => {
return (
   <MDBContainer>
        <MDBModal isOpen={props.show} centered>
            <div class="flex-grid">
              <div class="col login_lable">Login</div>
              <div class="col"><SliderSwitch onChange={() => alert("has changed")}/></div>
              <div class="col login_lable">Register</div>
            </div>
            <div class="flex-grid">
              <div class="colOne login_lable">
                <FontAwesomeIcon icon={faUser} size="1x" />
              </div>
              <input type="text" className="form-control login_lable" placeholder="Name" aria-label="Name" aria-describedby="basic-addon" />
            </div>
            <div class="flex-grid">
              <div class="colOne login_lable">
                <FontAwesomeIcon icon={faSignature} size="1x" />
              </div>
              <input type="text" className="form-control login_lable" placeholder="Username" aria-label="Username" aria-describedby="basic-addon" />
            </div>
            <div class="flex-grid">
              <div class="colOne login_lable">
                <FontAwesomeIcon icon={faKey} size="1x" />
              </div>
              <input type="text" className="form-control login_lable" placeholder="Password" aria-label="Password" aria-describedby="basic-addon" />
            </div>
            <div class="flex-grid">
              <div class="colOne login_lable">
                <FontAwesomeIcon icon={faKey} size="1x" />
              </div>
              <input type="text" className="form-control login_lable" placeholder="Repeat Password" aria-label="Repeat Password" aria-describedby="basic-addon" />
            </div>
          <MDBModalFooter>
            <MDBBtn color="secondary" >Close</MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
);
};

export default LoginModal;
