import React from 'react';
import { MDBContainer,MDBRow,MDBCol } from "mdbreact";


function EventDetail(props){
    console.log(props.eventInfoProp);
    return(
        <div>
            <MDBContainer>
            <MDBRow className="eventDetaislRow">
                <MDBCol className="eventDetailsRowLable" size="3">Name:</MDBCol>
                <MDBCol className="eventDetailsRowInfo" size="3">{props.eventInfoProp?.name}</MDBCol>
                <MDBCol className="eventDetailsRowLable" size="3">Owner:</MDBCol>
                <MDBCol className="eventDetailsRowInfo" size="3">James Murphy</MDBCol>
            </MDBRow>
            <MDBRow className="eventDetaislRow">
                <MDBCol className="eventDetailsRowLable" size="3">Start Date:</MDBCol>
                <MDBCol className="eventDetailsRowInfo" size="3">{props.eventInfoProp?.startDate}</MDBCol>
                <MDBCol className="eventDetailsRowLable" size="3">End Date:</MDBCol>
                <MDBCol className="eventDetailsRowInfo" size="3">{props.eventInfoProp?.endDate}</MDBCol>
            </MDBRow>
            <MDBRow className="eventDetaislRow">
                <MDBCol className="eventDetailsRowLable" size="3">Location:</MDBCol>
                <MDBCol className="eventDetailsRowInfo" size="9">{props.eventInfoProp?.location}</MDBCol>
            </MDBRow>
            <MDBRow className="eventDetaislRow">
                <MDBCol className="eventDetailsRowLable" size="3">Email:</MDBCol>
                <MDBCol className="eventDetailsRowInfo" size="9">{props.eventInfoProp?.email}</MDBCol>
            </MDBRow>
            <MDBRow className="eventDetaislRow">
                <MDBCol className="eventDetailsRowLable" size="3">Phone:</MDBCol>
                <MDBCol className="eventDetailsRowInfo" size="9">{props.eventInfoProp?.phone}</MDBCol>
            </MDBRow>
            <MDBRow className="eventDetaislRow">
                <MDBCol className="eventDetailsRowLable" size="3">Comments:</MDBCol>
                <MDBCol className="eventDetailsRowInfo" size="9">{props.eventInfoProp?.comment}</MDBCol>
            </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default EventDetail;