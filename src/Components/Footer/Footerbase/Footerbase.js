import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import "../../../CSS/bootstrap.min.css";
import {MDBContainer,MDBRow,MDBCol} from "mdbreact";


function Footerbase(props) {
  return (
    <div className="footerdiv">
      <div className="navbar">
          <span href="#"><FontAwesomeIcon icon={faTwitter} size="2x" /></span>
          <span href="#"><FontAwesomeIcon icon={faInstagram} size="2x" /></span>
          <span href="#"><FontAwesomeIcon icon={faFacebook} size="2x"  /></span>
          <span href="#"><FontAwesomeIcon icon={faLinkedin} size="2x" /></span>
      </div>
      </div>
  );
}

export default Footerbase