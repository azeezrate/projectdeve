import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const publicPath = process.env.PUBLIC_URL;

const Footer = () => (
  <>
    <Container fluid className="footerContainer text-dark pt-5">
      <Row className="mt-3 pl-2">
        <Col md={6.5} className="mx-auto mb-4 text-left">
          <img
            alt=""
            src={`${publicPath}/images/Logo-09.png`}
            width="150"
            height="33"
            className="d-inline-block align-top mb-4"
          />
          {' '}
          <h6 className="fw-bold mb-4">
            Company
          </h6>
          <p>
            London, United Kingdom 🇬🇧
            <br />
            info@mayportfolio.com
          </p>
        </Col>
        <Col md={6.5} className="second-column mx-auto mb-4 text-left">
          <h6 className="fw-bold mb-4">
            <br />
            <br />
            <br />
            Legal
          </h6>
          <p>
            <a href="#!" className="text-reset">Privacy Policy</a>
            <br />
            <a href="#!" className="text-reset">Terms and Conditions</a>
          </p>
        </Col>
        <Col md={6.5} className="third-column mx-auto mb-4 text-left">
          <h6 className="fw-bold mb-4">
            <br />
            <br />
            <br />
            Site map
          </h6>
          <p>
            <a href="http://www.mayportfolio.com/home" className="site-map hover-underline-animation">Home</a>
            <br />
            <a href="http://www.mayportfolio.com/services" className="site-map hover-underline-animation">Services</a>
            <br />
            <a href="#!" className="site-map hover-underline-animation">Portfolio dashboard</a>
            <br />
            <a href="#!" className="site-map hover-underline-animation">Portfolio overview</a>
            <br />
            <a href="http://www.mayportfolio.com/about" className="site-map hover-underline-animation">About</a>
            <br />
            <a href="http://www.mayportfolio.com/contact-us" className="site-map hover-underline-animation">Contact us</a>
          </p>
        </Col>
      </Row>
      <Row className="copyright">
        <Col><p>&copy; 2021 May Portfolio</p></Col>
      </Row>
    </Container>
  </>
);

export default Footer;
