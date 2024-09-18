import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          
          <Nav className="ms-auto fs-5 text-secondary">
            <Nav.Link><Link to={'/'} style={{textDecoration:'none', color:'white'}}>Home</Link></Nav.Link>
            <Nav.Link className='ms-3'><Link to={'/about'} style={{textDecoration:'none',color:'white'}}>About</Link></Nav.Link>
          </Nav>

        </Container>
      </Navbar>
       
    </>
  )
}

export default Header