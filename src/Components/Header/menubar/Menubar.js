import React, {useState} from "react";
import "./Menubar.css";
import "../../../CSS/bootstrap.min.css";



function Menubase(props) {

  const[selectedNavItem,setSelectedNavItem] = useState("nav-link js-scroll-trigger");

  function itemSelected(item){
    item==="nav-link js-scroll-trigger nav-item-selected"? setSelectedNavItem("nav-link js-scroll-trigger nav-item-selected") :setSelectedNavItem("nav-link js-scroll-trigger nav-item-selected")
    alert(item);
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
              <a className={selectedNavItem} href="#about" id="about1" onClick={e => itemSelected(e.target.className)}>
                About
            </a>
            </li>
            <li className="nav-item">
              <a className={selectedNavItem} href="#projects">
                Projects
            </a>
            </li>
            <li className="nav-item">
              <a className={selectedNavItem} href="#signup">
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