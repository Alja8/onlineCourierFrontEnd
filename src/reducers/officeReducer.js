
export const addOffice =  (state={
    addOfficeResp:""
  }, action) => {
      switch (action.type) {
        case "ADD_OFFICE":
          return ({
            addOfficeResp: action.payload
          });
        case "ADD_OFFICE_ERR":
          return({
            addOfficeResp:action.payload
          })
          case "RESET":
          return({
            addOfficeResp:""
          })
        default:
          return state;
      }
  };

  export const getAllOffices =  (
    state={
        getAllOfficesResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "GET_ALL_OFFICES":
            return({
                getAllOfficesResp:action.payload
            })
          case "GET_ALL_OFFICES_ERR":
          return({
            getAllOfficesResp:action.payload
          })
          case "RESET":
          return({
            getAllOfficesResp:""
          })
          default:
            return state;
        }
  };

  
  export const getOffice =  (
    state={
        getOfficeResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "GET_OFFICES":
            return({
                getOfficeResp:action.payload
            })
          case "GET_OFFICES_ERR":
          return({
            getOfficeResp:action.payload
          })
          case "RESET":
          return({
            getOfficeResp:""
          })
          default:
            return state;
        }
  };

  
  export const deleteOffice =  (
    state={
        deleteOfficeResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "DELETE_OFFICE":
            return({
                deleteOfficeResp:action.payload
            })
          case "DELETE_OFFICE_ERR":
          return({
            deleteOfficeResp:action.payload
          })
          case "RESET":
          return({
            deleteOfficeResp:""
          })
          default:
            return state;
        }
  };

  export const updateOffice =  (
    state={
        updateOfficeResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "UPDATE_OFFICE":
            return({
                updateOfficeResp:action.payload
            })
          case "UPDATE_OFFICE_ERR":
          return({
            updateOfficeResp:action.payload
          })
          case "RESET":
          return({
            updateOfficeResp:""
          })
          default:
            return state;
        }
  };