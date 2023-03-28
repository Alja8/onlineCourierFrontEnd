import axios from 'axios';
import API from '../constants/api.json';

export const login = (userId,password)=> async dispatch=> {
  axios
    .post(API.login+`?userId=${userId}&password=${password}`)
    .then((res)=>{
      dispatch({
        type:"GET_CUSTOMER_LOGIN",
        payload:res
      })

    })
    .catch((err)=>{
      dispatch({
        type:"GET_CUSTOMER_LOGIN_ERR",
        payload:err.response
      })
      alert("Login Failed");
    });
};

export const registerCustomer = (obj)=> async dispatch=> { 
  await axios
    .post(API.registerCustomer, obj)
  .then((resp)=>{
    dispatch({
      type:"REGISTER_CUSTOMER",
      payload:resp.data
    })
    alert("Registeration Success Please SignIn")
  })
  .catch((err)=>{
    dispatch({
      type:"REGISTER_CUSTOMER_ERR",
      payload:err.response
    })
    alert("registeration failed")
  });  
};

export const registerAdmin = (obj)=> async dispatch=> { 
    await axios
      .post(API.registerAdmin, obj)
    .then((resp)=>{
      dispatch({
        type:"REGISTER_ADMIN",
        payload:resp.data
      })
      alert("Registeration Success Please SignIn")
    })
    .catch((err)=>{
      dispatch({
        type:"REGISTER_ADMIN_ERR",
        payload:err.response
      })
      alert("registeration failed")
    });  
  };