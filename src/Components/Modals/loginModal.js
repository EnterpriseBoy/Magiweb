import React, { useState,useRef } from "react";
import { MDBContainer,MDBModalFooter, MDBBtn, MDBModal } from 'mdbreact';
import axios from 'axios';
import {useQuery} from 'react-query';
import SliderSwitch from "../Helpers/SlliderSwitch/SliderSwitch";

const LoginModal = (props) => {
  const [isChecked,setIsChecked] = useState(false);
  const [username,setUsername] = useState("niall.maguire@topmail.ie");
  const [password,setPassword] = useState("nijjjjjj");

  const nameDiv = useRef(null);
  const repeatPwd = useRef(null);

  // const { isLoading, error, data } = useQuery('fetchLuke', () =>
  // axios.post('http://localhost:3000/api/user/login',{
  //   headers: {
  //     'Content-Type': 'application/json ',
  //     'accept': '*/*'
  //   },
  //     email: "niall.maguire@topmail.ie",
  //     password: "nijjjjjj"
  //   })
  // );

  
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
    axios.post('http://localhost:3000/api/user/login',{
        email: "niall.maguire@topmail.ie",
        password: "nijjjjjj"
      }).then(function (response) {
        console.log(response);
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
            <div className="flex-grid" ref={nameDiv} style = {{display: "none"}} >
              <input type="text" className="form-control login_lable hide_mouse_over" placeholder="Name" aria-label="Name" aria-describedby="basic-addon" />
            </div>
            <div className="flex-grid">
              <input type="text" onChange={(e) => setUsername(e.target.value)} className="form-control login_lable" placeholder="Username" aria-label="Username" aria-describedby="basic-addon" />
            </div>
            <div className="flex-grid">
              <input type="text" onChange={(e) => setPassword(e.target.value)} className="form-control login_lable" placeholder="Password" aria-label="Password" aria-describedby="basic-addon" />
            </div>
            <div className="flex-grid" ref={repeatPwd} style = {{display: "none"}} >
              <input type="text" className="form-control login_lable" placeholder="Repeat Password"  aria-label="Repeat Password" aria-describedby="basic-addon" />
            </div>
          <MDBModalFooter>
          <MDBBtn color="outline primary" onClick={handleSubmit}>Submit</MDBBtn>
          <MDBBtn color="outline secondary" onClick={props.handleClose} >Cancle</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
{/* 
        {isLoading ? (
        <div>Retrieving Luke Skywalker Information ...</div>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}
        </pre>
      )} */}

      </MDBContainer>
);
};

export default LoginModal;
