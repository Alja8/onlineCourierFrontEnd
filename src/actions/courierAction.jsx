import axios from 'axios';
import API from '../constants/api.json';

export const addCourierAction = (obj)=> async dispatch=> {
  axios
    .post(API.addCourier,obj)
    .then((res)=>{
      dispatch({
        type:"ADD_COURIER",
        payload:res
      })
      alert("Courier Added")
    })
    .catch((err)=>{
      dispatch({
        type:"ADD_COURIER_ERR",
        payload:err.response
      })
      alert("Someting went wrong could't Add courier");
    });
};

export const getAllCouriers = ()=> async dispatch=> {
  await axios
    .get(API.getAllCouriers)
  .then((resp)=>{
    dispatch({
      type:"GET_ALL_COURIERS",
      payload:resp.data
    })
  })
  .catch((err)=>{
    dispatch({
      type:"GET_ALL_COURIERS_ERR",
      payload:err.response
    })
  });  
};

export const getCourier = (id)=> async dispatch=> { 
  await axios
    .get(API.viewCourier+`?id=${id}`)
  .then((resp)=>{
    dispatch({
      type:"GET_COURIERS",
      payload:resp.data
    })
  })
  .catch((err)=>{
    dispatch({
      type:"GET_COURIERS_ERR",
      payload:err.response
    })
  });  
};


export const deleteCourier = (id)=> async dispatch=> { 
    await axios
      .delete(API.deleteCourier+`?id=${id}`)
    .then((resp)=>{
      dispatch({
        type:"DELETE_COURIER",
        payload:resp.data
      })
      alert("Courier deleted")
    })
    .catch((err)=>{
      dispatch({
        type:"DELETE_COURIER_ERR",
        payload:err.response
      })
      alert("Courier not deleted")
    });  
  };

  export const updateCourier = (id,status)=> async dispatch=> { 
    await axios
      .put(API.updateCourier+`/${id}?courierStatus=${status}`)
    .then((resp)=>{
      dispatch({
        type:"UPDATE_COURIER",
        payload:resp.data
      })
      alert("Courier update")
    })
    .catch((err)=>{
      dispatch({
        type:"UPDATE_COURIER_ERR",
        payload:err.response
      })
      alert("Courier couldn't update")
    });  
  };


