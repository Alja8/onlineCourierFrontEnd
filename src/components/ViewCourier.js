import React, { useState } from "react";
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import {updateCourier} from "../actions/courierAction";
import { useDispatch, useSelector } from "react-redux";

const ViewCourier = ({data,user}) =>{
    const dispatch = useDispatch();
    const [showCourierEditModal,setShowCourierEditModal] = useState(false)
    const [editCourierData,setEditCourierData] = useState(false)
    const EditCourier = (props)=>{
        const val = props.data;
       if(!val) return
       
        return(
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Courier Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>courier Status</Form.Label>
                    <Form.Select 
                        type="Text"
                        autoFocus
                        placeholder="courierStatus"
                        onChange={(e)=>{val.courierStatus=(e.target.value)}}
                    >
                        <option value="CREATED">CREATED</option>
                        <option value="INITIATED">INITIATED</option>
                        <option value="INTRANSIT">INTRANSIT</option>
                        <option value="DELIVERED">DELIVERED</option>
                        <option value="REJECTED">REJECTED</option>
                    </Form.Select>
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>{
                    dispatch(updateCourier(val.courierId,val.courierStatus))
                    setShowCourierEditModal(false)
                }}>
                    Update
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }
    return(
        <>
            <EditCourier 
                data={editCourierData}
                show={showCourierEditModal}
                onHide={()=>{setShowCourierEditModal(false)}}
            />  
            <div style = {{padding:"200px",paddingTop:"20px"}}>
                <h3>Couriers</h3><br/>
                {/* <div class="">
                    <h5 style={{display: "inline-block"}}>Search Course</h5> &nbsp;&nbsp;&nbsp;
                    <input type="text" ref={courseId} class="" id="exampleFormControlInput1" placeholder="Course ID"/>&nbsp;&nbsp;&nbsp;
                    <button type="submit" class="btn btn-primary" onClick={()=>{dispatch(getCourse(courseId.current.value))}}>Search</button>
                </div> */}
                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Consignment No</th>
                            <th>Initiated Date</th>
                            <th>Delivery Date</th>
                            <th>Courier Status</th>
                            <th>Amount</th>
                            <th>Destination Address</th>
                            {
                                user=="Admin"?
                                <>
                                    <th>Action</th>
                                </>:
                                null
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data&& data.map((val)=>{
                                return(
                                    <tr>
                                        <td>{val.courierId}</td>
                                        <td>{val.consignmentNo}</td>
                                        <td>{val.initiatedDate}</td>
                                        <td>{val.deliveredDate}</td>
                                        <td>{val.courierStatus}</td>
                                        <td>{val.amount}</td>
                                        <td>{val.destinationAddress}</td>
                                        {
                                            user=="Admin"?
                                            <>
                                                <td>
                                                <button onClick={()=>{
                                                    setEditCourierData(val);
                                                    setShowCourierEditModal(true);
                                                }}>Edit</button>
                                                </td>
                                            </>:
                                            null
                                        }
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default ViewCourier;