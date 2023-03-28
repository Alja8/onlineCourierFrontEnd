import axios from 'axios';
import API from '../constants/api.json';

export const addStaff = (obj)=> async dispatch=> {
  axios
    .post(API.addStaff,obj)
    .then((res)=>{
      dispatch({
        type:"ADD_STAFF",
        payload:res
      })
      alert("Staff Added")
    })
    .catch((err)=>{
      dispatch({
        type:"ADD_STAFF_ERR",
        payload:err.response
      })
      alert("Someting went wrong could't Add staff");
    });
};

export const getAllStaffs = ()=> async dispatch=> {
  await axios
    .get(API.getAllStaff)
  .then((resp)=>{
    dispatch({
      type:"GET_ALL_STAFFS",
      payload:resp.data
    })
  })
  .catch((err)=>{
    dispatch({
      type:"GET_ALL_STAFFS_ERR",
      payload:err.response
    })
  });  
};

export const getStaff = (id)=> async dispatch=> { 
  await axios
    .get(API.viewStaff+`?id=${id}`)
  .then((resp)=>{
    dispatch({
      type:"GET_STAFFS",
      payload:resp.data
    })
  })
  .catch((err)=>{
    dispatch({
      type:"GET_STAFFS_ERR",
      payload:err.response
    })
  });  
};


export const deleteStaff = (id)=> async dispatch=> { 
    await axios
      .delete(API.deleteStaff+`?id=${id}`)
    .then((resp)=>{
      dispatch({
        type:"DELETE_STAFF",
        payload:resp.data
      })
      alert("Staff deleted")
    })
    .catch((err)=>{
      dispatch({
        type:"DELETE_STAFF_ERR",
        payload:err.response
      })
      alert("Staff not deleted")
    });  
  };

  export const updateStaff = (obj)=> async dispatch=> { 
    await axios
      .put(API.updateStaff+`?id=${obj.staffId}`,obj)
    .then((resp)=>{
      dispatch({
        type:"UPDATE_STAFF",
        payload:resp.data
      })
      alert("Staff update")
    })
    .catch((err)=>{
      dispatch({
        type:"UPDATE_STAFF_ERR",
        payload:err.response
      })
      alert("Staff couldn't update")
    });  
  };


