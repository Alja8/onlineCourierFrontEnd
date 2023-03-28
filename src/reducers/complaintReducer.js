
export const addComplaint =  (state={
    addComplaintResp:""
  }, action) => {
      switch (action.type) {
        case "ADD_COMPLAINT":
          return ({
            addComplaintResp: action.payload
          });
        case "ADD_COMPLAINT_ERR":
          return({
            addComplaintResp:action.payload
          })
          case "RESET":
          return({
            addComplaintResp:""
          })
        default:
          return state;
      }
  };

  export const getAllComplaints =  (
    state={
        getAllComplaintsResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "GET_ALL_COMPLAINTS":
            return({
                getAllComplaintsResp:action.payload
            })
          case "GET_ALL_COMPLAINTS_ERR":
          return({
            getAllComplaintsResp:action.payload
          })
          case "RESET":
          return({
            getAllComplaintsResp:""
          })
          default:
            return state;
        }
  };

  
  export const getComplaint =  (
    state={
        getComplaintResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "GET_COMPLAINTS":
            return({
                getComplaintResp:action.payload
            })
          case "GET_COMPLAINTS_ERR":
          return({
            getComplaintResp:action.payload
          })
          case "RESET":
          return({
            getComplaintResp:""
          })
          default:
            return state;
        }
  };

  
  export const deleteComplaint =  (
    state={
        deleteComplaintResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "DELETE_COMPLAINT":
            return({
                deleteComplaintResp:action.payload
            })
          case "DELETE_COMPLAINT_ERR":
          return({
            deleteComplaintResp:action.payload
          })
          case "RESET":
          return({
            deleteComplaintResp:""
          })
          default:
            return state;
        }
  };

  export const updateComplaint =  (
    state={
        updateComplaintResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "UPDATE_COMPLAINT":
            return({
                updateComplaintResp:action.payload
            })
          case "UPDATE_COMPLAINT_ERR":
          return({
            updateComplaintResp:action.payload
          })
          case "RESET":
          return({
            updateComplaintResp:""
          })
          default:
            return state;
        }
  };