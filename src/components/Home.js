import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Navbar, Nav, Carousel, Button } from 'react-bootstrap';
import tabletop from '../images/tabletop.png'
import { faSpa } from '@fortawesome/free-solid-svg-icons';
// import { faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cupaction  from '../images/cupaction.png'
import logo from '../images/Get-Healed-Logo-Black.png'


const Home = (props) => {

  const handleClick = () => {
    axios.delete('http://localhost:3001/logout', {withCredentials: true})
    .then(response => {
      props.handleLogout()
      props.history.push('/')
    })
    .catch(error => console.log(error))
  }

  const spaIcon = <FontAwesomeIcon icon={faSpa}/>
  const instagramIcon = <FontAwesomeIcon icon={faInstagram}/>
  const linkedInIcon = <FontAwesomeIcon icon={faLinkedin}/>
  const facebookIcon = <FontAwesomeIcon icon={faFacebook}/>

  return (
    <div>
      <div>
        <Navbar bg='light' variant='light'>
            <Nav className="container-fluid">
              <Nav.Item>
                <Navbar.Brand as={Link} to='/' class="spaIcon">{spaIcon}</Navbar.Brand>
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

      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>

        {/* <h1 style={{textAlign : "center", fontFamily : " 'Playfair Display', serif", fontSize : "5em", margin: ".2em"}}> */}
          <img style={{height:"30%", width: "30%"}} src={logo} alt="logo"/>
        {/* </h1> */}
        
        <Carousel>
        <Carousel.Item style={{ objectFit: "contain"}}> 
          <img
            style={{filter: "contrast(30%)", objectFit: "contain"}}
            className="d-block w-100"
            src={tabletop}
            alt="Table"
          />
          <Carousel.Caption>
            <h1 style={{fontFamily : " 'Playfair Display', serif", marginBottom: "2em", fontSize: "3.5em"}}>Our mission is with your body's wellness in mind.</h1>
            <p><Button as={Link} to="/mission" variant="light">Learn More</Button></p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{filter: "contrast(30%)"}}
              className="d-block w-100"
              src={cupaction}
              alt="Second slide"
            />

            <Carousel.Caption>
            <h1 style={{fontFamily : " 'Playfair Display', serif", marginBottom: "1em", fontSize: "3.5em"}}>Let's talk about massage.</h1>
            <h5 style={{marginBottom: "2em"}}>Sitting at the desk for hours? Lifting heavy weights? Low energy? 
              <br></br>
              Massage Therapy. Massage is natural healing for injuries, pain relief, mental wellness, etc. Find the best plan for you.
            </h5>
            <p><Button as={Link} to="/services" variant="light">Services</Button></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
          <div style={{display: "flex", justifyContent: "center", marginTop: "1em"}}>
            <p style={{fontSize:"4em", color: "gray", marginRight: "1em"}}>{facebookIcon}</p>
            <p style={{fontSize:"4em", color: "gray"}}>{instagramIcon}</p>
            <p style={{fontSize:"4em", color: "gray", marginLeft: "1em"}}>{linkedInIcon}</p>
          </div>

    </div>
  )
}

export default Home