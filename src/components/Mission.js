
import React from 'react'
import {Link} from 'react-router-dom';
import { Navbar, Nav, Button} from 'react-bootstrap';
import { faSpa } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import janesPic from '../images/PHOTO-2021-10-12-11-18-14.jpg'
import axios from 'axios';

const Mission = (props) => {
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
                <Navbar.Brand as={Link} to='/' class="spaIcon">{spaIcon} </Navbar.Brand>
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
      
      <h1 style={{textAlign: "center", margin: "1em"}} className="pageTitle">Mission</h1>
      <div style={{display:'flex', flex:"flex-wrap", justifyContent: "space-between", alignItems: "center"}}>
        <div style={{marginRight: "2em"}}>
          <h3 style={{marginBottom: "1em"}}><b>Jane Flores-Tober</b> - Founder</h3>
          <p>
          She graduated from Cortiva Institute in 2014. Many years of her experience were spent doing medical massage in chiropractic offices. She is a veteran to trigger point therapy. Her goal for clients is to create a treatment plan designed for their journey of self care. 
          </p>
        </div>
        <div>
          <img alt="profilePic" src={janesPic} style={{height: "80%", width: "90%"}} class="sketchy"/>
        </div>
      </div>
    </div>

  )
}

export default Mission