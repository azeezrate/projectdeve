import React, { Fragment } from 'react';
// import './App.css';
import {
  Container, Col, Row, Button, Navbar, Nav,
} from 'react-bootstrap';
import './Navbar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useHistory } from 'react-router-dom';
// import AuthNav from '../AuthNav/auth-nav';
import { useAuth0 } from '@auth0/auth0-react';
// import LogoutButton from '../Logout/logout-button';

// const [show, setShow] = useState(false);
// const showDropdown = (e)=>{
//     setShow(!show);
// }
// const hideDropdown = e => {
//     setShow(false);
// }

const publicPath = process.env.PUBLIC_URL;
const MyNavBar = () => {
  const { isAuthenticated } = useAuth0();
  const history = useHistory();
  const routeChange = () => {
    const path = '/';
    history.push(path);
  };
  return (
    <>
      <Navbar bg="white" expand="lg">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={`${publicPath}/images/Logo-09.png`}
            href="/dashboard"
            width="150"
            height="33"
            className="d-inline-block align-top logo-nav"
          />
          {' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto me-5">
            {/* <Nav.Link onClick={routeChange} className="navbar">Home</Nav.Link> */}
            <Nav.Link href="http://www.mayportfolio.com/home/" className="navbar me-5">Home</Nav.Link>
            <Nav.Link href="http://www.mayportfolio.com/services/" className="navbar me-5">Services</Nav.Link>
            <NavDropdown title="My Portfolio" className="navbar-top me-5">
              {/* id="collasible-nav-dropdown" */}
              {/* </NavDropdown></Nav>show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}> */}
              <NavDropdown.Item className="navbar dropdown-content" href="http://www.mayportfolio.com/portfolio-dashboard/">Portfolio dashboard</NavDropdown.Item>
              <NavDropdown.Item className="navbar dropdown-content" href="http://www.mayportfolio.com/portfolio-overview/">Portfolio overview</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="http://www.mayportfolio.com/about-us/" className="navbar me-5">About</Nav.Link>
            <Nav.Link href="http://www.mayportfolio.com/contact-us/" className="navbar me-5">Contact Us</Nav.Link>
            { isAuthenticated
            && (
            <div className="navbar-nav ml-auto">
              {/* <LogoutButton /> */}
            </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNavBar;
