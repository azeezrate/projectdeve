/* eslint-disable react/require-default-props */

import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContentArea.css';
import PropTypes from 'prop-types';
import LogoutButton from '../Logout/logout-button';

const ContentArea = ({ left, right }) => (
  <>
    <Container fluid>
      <Row>
        <Col md={2} className="SplitPane-left px-0">
          {left}
          <Container fluid className="text-light logOut">
            <Row className="bg-success mt-5">
              {/* <Col><h2 className="text-center p-3"><b>LOG OUT</b></h2></Col> */}
              <LogoutButton className="logout-button" />
            </Row>
          </Container>
        </Col>
        <Col md={10} className="SplitPane-right px-0">
          {right}
        </Col>
      </Row>
      <Row className="my-6 text-center">
        <Col className="contentPaneBanners text-light">
          <p style={{ fontSize: '20px' }} className="end-dashboard text-centre">
            <br />
            <br />
            <br />
            <br />
            <br />
            If you would like to know more about the dashboard results, you can complete this
            <a className="form-link" href="http://www.mayportfolio.com/portfolio-overview/"> form </a>
            <br />
            to request a private consultation or to ask any questions you may have
            <br />
            <br />
            <br />
            <br />
            <br />
          </p>
        </Col>
      </Row>
    </Container>

  </>
);

ContentArea.propTypes = {
  left: PropTypes.element,
  right: PropTypes.element,
};

export default ContentArea;
