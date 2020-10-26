import React, { useState } from "react";
import AnimateHeight from 'react-animate-height'
import { MDBContainer,MDBModalFooter, MDBBtn, MDBModal} from 'mdbreact';
import axios from 'axios';
import SliderSwitch from "../Helpers/SlliderSwitch/SliderSwitch";

const LoginModal = (props) => {
  const [isLogin,setIsLogin] = useState();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [height,setHeight]= useState("0%");
  const [errorResponse,setErrorResponse]=useState([])
  const [url,setUrl]= useState("")


  function onChange(arg){
    if(isLogin){
      setUrl('http://localhost:3000/api/user/login');
      setHeight("0%");
      setIsLogin(false);
    }else{
      setUrl('http://localhost:3000/api/user/register');
      setHeight("30px");
      setIsLogin(true);
    }
  }

  function handleSubmit(){
    axios.post(url,{
        email: email,
        password: password
      }).then((response) => {
        props.handleClose();
      })
      .catch(function (error) {
        let errorArray = [];  
        errorArray.push(error.response.data);
        setErrorResponse(errorArray);
      });
  }

  function handleClose(){
    setErrorResponse([]);
    setIsLogin(false);
    props.handleClose();
  }

return (
        <MDBModal isOpen={props.show} centered>
             <MDBContainer>
            <div className="flex-grid">
              <div className="col login_lable">Login</div>
              <div className="col"><SliderSwitch onChange={() => onChange } isChecked={isLogin}/></div>
              <div className="col login_lable">Register</div>
            </div>
            <AnimateHeight duration={ 500 } height={height}>
                <input type="text" className="form-control login_lable" placeholder="Name" aria-label="Name" aria-describedby="basic-addon" />
            </AnimateHeight>
              <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control login_lable" placeholder="Email" aria-label="Email" aria-describedby="basic-addon" />
              <input type="text" onChange={(e) => setPassword(e.target.value)} className="form-control login_lable" placeholder="Password" aria-label="Password" aria-describedby="basic-addon" />
            <AnimateHeight duration={ 500 } height={height}>
                <input type="text" className="form-control login_lable" placeholder="Repeat Password"  aria-label="Repeat Password" aria-describedby="basic-addon" />
            </AnimateHeight>
            <div>{errorResponse?.map(function(error){return <li className="error">{error}</li>})}</div>
            <div>Forgot Password</div>
          <MDBModalFooter>
          <MDBBtn outline color="secondary"onClick={handleSubmit}>Submit</MDBBtn>
          <MDBBtn outline color="secondary" onClick={handleClose} >Cancle</MDBBtn>
          </MDBModalFooter>
          </MDBContainer>
        </MDBModal>
        );
};

export default LoginModal;
