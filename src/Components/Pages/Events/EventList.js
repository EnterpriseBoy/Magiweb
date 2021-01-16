import React from 'react';
import GetData from './EventMockData'
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
          <MDBDataTable striped bordered small data={GetData(assignData)} entries={5} entriesOptions={[5, 20, 25]}/>
        </div>
  );
}

export default EventList;