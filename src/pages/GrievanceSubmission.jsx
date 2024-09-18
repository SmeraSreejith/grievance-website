import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { submitGrievanceApi } from '../services/allApi';

function GrievanceSubmission() {

  const [token,setToken] = useState("")

  const [grievanceDetails, setGrievanceDetails ] = useState({
    name:"",
    email:"",
    statement:"",
    remedy:""
  })

  console.log(grievanceDetails);
  
  const navigate = useNavigate()

 const handleCancel=()=>{
   navigate('/')
  }

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }
  },[])
  console.log(token);
  
   const handleAdd=async(e)=>{
    e.preventDefault()
    const{name,email,statement,remedy} = grievanceDetails
    if(!name || !email || !statement || !remedy){
      alert('Please fill the form completely')
    }
    else{
      //api
      const reqBody = new FormData()

      reqBody.append('name', name)
      reqBody.append('email',email)
      reqBody.append('statement',statement)
      reqBody.append('remedy',remedy)
    
     if(token){
      const reqHeader = {
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
      }
      const result = await submitGrievanceApi(reqBody,reqHeader)
      console.log(result);
     }
      else{
        alert('Please login')
      }
    }
   }


  return (
    <>
    <div className="grievance-form">
       <h3 className='text-center mt-5 mb-5 home'>Submit Your Grievance</h3>
    </div>

    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          
          <Nav className="ms-auto fs-5 text-secondary">
            <Nav.Link  onClick={handleCancel}>Logout</Nav.Link>
          </Nav>

        </Container>
      </Navbar>

    <div className="row ms-2 me-2 mb-4 mt-5">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={(e)=>setGrievanceDetails({...grievanceDetails,name:e.target.value})}>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={(e)=>setGrievanceDetails({...grievanceDetails,email:e.target.value})}>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" onChange={(e)=>setGrievanceDetails({...grievanceDetails,statement:e.target.value})}>
        <Form.Label>Statement of Grievance</Form.Label>
        <Form.Control as="textarea" rows={6} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" onChange={(e)=>setGrievanceDetails({...grievanceDetails,remedy:e.target.value})}>
        <Form.Label>Remedy requested</Form.Label>
        <Form.Control as="textarea" rows={6} />
      </Form.Group>
     <div className='justify-content-between align-items-center d-flex ms-2 me-2 mt-5'>
      <button type='button' className='btn btn-danger'>Cancel</button>
      <button type='button' className='btn btn-info'  onClick={handleAdd}>Submit</button>
     </div>
    </Form>
      </div>
      <div className="col-md-2"></div>
    </div>
    </>
  )
}

export default GrievanceSubmission