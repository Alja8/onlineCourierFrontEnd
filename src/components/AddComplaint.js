import React,{useState,useEffect} from "react"
import { Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {addComplaint} from "../actions/complaintAction";
import { Navbar,Container,Nav  } from 'react-bootstrap';
import {addComplaintAction} from "../actions/complaintAction";
import {linkCustComplaint} from "../actions/customerAction";

const AddComplaint = (props) =>{
     
    const dispatch = useDispatch();
    const complaintSelector =  useSelector((state)=>state.addComplaint.addComplaintResp)
    
  const getCustomerSelector = useSelector((state)=>state.getCustomer.getCustomerResp)
    

    const handleAddcomplaint = (obj) =>{
        // if(!(obj.complaintCode && obj.details && obj.complaintType && obj.complaintValue && obj.date) || obj.complaintType=="false" ){
        //     alert("all fields are mandatory");
        //     return;
        // }
        // obj.complaintValue = parseInt(obj.complaintValue)
        // if(obj.complaintValue<=0){
        //     alert("complaint value cannot be less than or equal to 0");
        //     return;
        // }

        dispatch(addComplaintAction(obj));

        console.log(obj)
        props.onHide()
    }
    
    useEffect(()=>{
        if(complaintSelector && complaintSelector.data){
            dispatch(linkCustComplaint(getCustomerSelector.customerId,complaintSelector.data.complaintId))
        }
    },[complaintSelector])

    const addcomplaintObj={
        
        customerId:getCustomerSelector.customerId
    }
    return(
        <>
        <Modal {...props}>
            <Modal.Header closeButton>
            <Modal.Title>Add Complaint</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Consignment No</Form.Label>
                    <Form.Control
                        type="Number"
                        autoFocus
                        placeholder="Consignment No"
                        onChange={(e)=>{addcomplaintObj.consignmentNo=(e.target.value)}}
                    /><br />
                    <Form.Label>shortDescription</Form.Label>
                    <Form.Control
                        type="Text"
                        autoFocus
                        placeholder="shortDescription"
                        onChange={(e)=>{addcomplaintObj.shortDescription=(e.target.value)}}
                    /><br />
                    <Form.Label>longDescripion</Form.Label>
                    <Form.Control
                        type="Text"
                        autoFocus
                        placeholder="longDescripion"
                        onChange={(e)=>{addcomplaintObj.longDescripion=(e.target.value)}}
                    /><br />
                </Form.Group>
                
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary"  onClick={props.onHide}>
                Close
            </Button>
            <Button variant="primary" onClick={()=>{
                handleAddcomplaint(addcomplaintObj);}}>
                Add Complaint
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default AddComplaint;