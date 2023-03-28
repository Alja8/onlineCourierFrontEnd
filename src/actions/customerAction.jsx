import axios from 'axios';
import API from '../constants/api.json';

export const addCustomer = (obj)=> async dispatch=> {
  axios
    .post(API.addCustomer,obj)
    .then((res)=>{
      dispatch({
        type:"ADD_CUSTOMER",
        payload:res
      })
      alert("Customer Added")
    })
    .catch((err)=>{
      dispatch({
        type:"ADD_CUSTOMER_ERR",
        payload:err.response
      })
      alert("Someting went wrong could't Add customer");
    });
};

export const getAllCustomers = ()=> async dispatch=> {
  await axios
    .get(API.getAllCustomer)
  .then((resp)=>{
    dispatch({
      type:"GET_ALL_CUSTOMERS",
      payload:resp.data
    })
  })
  .catch((err)=>{
    dispatch({
      type:"GET_ALL_CUSTOMERS_ERR",
      payload:err.response
    })
  });  
};

export const getCustomer = (id)=> async dispatch=> { 
  await axios
    .get(API.getCustomer+`/${id}`)
  .then((resp)=>{
    dispatch({
      type:"GET_CUSTOMERS",
      payload:resp.data
    })
  })
  .catch((err)=>{
    dispatch({
      type:"GET_CUSTOMERS_ERR",
      payload:err.response
    })
  });  
};


export const deleteCustomer = (id)=> async dispatch=> { 
    await axios
      .delete(API.deleteCustomer+`?id=${id}`)
    .then((resp)=>{
      dispatch({
        type:"DELETE_CUSTOMER",
        payload:resp.data
      })
      alert("Customer deleted")
    })
    .catch((err)=>{
      dispatch({
        type:"DELETE_CUSTOMER_ERR",
        payload:err.response
      })
      alert("Customer not deleted")
    });  
  };

  export const updateCustomer = (obj)=> async dispatch=> { 
    await axios
      .put(API.updateCustomer+`?id=${obj.customerId}`,obj)
    .then((resp)=>{
      dispatch({
        type:"UPDATE_CUSTOMER",
        payload:resp.data
      })
      alert("Customer update")
    })
    .catch((err)=>{
      dispatch({
        type:"UPDATE_CUSTOMER_ERR",
        payload:err.response
      })
      alert("Customer couldn't update")
    });  
  };

  export const linkCustCourier = (custId,courierId)=> async dispatch=> {
    axios
      .post(API.linkCustCourier+`?custId=${custId}&courierId=${courierId}`)
      .then((res)=>{
        dispatch({
          type:"ADD_CUSTOMER_COURIER",
          payload:res
        })
      })
      .catch((err)=>{
        dispatch({
          type:"ADD_CUSTOMER_COURIER_ERR",
          payload:err.response
        })
    });
  };

  
  export const linkCustComplaint = (custId,courierId)=> async dispatch=> {
    axios            
      .post(API.linkCustComplaint+`?custId=${custId}&complaintId=${courierId}`)
      .then((res)=>{
        dispatch({
          type:"ADD_CUSTOMER_COMPLAINT",
          payload:res
        })
      })
      .catch((err)=>{
        dispatch({
          type:"ADD_CUSTOMER_COMPLAINT_ERR",
          payload:err.response
        })
    });
  };