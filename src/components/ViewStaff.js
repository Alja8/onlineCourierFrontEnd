import React, { useEffect, useRef, useState } from "react";
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {deleteStaff} from "../actions/staffAction";

const ViewStaff = ({data,user}) =>{

    const staffId = useRef('');
    const dispatch = useDispatch();
    const [staffData,setStaffData] = useState(data);
    const [showEditStaffModal,setShowEditStaffModal] = useState(false);
    const [editStaffData,setEditStaffData] = useState('');
    const getStaffSelector = null;//useSelector((state)=>state.getStaff.getStaffResp)

    useEffect(()=>{
        if(getStaffSelector && !getStaffSelector.data)
            setStaffData([getStaffSelector])
    },[getStaffSelector])

    const handleDeleteStaff = (val)=>{
        if (window.confirm(`Are you sure, you want to delete ${val.staffId}`)) {
            dispatch(deleteStaff(val.staffId))
            // dispatch(getAllProducts());
            
      }  
    }

    return(
        <>
            <div style = {{padding:"200px",paddingTop:"20px"}}>
                <h3>Staff</h3><br/>
                {/* <div class="">
                    <h5 style={{display: "inline-block"}}>Search Staff</h5> &nbsp;&nbsp;&nbsp;
                    <input type="text" ref={staffId} class="" placeholder="Staff Id"/>&nbsp;&nbsp;&nbsp;
                    <button type="submit" class="btn btn-primary" onClick={()=>{dispatch(getStaff(staffId.current.value))}}>Search</button>
                </div> */}
                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Aadhar Number</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Mobile Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            staffData&& staffData.map((val)=>{
                                return(
                                    <tr>
                                        <td>{val.empId}</td>
                                        <td>{val.aadharNo}</td>
                                        <td>{val.firstName}</td>
                                        <td>{val.lastName}</td>
                                        <td>{val.mobileNo}</td>
                                        <td>
                                                {/* <button onClick={()=>{
                                                        // setEditStaffData(val);
                                                        // setShowEditStaffModal(true);
                                                    }}>Edit</button> &nbsp;&nbsp;&nbsp;&nbsp; */}
                                                    <button onClick={()=>handleDeleteStaff(val)}>Delete</button>
                                            {
                                            //    user =="APPLICANT"?
                                            //    <>
                                            //     <button 
                                            //     onClick={()=>{onApply(val)}} 
                                            //     disabled = { applicantStaffSelector && applicantStaffSelector.length>0 }
                                            //     >Apply</button>
                                            //     {
                                            //         // applicantStaffSelector && applicantStaffSelector.includes(val.staffId)?
                                            //         // <button onClick={()=>{onCancel(val)}}>Cancel</button>:
                                            //         // null
                                            //     }
                                            //     </>:
                                            //    <>
                                            //          <button onClick={()=>{
                                            //             // setEditStaffData(val);
                                            //             // setShowEditStaffModal(true);
                                            //         }}>Edit</button> &nbsp;&nbsp;&nbsp;&nbsp;
                                            //         <button onClick={()=>onDeleteStaff(val)}>Delete</button>
                                            //    </>
                                            }
                                           
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </Table>
            </div>
        </>
    )
};

export default ViewStaff;