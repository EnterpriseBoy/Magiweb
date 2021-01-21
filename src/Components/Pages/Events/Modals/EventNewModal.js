import React from 'react'
import { MDBModal, MDBModalBody, MDBModalHeader,MDBContainer,MDBBtn,MDBModalFooter,MDBInput} from 'mdbreact';


function EventNewModal(props){
    return(
        <MDBContainer size="xl">
            <MDBModal isOpen={props.show} centered>
                <MDBContainer>
                    <MDBModalHeader>New Event Modal</MDBModalHeader>
                    <MDBModalBody>
                        <div class="container">
                            <div class="row newEventRow">
                                <div class="col-sm">
                                    <MDBInput label="First Name" />
                                </div>
                                <div class="col-sm">
                                    <MDBInput label="Last Name" /> 
                                </div>
                            </div>
                            <div class="row newEventRow">
                                <div class="col-sm">
                                    <MDBInput label="Email" />
                                </div>
                                <div class="col-sm">
                                    <MDBInput label="Phone" /> 
                                </div>
                            </div>
                            <div class="row newEventRow">
                                <div class="col-sm">
                                    <MDBInput label="Event Name" />
                                </div>
                            </div>
                            <div class="row newEventRow">
                                <div class="col-sm">
                                    <MDBInput label="Start Date" />
                                </div>
                                <div class="col-sm">
                                    <MDBInput label="End Date" /> 
                                </div>
                            </div>
                            <div class="row newEventRow">
                                <div class="col-sm">
                                    <MDBInput label="Comments" />
                                </div>
                            </div>
                            <div class="row newEventRow"/>
                        </div>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn outline color="blue-grey" >Submit</MDBBtn>
                        <MDBBtn outline color="blue-grey"  onClick={() => props.setModalState(false)} >Cancle</MDBBtn>
                    </MDBModalFooter>
                </MDBContainer>
            </MDBModal>
        </MDBContainer>
    )
}

export default EventNewModal;