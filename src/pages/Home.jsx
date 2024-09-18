import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>
      <h3 className='text-center mt-5 mb-5 home'>Welcome to the Grievance submission Website</h3>

     <Header/>

     <div className="row ms-2 d-flex justify-content-center align-items-center">
      <div className="col-md-1"></div>
      <div className="col-md-5">
        <p className='fs-4'>Meet our superhero and let him know your grievances. Together, we can make a difference!</p>
        <div className='ms-2'>
        <h6 className='mb-3 text-secondary'>Already a user? Sign in for Submission of your Grievances </h6>
          <button className='btn btn-info'><Link to={'/signin'} className='text-white' style={{textDecoration:'none'}}>Sign In</Link></button>
          <h6 className='mb-3 mt-3 text-secondary'>Not a member? Register Now </h6>
          <button className='btn btn-info '><Link to={'/register'} className='text-white' style={{textDecoration:'none'}}>Register</Link></button>
        </div>
      </div>
      <div className="col-md-5 ms-5 mt-5">
        <img src="https://s-media-cache-ak0.pinimg.com/originals/01/19/ed/0119edabaec157987b2bb654fa5f3f87.gif" alt="no image" width={'50%'} height={'90%'}/>
      </div>
      <div className="col-md-1"></div>
     </div>

    </div>
  )
}

export default Home