import React, {useState} from "react";
import "./Menubar.css";
import "../../../CSS/bootstrap.min.css";
import {Link} from "react-router-dom";



function Menubase(props) {

  const[selectButton,setSelectButton] = useState("nav-item");
  const selecteButton = "nav-item-selected"
  const notSelectedButton = "nav-item"

  function itemSelected(button){
    setSelectButton(button);
  }

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

            <li className={selectButton === "about"? selecteButton: notSelectedButton }>
              <Link to='/about' className="nav-link js-scroll-trigger" href="#about" id="about" onClick={e => itemSelected(e.target.id)}>About</Link>
            </li>
            <li className={selectButton === "projects"? selecteButton: notSelectedButton }>
              <Link to='contact' className="nav-link js-scroll-trigger" id="projects" href="#projects" onClick={e => itemSelected(e.target.id)}>Projects</Link>
            </li>
            <li className={selectButton === "login"? selecteButton: notSelectedButton }>
              <Link to='login' className="nav-link js-scroll-trigger" id="login" href="#signup" onClick={e => itemSelected(e.target.id)}>Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Menubase