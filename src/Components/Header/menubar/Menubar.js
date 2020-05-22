import React from "react";
import "./Menubar.css";
import "../../../CSS/bootstrap.min.css";



function Menubase(props) {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        id="mainNav"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#page-top">
            Event Staff
        </a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
            </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#projects">
                Projects
            </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#signup">
                Contact
            </a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Menubase