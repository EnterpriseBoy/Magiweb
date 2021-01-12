import React from 'react';
import EventList from './EventList'
import EventMap from './EventMap'



function Events() {
  return (
    <div>
      EventsMap
      <EventMap/>
      <EventList/>
    </div>  
  );
}

export default Events;