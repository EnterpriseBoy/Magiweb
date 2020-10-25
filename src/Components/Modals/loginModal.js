import React, { useState } from "react";
import AnimateHeight from 'react-animate-height'
import { MDBContainer,MDBModalFooter, MDBBtn, MDBModal} from 'mdbreact';
import axios from 'axios';
import SliderSwitch from "../Helpers/SlliderSwitch/SliderSwitch";

const LoginModal = (props) => {
  const [isChecked,setIsChecked] = useState();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [height,setHeight]= useState("0%");
  const [errorResponse,setErrorResponse]=useState([])

  function onChange(arg){
    if(isChecked){
      setHeight("0%");
      setIsChecked(false);
    }else{
      setHeight("30px");
      setIsChecked(true);
    }
  }

  function handleSubmit(){
    axios.post('http://localhost:3000/api/user/login',{
        email: email,
        password: password
      }).then((response) => {
        props.handleClose();
      })
      .catch(function (error) {
        setErrorResponse(error.response.data);
        //alert(error.response.data[1]);
      });
  }

  function handleClose(){
    setErrorResponse([]);
    props.handleClose();
  }

return (
        <MDBModal isOpen={props.show} centered>
             <MDBContainer>
            <div className="flex-grid">
              <div className="col login_lable">Login</div>
              <div className="col"><SliderSwitch onChange={() => onChange } isChecked={isChecked}/></div>
              <div className="col login_lable">Register</div>
            </div>
            <AnimateHeight duration={ 500 } height={height}>
                <input type="text" className="form-control login_lable" placeholder="Name" aria-label="Name" aria-describedby="basic-addon" />
            </AnimateHeight>
              <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control login_lable" placeholder="Username" aria-label="Username" aria-describedby="basic-addon" />
              <input type="text" onChange={(e) => setPassword(e.target.value)} className="form-control login_lable" placeholder="Password" aria-label="Password" aria-describedby="basic-addon" />
            <AnimateHeight duration={ 500 } height={height}>
                <input type="text" className="form-control login_lable" placeholder="Repeat Password"  aria-label="Repeat Password" aria-describedby="basic-addon" />
            </AnimateHeight>
            <div>{errorResponse.map(function(error){return <div className="error">{error}</div>})}</div>
          <MDBModalFooter>
          <MDBBtn outline color="secondary"onClick={handleSubmit}>Submit</MDBBtn>
          <MDBBtn outline color="secondary" onClick={handleClose} >Cancle</MDBBtn>
          </MDBModalFooter>
          </MDBContainer>
        </MDBModal>
        );
};

export default LoginModal;
