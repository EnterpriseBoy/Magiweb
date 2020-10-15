import React,{useState} from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';


function LoginModal() {
    const [modalState,setModalState]= useState(true);
    return (
        <MDBContainer>
            <MDBModal isOpen={modalState} >
            <MDBModalHeader >MDBModal title</MDBModalHeader>
            <MDBModalBody>
                (...)
            </MDBModalBody>
            <MDBModalFooter>
                <MDBBtn color="secondary" onClick={() => setModalState(false)}>Close</MDBBtn>
                <MDBBtn color="primary">Save changes</MDBBtn>
            </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    );
}

export default LoginModal;

