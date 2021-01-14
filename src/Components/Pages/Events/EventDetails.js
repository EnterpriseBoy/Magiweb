import React, {useState,useEffect} from 'react';
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";


function EventDetails(){

  const [activeTab, setActiveTab] = useState("1");

    return(
    <dir className ="eventDetails">
        <MDBContainer>
        <MDBNav className="nav-tabs mt-5">
          <MDBNavItem>
            <MDBNavLink link to="#" active={activeTab === "1"} onClick={() => setActiveTab("1")} role="tab" >
              Home
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={activeTab=== "2"} onClick={() => setActiveTab("2")} role="tab" >
              Profile
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={activeTab === "3"} onClick={() => setActiveTab("3")} role="tab" >
              Profile
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={activeTab} >
          <MDBTabPane tabId="1" role="tabpanel">
            <p className="mt-2">
              This is tab 1
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
            <p className="mt-2">
              This is tab 2
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel">
            <p className="mt-2">
              This is tab 3
            </p>
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    </dir>
    );

}

export default EventDetails;