import React,{useState,useEffect} from "react"
import { Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {addStaff} from "../actions/staffAction";
import { Navbar,Container,Nav  } from 'react-bootstrap';

const AddStaff = (props) =>{
     
    const dispatch = useDispatch();

    const handleAddstaff = (obj) =>{
        // if(!(obj.staffCode && obj.details && obj.staffType && obj.staffValue && obj.date) || obj.staffType=="false" ){
        //     alert("all fields are mandatory");
        //     return;
        // }
        // obj.staffValue = parseInt(obj.staffValue)
        // if(obj.staffValue<=0){
        //     alert("staff value cannot be less than or equal to 0");
        //     return;
        // }

        dispatch(addStaff(obj));

        console.log(obj)
        props.onHide()
    }
    

    const addstaffObj={
    }
    return(
        <>
        <Modal {...props}>
            <Modal.Header closeButton>
            <Modal.Title>Add Staff</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Aadhar Number</Form.Label>
                    <Form.Control
                        type="Number"
                        autoFocus
                        placeholder="Aadhar Number"
                        onChange={(e)=>{addstaffObj.aadharNo=(e.target.value)}}
                    /><br />
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="Text"
                        placeholder="First Name"
                        onChange={(e)=>{
                            addstaffObj.firstName=(e.target.value);
                        }}
                    /><br />
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="Text"
                        placeholder="Last Name"
                        onChange={(e)=>{
                            addstaffObj.lastName=(e.target.value);
                        }}
                    /><br />
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                        type="Number"
                        autoFocus
                        placeholder="Mobile Number"
                        onChange={(e)=>{addstaffObj.mobileNo=(e.target.value)}}
                    /><br />
                    <Form.Label>Office ID</Form.Label>
                    <Form.Control
                        type="Number"
                        autoFocus
                        placeholder="Office ID"
                        onChange={(e)=>{addstaffObj.officeId=(e.target.value)}}
                    /><br />
                </Form.Group>
                
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary"  onClick={props.onHide}>
                Close
            </Button>
            <Button variant="primary" onClick={()=>{
                handleAddstaff(addstaffObj);}}>
                Add Staff
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default AddStaff;