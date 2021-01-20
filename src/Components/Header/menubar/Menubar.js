import React, {useState} from "react";
import LoginModal from "../../Modals/loginModal";
import logo from "../../../assets/EventStaffLogo.png"
import "../../../CSS/bootstrap.min.css";
import {Link} from "react-router-dom";



function Menubase(props) {

  const[selectButton,setSelectButton] = useState("nav-item");
  const[showModal,setShowModal]=useState(false)
  const selecteButton = "nav-item-selected"
  const notSelectedButton = "nav-item"


  function itemSelected(button){

    if(button === "login"){
      setShowModal(true);
    }else{
      setSelectButton(button);
    }
  }

  const handleClose = () => {setShowModal(false)};

  return (
    <React.Fragment>
      <div className="navdiv navbar">
        <div className="logodiv-container">
          <img src={logo} className="logo" alt="logo"/>
        </div>
        <nav className="navbar-expand-lg  navbar-light navdiv-container">
            <ul className="navbar-nav">
              <li className={selectButton === "home"? selecteButton: notSelectedButton }>
                <Link to='/' className="nav-link js-scroll-trigger" id="home" onClick={e => itemSelected(e.target.id)}>Home</Link>
              </li>
              <li className={selectButton === "events"? selecteButton: notSelectedButton }>
                <Link to='/events' className="nav-link js-scroll-trigger" id="events" onClick={e => itemSelected(e.target.id)}>Events</Link>
              </li>
              <li className={selectButton === "contact"? selecteButton: notSelectedButton }>
                <Link to='contact' className="nav-link js-scroll-trigger" id="contact" onClick={e => itemSelected(e.target.id)}>Contact</Link>
              </li>
              <li className={selectButton === "login"? selecteButton: notSelectedButton }>
                <div to='login' className="nav-link js-scroll-trigger" id="login"  onClick={e => itemSelected(e.target.id)}>Login</div>
              </li>
            </ul>
        </nav>
      </div>
      <div className="modalContent"><LoginModal show={showModal} handleClose={handleClose}/></div>
      
    </React.Fragment>
  );
}

export default Menubase