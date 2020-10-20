import React, { useState } from "react";
import { MDBContainer,MDBModalFooter, MDBBtn, MDBModal } from 'mdbreact';
import SliderSwitch from "../Helpers/SlliderSwitch/SliderSwitch";

const LoginModal = (props) => {
  const [isChecked,setIsChecked] = useState(false);
  
  function onChange(arg){
    
    if(isChecked){
      document.getElementById("name").style.height="none";
      document.getElementById("repeatPassword").style.display="none";
      setIsChecked(false);
    }else{
      document.getElementById("name").style.display="block";
      document.getElementById("repeatPassword").style.display="block";
      setIsChecked(true);
    }
  }

return (
   <MDBContainer>
        <MDBModal isOpen={props.show} centered>
            <div class="flex-grid">
              <div class="col login_lable">Login</div>
              <div class="col"><SliderSwitch onChange={() => onChange } isChecked={isChecked}/></div>
              <div class="col login_lable">Register</div>
            </div>
            <div></div>
            <div class="flex-grid" id="name">
              <input type="text" className="form-control login_lable" placeholder="Name" aria-label="Name" aria-describedby="basic-addon" />
            </div>
            <div class="flex-grid">
              <input type="text" className="form-control login_lable" placeholder="Username" aria-label="Username" aria-describedby="basic-addon" />
            </div>
            <div class="flex-grid">
              <input type="text" className="form-control login_lable" placeholder="Password" aria-label="Password" aria-describedby="basic-addon" />
            </div>
            <div class="flex-grid" id="repeatPassword">
              <input type="text" className="form-control login_lable" placeholder="Repeat Password"  aria-label="Repeat Password" aria-describedby="basic-addon" />
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
