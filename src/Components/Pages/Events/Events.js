import React from 'react';
import EventList from './EventList'
import EventDetails from './EventDetails'



function Events() {
  return (
    <div className="App">
      <div className="flex-container">
        <div className="eventsPage">
        <EventList/>
        <EventDetails/>
      </div>
    </div>
  </div>  
  );
}

export default Events;