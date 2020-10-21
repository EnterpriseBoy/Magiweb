import React, { useState,useRef,useEffect } from "react";
import { MDBContainer,MDBModalFooter, MDBBtn, MDBModal } from 'mdbreact';
import SliderSwitch from "../Helpers/SlliderSwitch/SliderSwitch";

const LoginModal = (props) => {
  const [isChecked,setIsChecked] = useState(false);
  const nameDiv = useRef(null);
  const repeatPwd = useRef(null);

  
  function onChange(arg){
    if(isChecked){
      nameDiv.current.style.display="none";
      repeatPwd.current.style.display="none";
      setIsChecked(false);
    }else{
      nameDiv.current.style.display="block";
      repeatPwd.current.style.display="block";
      setIsChecked(true);
    }
  }

  function handleSubmit(){
    alert("TEST");
  }

return (
   <MDBContainer>
        <MDBModal isOpen={props.show} centered>
            <div className="flex-grid">
              <div className="col login_lable">Login</div>
              <div className="col"><SliderSwitch onChange={() => onChange } isChecked={isChecked}/></div>
              <div className="col login_lable">Register</div>
            </div>
            <div className="flex-grid" ref={nameDiv} style = {{display: "none"}} >
              <input type="text" className="form-control login_lable hide_mouse_over" placeholder="Name" aria-label="Name" aria-describedby="basic-addon" />
            </div>
            <div className="flex-grid">
              <input type="text" className="form-control login_lable" placeholder="Username" aria-label="Username" aria-describedby="basic-addon" />
            </div>
            <div className="flex-grid">
              <input type="text" className="form-control login_lable" placeholder="Password" aria-label="Password" aria-describedby="basic-addon" />
            </div>
            <div className="flex-grid" ref={repeatPwd} style = {{display: "none"}} >
              <input type="text" className="form-control login_lable" placeholder="Repeat Password"  aria-label="Repeat Password" aria-describedby="basic-addon" />
            </div>
          <MDBModalFooter>
          <MDBBtn color="outline primary" onClick={handleSubmit}>Submit</MDBBtn>
          <MDBBtn color="outline secondary" onClick={props.handleClose} >Cancle</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
);
};

export default LoginModal;
