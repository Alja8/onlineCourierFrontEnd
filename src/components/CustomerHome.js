import React, { useState,useEffect } from "react";
import { Navbar,Container,Nav  } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import ViewCourier from "./ViewCourier";
import {getCustomer} from "../actions/customerAction";
import AddCourier from "./AddCourier";
import AddComplaint from "./AddComplaint";
import ViewComplaint from "./ViewComplaint";

const CustomerHome = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [viewCourierFlag,setViewCourierFlag] = useState(false);
    const [showAddCourierModal,setShowAddCourierModal] = useState(false);
    const [courierData,setCourierData] = useState([]);
    const customerSelector =  useSelector((state)=>state.getCustomer.getCustomerResp)

    
    const [viewComplaintFlag,setViewComplaintFlag] = useState(false);
    const [showAddComplaintModal,setShowAddComplaintModal] = useState(false);
    const [complaintData,setComplaintData] = useState([]);
    const getCustomerSelector = useSelector((state)=>state.getCustomer.getCustomerResp)
    
  const loginResp = useSelector((state)=>state.getLogin.getLoginResp)
  
    useEffect(()=>{
        console.log(loginResp)
        if(!loginResp || loginResp==""){
            navigate("/")
        }
    })
  

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="/Customer">Online Courier Managment<a href="/Customer"></a></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        
                        <Nav.Link href="/Customer">Home</Nav.Link>
                        <Nav.Link onClick={()=>{setShowAddCourierModal(true)}}>Add Courier</Nav.Link>
                        <Nav.Link onClick={()=>{
                            setViewComplaintFlag(false)
                            dispatch(getCustomer(getCustomerSelector.customerId))
                            setCourierData(customerSelector.couriers)
                            setViewCourierFlag(!viewCourierFlag)
                            }}>View Courier</Nav.Link>
                        
                        <Nav.Link onClick={()=>{setShowAddComplaintModal(true)}}>Add Complaint</Nav.Link>

                        <Nav.Link onClick={()=>{
                            setViewCourierFlag(false)
                            dispatch(getCustomer(getCustomerSelector.customerId))
                            setComplaintData(customerSelector.complaints)
                            setViewComplaintFlag(!viewComplaintFlag)
                            }}>View Complaints</Nav.Link>
                        <Nav.Link href="/">Logout</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {
                viewCourierFlag?
                <ViewCourier data = {courierData}/>:
                null
            }
            <AddCourier 
                show={showAddCourierModal}
                onHide={()=>{setShowAddCourierModal(false)}}
            />
            <AddComplaint
                show={showAddComplaintModal}
                onHide={()=>{setShowAddComplaintModal(false)}}
            />
            {
                viewComplaintFlag?
                <ViewComplaint data = {complaintData}/>:
                null
            }
        </>
    )
}

export default CustomerHome;