import React from 'react'
import {Link} from 'react-router-dom';
import { Navbar, Nav, Button} from 'react-bootstrap';
import { faSpa } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

const Contact= (props) => {


  const spaIcon = <FontAwesomeIcon icon={faSpa}/>

  const handleClick = () => {
    axios.delete('http://localhost:3001/logout', {withCredentials: true})
    .then(response => {
      props.handleLogout()
      props.history.push('/')
    })
    .catch(error => console.log(error))
  }

  return (
   
    <div>
      <div>
        <Navbar bg='light' variant='light'>
            <Nav className="container-fluid">
              <Nav.Item>
                <Navbar.Brand as={Link} to='/'>{spaIcon}</Navbar.Brand>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/mission'>Mission</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/services'>Services</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item className="ms-auto">
              { 
                props.loggedInStatus === false ?
                <Nav.Link as={Link} to='/signup'><Button variant="outline-dark">Sign Up</Button></Nav.Link> : null
              }
              </Nav.Item>
              <Nav.Item>
              { 
                props.loggedInStatus ? 
                <Nav.Link as={Link} to='/' onClick={handleClick}><Button variant="outline-dark">Log Out</Button></Nav.Link> : 
                <Nav.Link as={Link} to='/login'><Button variant="outline-dark">Log In</Button></Nav.Link>
              }
              </Nav.Item>
            </Nav> 
        </Navbar>    
      </div>
      
      <h1 style={{textAlign: "center", margin: "2em"}}>Contact</h1>
    </div>
  )
}

export default Contact