import React from 'react'
import StaffMockData from '../Data/StaffMockData';
import {MDBDataTableV5} from "mdbreact";

function EventStaff(){
    return(
        <div>
            <MDBDataTableV5 info={false} sortable={false} hover={true} bordered small data={StaffMockData()} entries={5} entriesOptions={[5, 20, 25]}/>
        </div>
    );
}

export default EventStaff;