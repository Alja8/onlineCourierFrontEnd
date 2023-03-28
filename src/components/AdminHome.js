import React, { useState,useEffect } from "react";
import { Navbar,Container,Nav  } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import ViewOffice from "./ViewOffice";
import AddOffice from "./AddOffice";
import {getAllOffices} from "../actions/officeAction"
import AddStaff from "./AddStaff";
import {getAllStaffs} from "../actions/staffAction";
import ViewStaff from "./ViewStaff"; 
import ViewCourier from "./ViewCourier";
import {getAllCouriers} from "../actions/courierAction";

const AdminHome = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [viewOffice,setViewOffice] = useState(false);
    const [showAddOfficeModal,setShowAddOfficeModal] = useState(false);
    const [officeData,setOfficeData] = useState([]);
    const allofficeSelector =  useSelector((state)=>state.getAllOffices.getAllOfficesResp)
    
    const [viewStaffFlag,setViewStaffFlag] = useState(false);
    const [showAddStaffModal,setShowAddStaffModal] = useState(false);
    const [staffData,setStaffData] = useState([]);
    const allStaffSelector =  useSelector((state)=>state.getAllStaffs.getAllStaffsResp)

    
    const [viewCourierFlag,setViewCourierFlag] = useState(false);
    const [courierData,setCourierData] = useState([]);
    const allCourierSelector =  useSelector((state)=>state.getAllCouriers.getAllCouriersResp)

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
                    <Navbar.Brand href="/Admin">Online Courier Managment<a href="/Admin"></a></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        
                        <Nav.Link href="/Admin">Home</Nav.Link>
                        <Nav.Link onClick={()=>{setShowAddOfficeModal(true)}}>Add Office</Nav.Link>
                        <Nav.Link onClick={()=>{
                            setViewCourierFlag(false)
                            setViewStaffFlag(false)
                            dispatch(getAllOffices())
                            setOfficeData(allofficeSelector)
                            setViewOffice(!viewOffice)
                            }}>View Office</Nav.Link>
                        <Nav.Link onClick={()=>{setShowAddStaffModal(true)}}>Add Staff</Nav.Link>
                        <Nav.Link onClick={()=>{
                            setViewCourierFlag(false)
                            setViewOffice(false)
                            dispatch(getAllStaffs())
                            setStaffData(allStaffSelector)
                            setViewStaffFlag(!viewStaffFlag)
                            }}>View Staff</Nav.Link>
                        
                        <Nav.Link onClick={()=>{
                            setViewOffice(false)
                            setViewStaffFlag(false)
                            dispatch(getAllCouriers())
                            setCourierData(allCourierSelector)
                            setViewCourierFlag(!viewCourierFlag)
                            }}>View Couriers</Nav.Link>
                        
                        <Nav.Link href="/">Logout</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {
                viewOffice?
                <ViewOffice data = {officeData}/>:
                null
            }
            <AddOffice 
                show={showAddOfficeModal}
                onHide={()=>{setShowAddOfficeModal(false)}}
            />
            {
                viewStaffFlag?
                <ViewStaff data = {staffData} />:
                null
            }
            
            <AddStaff
                show={showAddStaffModal}
                onHide={()=>{setShowAddStaffModal(false)}}
            />
            {
                viewCourierFlag?
                <ViewCourier user="Admin" data = {courierData}/>:
                null
            }
        </>
    )
}

export default AdminHome;