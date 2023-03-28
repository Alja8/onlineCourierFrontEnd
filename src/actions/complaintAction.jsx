import axios from 'axios';
import API from '../constants/api.json';

export const addComplaintAction = (obj)=> async dispatch=> {
  axios
    .post(API.addComplaint,obj)
    .then((res)=>{
      dispatch({
        type:"ADD_COMPLAINT",
        payload:res
      })
      alert("Complaint Added")
    })
    .catch((err)=>{
      dispatch({
        type:"ADD_COMPLAINT_ERR",
        payload:err.response
      })
      alert("Someting went wrong could't Add courier");
    });
};

export const getAllComplaints = ()=> async dispatch=> {
  await axios
    .get(API.getAllComplaint)
  .then((resp)=>{
    dispatch({
      type:"GET_ALL_COMPLAINTS",
      payload:resp.data
    })
  })
  .catch((err)=>{
    dispatch({
      type:"GET_ALL_COMPLAINTS_ERR",
      payload:err.response
    })
  });  
};

export const getComplaint = (id)=> async dispatch=> { 
  await axios
    .get(API.viewComplaint+`?id=${id}`)
  .then((resp)=>{
    dispatch({
      type:"GET_COMPLAINTS",
      payload:resp.data
    })
  })
  .catch((err)=>{
    dispatch({
      type:"GET_COMPLAINTS_ERR",
      payload:err.response
    })
  });  
};


export const deleteComplaint = (id)=> async dispatch=> { 
    await axios
      .delete(API.deleteComplaint+`?id=${id}`)
    .then((resp)=>{
      dispatch({
        type:"DELETE_COMPLAINT",
        payload:resp.data
      })
      alert("Complaint deleted")
    })
    .catch((err)=>{
      dispatch({
        type:"DELETE_COMPLAINT_ERR",
        payload:err.response
      })
      alert("Complaint not deleted")
    });  
  };

  export const updateComplaint = (obj)=> async dispatch=> { 
    await axios
      .put(API.updateComplaint+`?id=${obj.courierId}`,obj)
    .then((resp)=>{
      dispatch({
        type:"UPDATE_COMPLAINT",
        payload:resp.data
      })
      alert("Complaint update")
    })
    .catch((err)=>{
      dispatch({
        type:"UPDATE_COMPLAINT_ERR",
        payload:err.response
      })
      alert("Complaint couldn't update")
    });  
  };


