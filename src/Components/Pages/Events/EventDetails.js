import React, {useState} from 'react';
import EventDetail from './EventDetail'
import DetailsIcon from '../../../assets/details_icon.png'
import MapIcon from '../../../assets/map_icon.png'
import StaffIcon from '../../../assets/staff_icon.png'
import EventMap from './EventMap'
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem } from "mdbreact";


function EventDetails(){

  const [activeTab, setActiveTab] = useState("1");

    return(
    <dir className ="eventDetails">
        <MDBContainer>
            <MDBNav className=" nav-justified" color="info" >
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
                    <EventDetail/>
                </MDBTabPane>
                <MDBTabPane tabId="2">
                    TAB 2
                </MDBTabPane>
                <MDBTabPane className="eventDetialsTab" tabId="3">
                    <EventMap/>
                </MDBTabPane>
            </MDBTabContent>
        </MDBContainer>
    </dir>
    );

}

export default EventDetails;