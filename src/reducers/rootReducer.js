import { combineReducers } from "redux";
import {registerAdmin,registerCustomer,getLogin} from "./loginRedcer";
import {addOffice,getAllOffices,getOffice,deleteOffice,updateOffice} from "./officeReducer";
import {addStaff, getAllStaffs,getStaff, deleteStaff, updateStaff } from "./staffReducer"
import {addCourier, getAllCouriers, getCourier, deleteCourier, updateCourier} from "./courierReducer";
import {addCustomer, getAllCustomers, getCustomer, deleteCustomer, updateCustomer, linkCustCourier, linkCustComplaint} from "./customerReducer";
import {updateComplaint, deleteComplaint, getComplaint, getAllComplaints, addComplaint} from "./complaintReducer"
const rootReducer = combineReducers({
    registerAdmin,registerCustomer,getLogin,
    addOffice,getAllOffices,getOffice,deleteOffice,updateOffice,
    addStaff, getAllStaffs,getStaff, deleteStaff, updateStaff,
    addCourier, getAllCouriers, getCourier, deleteCourier, updateCourier,
    addCustomer, getAllCustomers, getCustomer, deleteCustomer, updateCustomer,linkCustCourier,linkCustComplaint,
    updateComplaint, deleteComplaint, getComplaint, getAllComplaints, addComplaint
});

export default rootReducer;