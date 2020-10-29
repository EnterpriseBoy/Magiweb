import React from "react";
import styles from "./Footerbase.module.css";
import "../../../CSS/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMap } from '@fortawesome/free-solid-svg-icons'

import { Row, Col } from 'reactstrap';

function Footerbase(props) {
  return (
    <React.Fragment>
      <div className={styles.footer}>
      <Row>
            <Col className={styles.boxed}>
              <Row><FontAwesomeIcon icon={faMap} className={styles.iconCenterCommon} /></Row>
              <Row><div className={styles.iconCenterCommon}>info</div></Row>
            </Col>
            <Col className={styles.boxed}>
  <Row><FontAwesomeIcon icon={faMap}  className={styles.iconCenterCommon} />{process.env.REACT_APP_ENVIORMENT}</Row>
              <Row><div className={styles.iconCenterCommon}>info</div></Row>
            </Col>
            <Col className={styles.boxed}>
              <Row><FontAwesomeIcon icon={faMap} className={styles.iconCenterCommon} />{process.env.REACT_APP_LOGIN}</Row>
              <Row><div className={styles.iconCenterCommon}>info</div></Row>
            </Col>
          </Row>
          <Row>
            <Col />
            <Col />
            <Col>
              <FontAwesomeIcon icon={faFacebook} size="2x" className={styles.iconRight} />
            </Col>
            <Col>
              <FontAwesomeIcon icon={faTwitter} size="2x" className={styles.iconCenter} />{process.env.REACT_APP_LOGIN}
            </Col>
            <Col>
              <FontAwesomeIcon icon={faInstagram} size="2x" className={styles.iconLeft} />
            </Col>
            <Col />
            <Col />
          </Row>
      </div>
    </React.Fragment>
  );
}

export default Footerbase