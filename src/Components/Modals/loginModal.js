import React, { useState,useRef } from "react";
import AnimateHeight from 'react-animate-height'
import { MDBContainer,MDBModalFooter, MDBBtn, MDBModal } from 'mdbreact';
import axios from 'axios';
import SliderSwitch from "../Helpers/SlliderSwitch/SliderSwitch";

const LoginModal = (props) => {
  const [isChecked,setIsChecked] = useState(false);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [height,setHeight]= useState("0");

  const nameDiv = useRef(null);
  const repeatPwd = useRef(null);

  function onChange(arg){
    if(isChecked){
      setHeight("0");
      setIsChecked(false);
    }else{
      setHeight("auto");
      setIsChecked(true);
    }
  }

  function handleSubmit(){
    setHeight("äuto");
    axios.post('http://localhost:3000/api/user/login',{
        email: email,
        password: password
      }).then(function (response) {
        alert(JSON.stringify(response));
        props.handleClose();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

return (
   <MDBContainer>
        <MDBModal isOpen={props.show} centered>
            <div className="flex-grid">
              <div className="col login_lable">Login</div>
              <div className="col"><SliderSwitch onChange={() => onChange } isChecked={isChecked}/></div>
              <div className="col login_lable">Register</div>
            </div>
            <AnimateHeight duration={ 500 } height={height}>
              <div className="flex-grid" ref={nameDiv}  >
                <input type="text" className="form-control login_lable" placeholder="Name" aria-label="Name" aria-describedby="basic-addon" />
              </div>
            </AnimateHeight>
            <div className="flex-grid">
              <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control login_lable" placeholder="Username" aria-label="Username" aria-describedby="basic-addon" />
            </div>
            <div className="flex-grid">
              <input type="text" onChange={(e) => setPassword(e.target.value)} className="form-control login_lable" placeholder="Password" aria-label="Password" aria-describedby="basic-addon" />
            </div>
            <AnimateHeight duration={ 500 } height={height}>
              <div className="flex-grid" ref={repeatPwd}>
                <input type="text" className="form-control login_lable" placeholder="Repeat Password"  aria-label="Repeat Password" aria-describedby="basic-addon" />
              </div>
            </AnimateHeight>
          <MDBModalFooter>
          <MDBBtn color="outline primary" onClick={handleSubmit}>Submit</MDBBtn>
          <MDBBtn color="outline secondary" onClick={props.handleClose} >Cancle</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
);
};

export default LoginModal;
