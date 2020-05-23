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
        <container>
          <Row>
            <Col className={styles.boxed}>
              <Row><FontAwesomeIcon icon={faMap} size=".3x" className={styles.iconCenterCommon} /></Row>
              <Row><div className={styles.iconCenterCommon}>72 Patrician Villas Blackrock</div></Row>
            </Col>
            <Col className={styles.boxed}>
              <Row><FontAwesomeIcon icon={faMap} size=".3x" className={styles.iconCenterCommon} /></Row>
              <Row><div className={styles.iconCenterCommon}>72 Patrician Villas Blackrock</div></Row>
            </Col>
            <Col className={styles.boxed}>
              <Row><FontAwesomeIcon icon={faMap} size=".3x" className={styles.iconCenterCommon} /></Row>
              <Row><div className={styles.iconCenterCommon}>72 Patrician Villas Blackrock</div></Row>
            </Col>
          </Row>
          <Row>
            <Col />
            <Col />
            <Col>
              <FontAwesomeIcon icon={faFacebook} size="2x" className={styles.iconRight} />
            </Col>
            <Col>
              <FontAwesomeIcon icon={faTwitter} size="2x" className={styles.iconCenter} />
            </Col>
            <Col>
              <FontAwesomeIcon icon={faInstagram} size="2x" className={styles.iconLeft} />
            </Col>
            <Col />
            <Col />
          </Row>
        </container>
      </div>
    </React.Fragment>
  );
}

export default Footerbase