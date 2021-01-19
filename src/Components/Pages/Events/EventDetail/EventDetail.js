import React from 'react';
import { MDBContainer,MDBRow,MDBCol } from "mdbreact";


function EventDetail(props){
    console.log(props.eventInfoProp);
    return(
        <div className="eventDetail"> 
            <MDBContainer>
                <MDBRow className="eventDetaislRow">
                    <MDBCol className="eventDetailsRowLable" size="2">Name:</MDBCol>
                    <MDBCol className="eventDetailsRowInfo" size="4">{props.eventInfoProp?.name}</MDBCol>
                    <MDBCol className="eventDetailsRowLable" size="2">Owner:</MDBCol>
                    <MDBCol className="eventDetailsRowInfo" size="4">James Murphy</MDBCol>
                </MDBRow>
                <MDBRow className="eventDetaislRow">
                    <MDBCol className="eventDetailsRowLable" size="2">Start:</MDBCol>
                    <MDBCol className="eventDetailsRowInfo" size="4">{props.eventInfoProp?.startDate}</MDBCol>
                    <MDBCol className="eventDetailsRowLable" size="2">End:</MDBCol>
                    <MDBCol className="eventDetailsRowInfo" size="4">{props.eventInfoProp?.endDate}</MDBCol>
                </MDBRow>
                <MDBRow className="eventDetaislRow">
                    <MDBCol className="eventDetailsRowLable" size="2">Location:</MDBCol>
                    <MDBCol className="eventDetailsRowInfo" size="10">{props.eventInfoProp?.location}</MDBCol>
                </MDBRow>
                <MDBRow className="eventDetaislRow">
                    <MDBCol className="eventDetailsRowLable" size="2">Email:</MDBCol>
                    <MDBCol className="eventDetailsRowInfo" size="4">{props.eventInfoProp?.email}</MDBCol>
                    <MDBCol className="eventDetailsRowLable" size="2">Phone:</MDBCol>
                    <MDBCol className="eventDetailsRowInfo" size="4">{props.eventInfoProp?.phone}</MDBCol>
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