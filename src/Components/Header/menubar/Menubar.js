import React, {useState} from "react";
import "./Menubar.css";
import "../../../CSS/bootstrap.min.css";



function Menubase(props) {

  const[selectedNavItem,setSelectedNavItem] = useState("nav-link js-scroll-trigger");
  const selecteItem = "nav-link js-scroll-trigger nav-item-selected"
  const notSelecteItem = "nav-item js-scroll-trigger"

  function itemSelected(item){
    setSelectedNavItem(item);
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
            <li className="nav-item">
              <a className={selectedNavItem === "about" ? selecteItem : notSelecteItem} href="#about" id="about" onClick={e => itemSelected(e.target.id)}>
                 About
            </a>
            </li>
            <li className="nav-item">
              <a className={selectedNavItem === "projects" ? selecteItem : notSelecteItem} href="#projects" id="projects" onClick={e => itemSelected(e.target.id)}>
                Projects
            </a>
            </li>
            <li className="nav-item">
              <a className={selectedNavItem === "signup" ? selecteItem: "nav-link js-scroll-trigger"} href="#signup"  id="signup" onClick={e => itemSelected(e.target.id)}>
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