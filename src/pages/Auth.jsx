import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi, registerApi } from '../services/allApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Auth({ register }) {
    const navigate = useNavigate()
    const [userDetails, setUserDetails]= useState({
        username:"",
        email:"",
        password:""
    })

     console.log(userDetails);
     

     const handleRegister = async()=>{
     
        const {username, email,  password} = userDetails

        if(!username || !email || !password){
           toast.info('Please fill the form completely')
        }
        else{
            const result = await registerApi(userDetails)
            console.log(result);
            if(result.status==200){
                toast.success('Registration successfull')
                 navigate('/signin') 

            }
            else{
                toast.error('Something went wrong.Plese try after sometime')
            }
        }
     }

     const handleLogin = async()=>{
        
        const{email,password} = userDetails

        if(!email || !password){
            toast.info('Please fill the form completely')
        }
        else{
         const result =   await loginApi({email,password})
         console.log(result);

         if(result.status==200){
            toast.success('Login successfull')
            sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
            sessionStorage.setItem("token",result.data.token)
            setUserDetails({
                username:"",
                email:"",
                password:""
            })
            
            setTimeout(()=>{
                navigate('/grievance') 
            },2000)
         }
         else{
            toast.error(result.status.data)
         }
        }
     }
    
    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center flex-column" style={{ height: '100vh' }}>
                <div className="container w-50">
                <Link to={'/'} className='text-info fs-5' style={{textDecoration:'none'}}><FontAwesomeIcon icon={faArrowLeft} className='me-3'/>Back to home</Link>
                    <div className='bg-secondary p-3 mt-2 rounded'>
                        <Row>
                            <Col md={12}>
                                {register ? <h5>Sign Up to your Account</h5> :
                                    <h5>Sign In to your Account</h5>}
                                <form className='mt-4'>
                                    {register && <div className="mb-3">
                                        <input type="text" placeholder='Username' className='form-control' onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})}/>
                                    </div>}
                                    <div className="mb-3">
                                        <input type="text" placeholder='Email' className='form-control' onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}/>
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder='Password' className='form-control' onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}/>
                                    </div>
                                    <div className="mb-3">
                                        {register ? <div>
                                            <button type='button' className='btn btn-danger w-100 mb-3 ' onClick={handleRegister}>Register</button>
                                            <p>Already a User? Click here to <Link to={'/signin'} className='text-primary'>Login</Link></p>
                                        </div> :
                                            <div>
                                                <button type='button' className='btn btn-danger w-100 mb-3' onClick={handleLogin}>Login</button>
                                                <p>New User? Click here to <Link to={'/register'} className='text-primary'>Register</Link></p>
                                            </div>}
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </div>

                </div>
                <ToastContainer position='top-center' theme='colored' autoClose={2000} />
            </div>
        </>
    )
}

export default Auth