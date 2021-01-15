import React from 'react';
import EventList from './EventList'
import EventDetailsNew from './EventDetailsNew'



function Events() {
  return (
    <div className="App">
      <div className="flex-container">
        <div className="eventsPage">
        <EventList/>
        <EventDetailsNew/>
      </div>
    </div>
  </div>  
  );
}

export default Events;