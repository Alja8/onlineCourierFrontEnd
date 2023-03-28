import React from "react";
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';

const ViewComplaint = ({data}) =>{
    return(
        <>
            <div style = {{padding:"200px",paddingTop:"20px"}}>
                <h3>Complaint</h3><br/>
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
                            <th>Long Description</th>
                            <th>Short Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data&& data.map((val)=>{
                                return(
                                    <tr>
                                        <td>{val.complaintId}</td>
                                        <td>{val.consignmentNo}</td>
                                        <td>{val.longDescripion}</td>
                                        <td>{val.shortDescription}</td>
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

export default ViewComplaint;