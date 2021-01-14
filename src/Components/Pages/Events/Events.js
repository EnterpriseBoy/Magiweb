import React from 'react';
import EventList from './EventList'
import EventDetails from './EventDetails'



function Events() {
  return (
    <div className="eventsFlexContainer">
      EventsMap
      <EventDetails/>
      <EventList/>
    </div>  
  );
}

export default Events;