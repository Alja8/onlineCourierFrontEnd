import axios from 'axios';
import API from '../constants/api.json';

export const addOffice = (obj)=> async dispatch=> {
  axios
    .post(API.addOffice,obj)
    .then((res)=>{
      dispatch({
        type:"ADD_OFFICE",
        payload:res
      })
      alert("Office Added")
    })
    .catch((err)=>{
      dispatch({
        type:"ADD_OFFICE_ERR",
        payload:err.response
      })
      alert("Someting went wrong could't Add office");
    });
};

export const getAllOffices = ()=> async dispatch=> {
  await axios
    .get(API.getAllOffices)
  .then((resp)=>{
    dispatch({
      type:"GET_ALL_OFFICES",
      payload:resp.data
    })
  })
  .catch((err)=>{
    dispatch({
      type:"GET_ALL_OFFICES_ERR",
      payload:err.response
    })
  });  
};

export const getOffice = (id)=> async dispatch=> { 
  await axios
    .get(API.viewOffice+`?id=${id}`)
  .then((resp)=>{
    dispatch({
      type:"GET_OFFICES",
      payload:resp.data
    })
  })
  .catch((err)=>{
    dispatch({
      type:"GET_OFFICES_ERR",
      payload:err.response
    })
  });  
};


export const deleteOffice = (id)=> async dispatch=> { 
    await axios
      .delete(API.deleteOffice+`?id=${id}`)
    .then((resp)=>{
      dispatch({
        type:"DELETE_OFFICE",
        payload:resp.data
      })
      alert("Office deleted")
    })
    .catch((err)=>{
      dispatch({
        type:"DELETE_OFFICE_ERR",
        payload:err.response
      })
      alert("Office not deleted")
    });  
  };

  export const updateOffice = (obj)=> async dispatch=> { 
    await axios
      .put(API.updateOffice+`?id=${obj.officeId}`,obj)
    .then((resp)=>{
      dispatch({
        type:"UPDATE_OFFICE",
        payload:resp.data
      })
      alert("Office update")
    })
    .catch((err)=>{
      dispatch({
        type:"UPDATE_OFFICE_ERR",
        payload:err.response
      })
      alert("Office couldn't update")
    });  
  };


