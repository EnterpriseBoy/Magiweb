import React from 'react';
import EventsMockData from '../Data/EventsMockData'
import { MDBDataTable} from 'mdbreact';


/* https://www.pluralsight.com/guides/how-to-pass-data-between-react-components */
function EventList(props) {

  function assignData(data){
    props.setEventInfoProp({
      name:data.name,
      owner:data.owner,
      startDate:data.startDate,
      endDate:data.endDate,
      location:data.location,
      email:data.email,
      phone:data.phone,
      comment:data.comment,
      lat:data.lat,
      lng:data.lng

      })
  }

      return (
        <div className="eventList">
          <MDBDataTable striped bordered small data={EventsMockData(assignData)} entries={5} entriesOptions={[5, 20, 25]}/>
        </div>
  );
}

export default EventList;