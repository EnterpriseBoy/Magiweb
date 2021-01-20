import React, {useState,useEffect} from 'react';
import EventDetail from '../EventDetail/EventDetail'
import DetailsIconBlue from '../../../../assets/Details-Blue.png'
import DetailsIconGreen from '../../../../assets/Details-Green.png'
import MapIconBlue from '../../../../assets/Map-Blue.png'
import MapIconGreen from '../../../../assets/Map-Green.png'
import StaffIconBlue from '../../../../assets/People-Blue.png'
import StaffIconGreen from '../../../../assets/People-Green.png'
import EventMap from '../EventMap/EventMap'
import EventStaff from '../EventStaff/EventStaff'
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem } from "mdbreact";


function EventDetails(props){

    
  const [activeTab, setActiveTab] = useState("1");
  const [detailsImage,setDetailsImage] = useState(DetailsIconBlue)
  const [mapImage,setMapImage] = useState(MapIconBlue)
  const [staffImage,setStaffImage] = useState(StaffIconBlue)

  useEffect(() => {

  },[]);

    return(
    <dir className ="eventDetails">
        <MDBContainer>
            <MDBNav className=" nav-justified" color="info" >
            <MDBNavItem>
                <img className="eventLinkButton" 
                src={detailsImage} 
                onClick={() => setActiveTab("1")} 
                alt="details"
                onMouseOut={() => setDetailsImage(DetailsIconBlue)}
                onMouseOver={() => setDetailsImage(DetailsIconGreen)}/>
            </MDBNavItem>
            <MDBNavItem>
            <img className="eventLinkButton" 
                src={staffImage} 
                onClick={() => setActiveTab("2")} 
                alt="details"
                onMouseOut={() => setStaffImage(StaffIconBlue)}
                onMouseOver={() => setStaffImage(StaffIconGreen)}/>
            </MDBNavItem>
            <MDBNavItem>
            <img className="eventLinkButton" 
                src={mapImage} 
                onClick={() => setActiveTab("3")} 
                alt="details" 
                onMouseOut={() => setMapImage(MapIconBlue)}
                onMouseOver={() => setMapImage(MapIconGreen)}/>
            </MDBNavItem>
            </MDBNav>
            <MDBTabContent activeItem={activeTab}>
                <MDBTabPane tabId="1">
                    <EventDetail eventInfoProp={props.eventInfoProp}/>
                </MDBTabPane>
                <MDBTabPane tabId="2">
                    <EventStaff/>
                </MDBTabPane>
                <MDBTabPane className="eventDetialsTab" tabId="3">
                    <EventMap lat={props.eventInfoProp.lat} lng={props.eventInfoProp.lng}/>
                </MDBTabPane>
            </MDBTabContent>
        </MDBContainer>
    </dir>
    );

}

export default EventDetails;