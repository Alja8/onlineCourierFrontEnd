
export const getLogin=  (state={
    getLoginResp:""
  }, action) => {
      switch (action.type) {
        case "GET_CUSTOMER_LOGIN":
          return ({
            getLoginResp: action.payload
          });
        case "GET_CUSTOMER_LOGIN_ERR":
          return({
            getLoginResp:action.payload
          })
          case "RESET":
          return({
            getLoginResp:""
          })
        default:
          return state;
      }
  };

  export const registerCustomer =  (
    state={
      registerCustomerResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "REGISTER_CUSTOMER":
            return({
                registerCustomerResp:action.payload
            })
          case "REGISTER_CUSTOMER_ERR":
          return({
            registerCustomerResp:action.payload
          })
          case "RESET":
          return({
            registerCustomerResp:""
          })
          default:
            return state;
        }
  };

  
  export const registerAdmin =  (
    state={
        registerAdminResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "REGISTER_ADMIN":
            return({
                registerAdminResp:action.payload
            })
          case "REGISTER_ADMIN_ERR":
          return({
            registerAdminResp:action.payload
          })
          case "RESET":
          return({
            registerAdminResp:""
          })
          default:
            return state;
        }
  };