
export const addStaff =  (state={
    addStaffResp:""
  }, action) => {
      switch (action.type) {
        case "ADD_STAFF":
          return ({
            addStaffResp: action.payload
          });
        case "ADD_STAFF_ERR":
          return({
            addStaffResp:action.payload
          })
          case "RESET":
          return({
            addStaffResp:""
          })
        default:
          return state;
      }
  };

  export const getAllStaffs =  (
    state={
        getAllStaffsResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "GET_ALL_STAFFS":
            return({
                getAllStaffsResp:action.payload
            })
          case "GET_ALL_STAFFS_ERR":
          return({
            getAllStaffsResp:action.payload
          })
          case "RESET":
          return({
            getAllStaffsResp:""
          })
          default:
            return state;
        }
  };

  
  export const getStaff =  (
    state={
        getStaffResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "GET_STAFFS":
            return({
                getStaffResp:action.payload
            })
          case "GET_STAFFS_ERR":
          return({
            getStaffResp:action.payload
          })
          case "RESET":
          return({
            getStaffResp:""
          })
          default:
            return state;
        }
  };

  
  export const deleteStaff =  (
    state={
        deleteStaffResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "DELETE_STAFF":
            return({
                deleteStaffResp:action.payload
            })
          case "DELETE_STAFF_ERR":
          return({
            deleteStaffResp:action.payload
          })
          case "RESET":
          return({
            deleteStaffResp:""
          })
          default:
            return state;
        }
  };

  export const updateStaff =  (
    state={
        updateStaffResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "UPDATE_STAFF":
            return({
                updateStaffResp:action.payload
            })
          case "UPDATE_STAFF_ERR":
          return({
            updateStaffResp:action.payload
          })
          case "RESET":
          return({
            updateStaffResp:""
          })
          default:
            return state;
        }
  };