import React,{useEffect,useState} from 'react';
import { MDBBtn } from "mdbreact";
import EventList from '../EventList/EventList'
import EventDetails from '../EventDetails/EventDetails'
import EventNeModal from '../Modals/EventNewModal'
import {MDBContainer,MDBRow,MDBCol} from "mdbreact";



function Events() {

  const[eventInfo,setEventInfo]= useState({});
  const[modalState,setModalState]=useState(false);

  useEffect(() => {
    console.log(eventInfo);
  },[eventInfo]);

  return (
    <div className="App">
        <div className="eventsPage">
        <MDBContainer>
          <MDBRow>
            <MDBCol size="6"><EventList setEventInfoProp = {setEventInfo}/></MDBCol>
            <MDBCol size="6"><EventDetails eventInfoProp = {eventInfo}/></MDBCol>
          </MDBRow>
        </MDBContainer>
    </div>
    <EventNeModal show={modalState} setModalState={setModalState}/>
    <div>
      <MDBBtn  color="info" outline onClick={() => setModalState(!modalState)}>New Event</MDBBtn>
    </div>
  </div>  
  );
}

export default Events;