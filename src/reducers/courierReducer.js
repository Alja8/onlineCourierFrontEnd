
export const addCourier =  (state={
    addCourierResp:""
  }, action) => {
      switch (action.type) {
        case "ADD_COURIER":
          return ({
            addCourierResp: action.payload
          });
        case "ADD_COURIER_ERR":
          return({
            addCourierResp:action.payload
          })
          case "RESET":
          return({
            addCourierResp:""
          })
        default:
          return state;
      }
  };

  export const getAllCouriers =  (
    state={
        getAllCouriersResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "GET_ALL_COURIERS":
            return({
                getAllCouriersResp:action.payload
            })
          case "GET_ALL_COURIERS_ERR":
          return({
            getAllCouriersResp:action.payload
          })
          case "RESET":
          return({
            getAllCouriersResp:""
          })
          default:
            return state;
        }
  };

  
  export const getCourier =  (
    state={
        getCourierResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "GET_COURIERS":
            return({
                getCourierResp:action.payload
            })
          case "GET_COURIERS_ERR":
          return({
            getCourierResp:action.payload
          })
          case "RESET":
          return({
            getCourierResp:""
          })
          default:
            return state;
        }
  };

  
  export const deleteCourier =  (
    state={
        deleteCourierResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "DELETE_COURIER":
            return({
                deleteCourierResp:action.payload
            })
          case "DELETE_COURIER_ERR":
          return({
            deleteCourierResp:action.payload
          })
          case "RESET":
          return({
            deleteCourierResp:""
          })
          default:
            return state;
        }
  };

  export const updateCourier =  (
    state={
        updateCourierResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "UPDATE_COURIER":
            return({
                updateCourierResp:action.payload
            })
          case "UPDATE_COURIER_ERR":
          return({
            updateCourierResp:action.payload
          })
          case "RESET":
          return({
            updateCourierResp:""
          })
          default:
            return state;
        }
  };