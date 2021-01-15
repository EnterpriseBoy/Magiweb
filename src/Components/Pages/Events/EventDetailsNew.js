import React, {useState} from 'react';
import DetailsIcon from '../../../assets/details_icon.png'
import MapIcon from '../../../assets/map_icon.png'
import StaffIcon from '../../../assets/staff_icon.png'
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink,MDBRow,MDBCol,MDBBtn } from "mdbreact";


function EventDetailsNew(){

  const [activeTab, setActiveTab] = useState("1");

    return(
    <dir className ="eventDetails">
        <MDBContainer className="mt-4">
            <MDBNav className="mt-5 nav-pills nav-justified" color="info" >
            <MDBNavItem>
                <img className="eventLinkButton" src={DetailsIcon} onClick={() => setActiveTab("1")} alt="details"/>
            </MDBNavItem>
            <MDBNavItem>
                <img className="eventLinkButton" src={StaffIcon} onClick={() => setActiveTab("2")} alt="details"/>
            </MDBNavItem>
            <MDBNavItem>
                <img className="eventLinkButton" src={MapIcon} onClick={() => setActiveTab("3")} alt="details"/>
            </MDBNavItem>
            </MDBNav>
            <MDBTabContent activeItem={activeTab}>
                <MDBTabPane tabId="1">
                    TAB 1
                </MDBTabPane>
                <MDBTabPane tabId="2">
                    TAB 2
                </MDBTabPane>
                <MDBTabPane tabId="3">
                    TAB 3
                </MDBTabPane>
            </MDBTabContent>
        </MDBContainer>
    </dir>
    );

}

export default EventDetailsNew;