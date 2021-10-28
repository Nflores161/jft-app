import React from 'react'
import {Link} from 'react-router-dom';
import { Navbar, Nav, Button} from 'react-bootstrap';
import { faSpa } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

const Services= (props) => {

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
      
      <h1 style={{textAlign: "center", margin: "2em"}}>Services</h1>

        <div style={{display: "flex", flexDirection: "column", marginBottom: "2em"}}>

            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "1.5em"}}>
              <div style={{maxWidth: "60%"}}>
                <h1>Swedish</h1>
                <p>This type of massage can simultaneously relax and energize you while relieving muscle tension. This gentle massage involves soft, long, kneading strokes. Ideal for relief and relaxation.</p>
              </div>
              <div >
                <h2>Prices</h2>
                <ul style={{listStyleType: "none", margin: "0", padding: "0"}}>  
                  <li>60 Mins - $80</li>
                  <li>90 Mins - $110</li>
                  <li>120 Mins - $130</li>
                </ul>
              </div>
            </div>  


          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "1.5em"}}>
            <div style={{maxWidth: "60%"}}>
              <h1>Deep Tissue</h1>
              <p>This massage involves hard pressure and slow motion to manipulate muscle tendons and fascia, helping realign and relax chronic issues.</p>
            </div> 
            <div>
              <ul style={{listStyleType: "none", margin: "0", padding: "0"}}>  
                <li>60 Mins - $80</li>
                <li>90 Mins - $110</li>
                <li>120 Mins - $130</li>
              </ul>
            </div>  
          </div>   
            
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}> 
            <div style={{maxWidth: "60%"}}>
              <h1>Cupping</h1>
              <p>An ancient form of alternate medicine in which a therapist puts special cups on your skin for several minutes to create a suction pull of toxins. This can help muscle pains, inflammation, blood flow, relaxation, and well being.</p>
            </div>
            <div>
              <ul style={{listStyleType: "none", margin: "0", padding: "0"}}>  
                <li>60 Mins - $80</li>
                <li>90 Mins - $110</li>
                <li>120 Mins - $130</li>
              </ul>
            </div>
          </div>   
            
            {/* </Col>
          </Row>
        </Container> */}
      </div>
    </div>
  )
}

export default Services