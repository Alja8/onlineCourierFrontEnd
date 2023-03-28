import React,{useState,useEffect} from "react"
import { Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {addOffice} from "../actions/officeAction";
import { Navbar,Container,Nav  } from 'react-bootstrap';

const AddOffice = (props) =>{
     
    const dispatch = useDispatch();

    const handleAddoffice = (obj) =>{
        // if(!(obj.officeCode && obj.details && obj.officeType && obj.officeValue && obj.date) || obj.officeType=="false" ){
        //     alert("all fields are mandatory");
        //     return;
        // }
        // obj.officeValue = parseInt(obj.officeValue)
        // if(obj.officeValue<=0){
        //     alert("office value cannot be less than or equal to 0");
        //     return;
        // }

        dispatch(addOffice(obj));

        console.log(obj)
        props.onHide()
    }
    

    const addofficeObj={
    }
    return(
        <>
        <Modal {...props}>
            <Modal.Header closeButton>
            <Modal.Title>Add Office</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Opening Time</Form.Label>
                    <Form.Control
                        type="Time"
                        autoFocus
                        placeholder="Opening Time"
                        onChange={(e)=>{addofficeObj.openingTime=(e.target.value)}}
                    /><br />
                    <Form.Label>Closing Time</Form.Label>
                    <Form.Control
                        type="Time"
                        placeholder="Closing Time"
                        onChange={(e)=>{
                            addofficeObj.closingTime=(e.target.value);
                        }}
                    /><br />
                </Form.Group>
                
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary"  onClick={props.onHide}>
                Close
            </Button>
            <Button variant="primary" onClick={()=>{
                handleAddoffice(addofficeObj);}}>
                Add Office
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default AddOffice;