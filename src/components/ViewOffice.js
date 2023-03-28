import React, { useEffect, useRef, useState } from "react";
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {deleteOffice} from "../actions/officeAction";

const ViewOffice = ({data,user}) =>{

    const officeId = useRef('');
    const dispatch = useDispatch();
    const [officeData,setOfficeData] = useState(data);
    const [showEditOfficeModal,setShowEditOfficeModal] = useState(false);
    const [editOfficeData,setEditOfficeData] = useState('');
    const getOfficeSelector = null;//useSelector((state)=>state.getOffice.getOfficeResp)

    useEffect(()=>{
        if(getOfficeSelector && !getOfficeSelector.data)
            setOfficeData([getOfficeSelector])
    },[getOfficeSelector])

    const handleDeleteOffice = (val)=>{
        if (window.confirm(`Are you sure, you want to delete ${val.officeId}`)) {
            dispatch(deleteOffice(val.officeId))
            // dispatch(getAllProducts());
            
      }  
    }

    return(
        <>
            <div style = {{padding:"200px",paddingTop:"20px"}}>
                <h3>Office</h3><br/>
                {/* <div class="">
                    <h5 style={{display: "inline-block"}}>Search Office</h5> &nbsp;&nbsp;&nbsp;
                    <input type="text" ref={officeId} class="" placeholder="Office Id"/>&nbsp;&nbsp;&nbsp;
                    <button type="submit" class="btn btn-primary" onClick={()=>{dispatch(getOffice(officeId.current.value))}}>Search</button>
                </div> */}
                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Closing Time</th>
                            <th>Opening Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            officeData&& officeData.map((val)=>{
                                return(
                                    <tr>
                                        <td>{val.officeId}</td>
                                        <td>{val.openingTime}</td>
                                        <td>{val.closingTime}</td>
                                        <td>
                                                {/* <button onClick={()=>{
                                                        // setEditOfficeData(val);
                                                        // setShowEditOfficeModal(true);
                                                    }}>Edit</button> &nbsp;&nbsp;&nbsp;&nbsp; */}
                                                    <button onClick={()=>handleDeleteOffice(val)}>Delete</button>
                                            {
                                            //    user =="APPLICANT"?
                                            //    <>
                                            //     <button 
                                            //     onClick={()=>{onApply(val)}} 
                                            //     disabled = { applicantOfficeSelector && applicantOfficeSelector.length>0 }
                                            //     >Apply</button>
                                            //     {
                                            //         // applicantOfficeSelector && applicantOfficeSelector.includes(val.officeId)?
                                            //         // <button onClick={()=>{onCancel(val)}}>Cancel</button>:
                                            //         // null
                                            //     }
                                            //     </>:
                                            //    <>
                                            //          <button onClick={()=>{
                                            //             // setEditOfficeData(val);
                                            //             // setShowEditOfficeModal(true);
                                            //         }}>Edit</button> &nbsp;&nbsp;&nbsp;&nbsp;
                                            //         <button onClick={()=>onDeleteOffice(val)}>Delete</button>
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

export default ViewOffice;