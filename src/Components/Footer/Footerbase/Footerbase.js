import React from "react";
import styles from "./Footerbase.module.css";
import "../../../CSS/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footerbase(props) {
  return (
    <React.Fragment>
      <div >
        <FontAwesomeIcon icon={faFacebook} size="2x" className={styles.icon} />
        <FontAwesomeIcon icon={faTwitter} size="2x" className={styles.icon} />
        <FontAwesomeIcon icon={faInstagram} size="2x" className={styles.icon} />
      </div>
    </React.Fragment>
  );
}

export default Footerbase