import React,{useState,useEffect} from "react"
import { Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {addCourier} from "../actions/courierAction";
import { Navbar,Container,Nav  } from 'react-bootstrap';
import {addCourierAction} from "./../actions/courierAction";
import {linkCustCourier} from "./../actions/customerAction";

const AddCourier = (props) =>{
     
    const dispatch = useDispatch();
    const courierSelector =  useSelector((state)=>state.addCourier.addCourierResp)
    const getCustomerSelector = useSelector((state)=>state.getCustomer.getCustomerResp)
  

    const handleAddcourier = (obj) =>{
        // if(!(obj.courierCode && obj.details && obj.courierType && obj.courierValue && obj.date) || obj.courierType=="false" ){
        //     alert("all fields are mandatory");
        //     return;
        // }
        // obj.courierValue = parseInt(obj.courierValue)
        // if(obj.courierValue<=0){
        //     alert("courier value cannot be less than or equal to 0");
        //     return;
        // }

        dispatch(addCourierAction(obj));

        console.log(obj)
        props.onHide()
    }
    
    useEffect(()=>{
        if(courierSelector && courierSelector.data){
            dispatch(linkCustCourier(getCustomerSelector.customerId,courierSelector.data.courierId))
        }
    },[courierSelector])

    const addcourierObj={
        courierStatus:"CREATED",
        initiatedDate:null,
        deliveredDate:null,
        customerId:getCustomerSelector.customerId
    }
    return(
        <>
        <Modal {...props}>
            <Modal.Header closeButton>
            <Modal.Title>Add Courier</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Consignment No</Form.Label>
                    <Form.Control
                        type="Number"
                        autoFocus
                        placeholder="Consignment No"
                        onChange={(e)=>{addcourierObj.consignmentNo=(e.target.value)}}
                    /><br />
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                        type="Number"
                        autoFocus
                        placeholder="Amount"
                        onChange={(e)=>{addcourierObj.amount=(e.target.value)}}
                    /><br />
                    <Form.Label>Destination Address</Form.Label>
                    <Form.Control
                        type="Text"
                        autoFocus
                        placeholder="Destination Address"
                        onChange={(e)=>{addcourierObj.destinationAddress=(e.target.value)}}
                    /><br />
                </Form.Group>
                
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary"  onClick={props.onHide}>
                Close
            </Button>
            <Button variant="primary" onClick={()=>{
                handleAddcourier(addcourierObj);}}>
                Add Courier
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default AddCourier;