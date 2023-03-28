import React, { useEffect, useState } from "react";
import css from "./login.css"
import { Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import { Navbar,Container,Nav  } from 'react-bootstrap';
import {registerAdmin,registerCustomer,login} from "../actions/loginAction";
import {getCustomer} from "../actions/customerAction";

const  Login = () => {
  
  const [errorMessages, setErrorMessages] = useState({});
  const [showRegisterModel, setshowRegisterModel] = useState(false);
  const [showAdminRegisterModel, setShowAdminRegisterModel] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [roleValue,setRoleValue] = useState();
  const loginResp = useSelector((state)=>state.getLogin.getLoginResp)
  const customerRegister = useSelector((state)=>state.registerCustomer.registerCustomerResp)
  const [registrationVal,setRegistrationVal] = useState({})
  useEffect(()=>{
    if(customerRegister){
        const val = {
          ...registrationVal,
          uniqueId:customerRegister.customerId
        }
      dispatch(registerAdmin(val));
    }
  },[customerRegister])
  
  useEffect(()=>{
    if(loginResp && loginResp.status==200){
      if(roleValue=="Admin"){
        // dispatch(getApplicantCourseId(loginResp.data.applicantId))
        navigate("/Admin")
      }
      else if(roleValue=="Customer"){
        dispatch(getCustomer(loginResp.data.uniqueId))
        navigate("/Customer")
      }
    }
  },[loginResp])
  
  const RegisterAdminModel = (props)=>{
    let val = { role:"ADMIN"}
    return(
      <>
      <Modal {...props}>
          <Modal.Header closeButton>
          <Modal.Title>Admin Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Mobile No.</Form.Label>
                  <Form.Control
                    type="Number"
                    placeholder="Mobile No."
                    onChange={(e)=>{
                      val.mobileNo=(e.target.value);
                    }}
                  /><br />
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                      type="Text"
                      placeholder="User Name"
                      onChange={(e)=>{
                        val.userName=(e.target.value);
                      }}
                  /><br />
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                      type="Text"
                      placeholder="Password"
                      onChange={(e)=>{
                        val.password=(e.target.value);
                      }}
                  /><br />
              </Form.Group>
              
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary"  onClick={props.onHide}>
              Close
          </Button>
          <Button variant="primary" onClick={()=>{

                if(!(val.mobileNo && val.password && val.userName)){
                  alert("all fields are mandatory");
                  return;
                }
                if(val.userName.length!=5){
                  alert("userName should be of 5 characters")
                  return
                }
                if(!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,}$/.test(val.password)){
                  alert("Password should contain number 1 small character, 1 capital character and 1 special character");
                  return;
                }

              dispatch(registerAdmin(val));
              setShowAdminRegisterModel(false)
              }}>
              Register
          </Button>
          </Modal.Footer>
      </Modal>
      </>
  )
 }
  
 const RegisterCustomerModel = (props)=>{
  let val = { role: "CUSTOMER" }
  let custVal = {}
  return(
    <>
    <Modal {...props}>
        <Modal.Header closeButton>
        <Modal.Title>Applicant Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="Text"
                    autoFocus
                    placeholder="First Name"
                    onChange={(e)=>{custVal.firstName=(e.target.value)}}
                /><br />
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="Text"
                    placeholder="Last Name"
                    onChange={(e)=>{
                      custVal.lastName=(e.target.value);
                    }}
                /><br />
                <Form.Label>Aadhar No.</Form.Label>
                <Form.Control
                    type="Number"
                    placeholder="Aadhar No."
                    onChange={(e)=>{
                      custVal.aadharNo=(e.target.value);
                    }}
                /><br />
                <Form.Label>Mobile No.</Form.Label>
                <Form.Control
                  type="Number"
                  placeholder="Mobile No."
                  onChange={(e)=>{
                    val.mobileNo=(e.target.value);
                    custVal.mobileNo=(e.target.value);
                  }}
                /><br />
                <Form.Label>User Name</Form.Label>
                <Form.Control
                    type="Text"
                    placeholder="User Name"
                    onChange={(e)=>{
                      val.userName=(e.target.value);
                    }}
                /><br />
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="Text"
                    placeholder="Password"
                    onChange={(e)=>{
                      val.password=(e.target.value);
                    }}
                /><br />
            </Form.Group>
            
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary"  onClick={props.onHide}>
            Close
        </Button>
        <Button variant="primary" onClick={()=>{

            if(!(custVal.firstName && custVal.lastName && custVal.aadharNo && val.mobileNo && val.password && val.userName)){
              alert("all fields are mandatory");
              return;
            }
            if(val.userName.length!=5){
              alert("userName should be of 5 characters")
              return
            }
            if(!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,}$/.test(val.password)){
              alert("Password should contain number 1 small character, 1 capital character and 1 special character");
              return;
            }


            dispatch(registerCustomer(custVal));
            setRegistrationVal(val)
            setshowRegisterModel(false)
            }}>
            Register
        </Button>
        </Modal.Footer>
    </Modal>
    </>
)
}

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
    role: "Choose a Role"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass, role } = document.forms[0];
    setRoleValue(role.value)
    dispatch(login(uname.value,pass.value))

    // const userData = database.find((user) => user.username === uname.value);

    // if (userData) {
    //   if (userData.password == pass.value) {
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
    //     setIsSubmitted(true);
    //   }
    // } else {
    //   setErrorMessages({ name: "uname", message: errors.uname });
    // }
    console.log(uname.value,pass.value,role.value)
  };

  const handleRegister = (event)=>{
    var { uname, pass, role } = document.forms[0];
    if(!role.value || role.value ==''){
      alert("please choose role");
      return;
    }
    if(role.value=="Admin")
      setShowAdminRegisterModel(true)
    else
      setshowRegisterModel(true)
  }

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>Role </label>
        </div>
        <div>
          <input type="radio" value="Customer" name="role" required class="w-25" />Customer
          <input type="radio" value="Admin" name="role" required  class="w-25"/>Admin
          {renderErrorMessage("role")}
        </div>
        <div className="button-container pt-3">
          <input type="button" class="btn btn-success h-75 pr-3" value = "SignIn" onClick={(e)=>{handleSubmit(e)}}/>&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="button" class="btn btn-dark h-75 pl-3" value = "Register" onClick={(e)=>{handleRegister(e);}}/>
        </div>
      </form>
    </div>
  );

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/login">Online Courier Managment<a href="/staffHome"></a></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        <RegisterAdminModel
          show={showAdminRegisterModel}
          onHide={()=>{setShowAdminRegisterModel(false)}}
        />
        <RegisterCustomerModel
          show={showRegisterModel}
          onHide={()=>{setshowRegisterModel(false)}}
        />
      <div>
        <div className="app">
          <div className="login-form">
            <div className="title">Sign In</div>
            {renderForm}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;