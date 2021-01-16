import React,{useEffect,useState} from 'react';
import { MDBBtn } from "mdbreact";
import EventList from './EventList'
import EventDetails from './EventDetails'
import EventNeModal from './EventNewModal'



function Events() {

  const[eventInfo,setEventInfo]= useState({});
  const[modalState,setModalState]=useState(false);

  useEffect(() => {
    console.log(eventInfo);
  },[eventInfo]);

  return (
    <div className="App">
      <div className="flex-container">
        <div className="eventsPage">
        <EventList setEventInfoProp = {setEventInfo} />
        <EventDetails eventInfoProp = {eventInfo}/>
      </div>
    </div>
    <EventNeModal show={modalState} setModalState={setModalState}/>
    <div>
      <MDBBtn  color="info" outline onClick={() => setModalState(!modalState)}>New Event</MDBBtn>
    </div>
  </div>  
  );
}

export default Events;