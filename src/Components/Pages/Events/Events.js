import React,{useEffect,useState} from 'react';
import EventList from './EventList'
import EventDetails from './EventDetails'



function Events() {

  const[eventInfo,setEventInfo]= useState({});

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
  </div>  
  );
}

export default Events;