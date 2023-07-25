/* eslint-disable react/require-default-props */

import React, { Fragment } from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContentPane.css';
import PropTypes from 'prop-types';
import AddStock from '../addstock/addstock';
import CheckOutButton from '../CheckOutButton/CheckOutButton';

const publicPath = process.env.PUBLIC_URL;

const ContentPane = (
  {
    child0, child1, child2, child3, child4, child5, user,
  },
) => (
  <>
    <Container fluid className="fill">
      <Row>
        <Col className="text-left">
          {/* <Button variant="success mt-2 btn-sm p-2">Add Stock</Button> */}
          <AddStock />
          {/* <CheckOutButton /> */}
        </Col>
        {/* <Col>
          <p className="text-right m-3">
            Filter Dates:
            <span className="bg-white px-1"> DD/MM/YY</span>
          </p>
        </Col> */}
      </Row>
      <Row>
        <Col>
          <Container>
            <Row className="bg-white">
              <Col md={3} />
              <Col md={6} className="text-center">
                <br />
                <h3 className="portf-health mt-4 font-weight-bold">Measure Portfolio health</h3>
                <Button className="health-button" variant="success mt-5 btn-lg p-3">Check Health</Button>
                <br />
                <a href="#overview_loc">
                  <br />
                  {/* <img className="my-3" src="https://via.placeholder.com/50" alt="" /> */}
                  <br />
                  <br />
                  <br />
                </a>
              </Col>
              <Col md={3} className="py-5 text-center">
                <a href="https://placeholder.com">
                  <br />
                  <img src={`${publicPath}/images/shutterstock_ill.png`} alt="" height="70%" width="100%" />
                  {/* height="58%" */}
                </a>
              </Col>
            </Row>
            <Row className="my-3 text-center">
              <Col className="contentPaneBanner text-light"><h4>Graphs</h4></Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col><h4 id="overview_loc" className="text-center my-4 text-dark">Overview</h4></Col>
      </Row>
      <Row>
        <Col>{child0}</Col>
      </Row>
      <Row>
        <Col><h4 id="risk_return_loc" className="text-center my-4 text-dark">Risk vs Return</h4></Col>
      </Row>
      <Row className="mb-2">
        <Col>{child1}</Col>
      </Row>
      {/* <Row>
        <Col><h4 className="text-center my-4 text-dark">Portfolio risk</h4></Col>
      </Row> */}
      <Row className="mb-2">
        <Col>{child2}</Col>
      </Row>
      <Row className="mb-2">
        <Col>{child3}</Col>
      </Row>
      <Row>
        <Col><h4 id="corr_matrix_loc" className="text-center my-4 text-dark">Are your stocks related to each other?</h4></Col>
      </Row>
      <Row className="mb-2">
        <Col>{child4}</Col>
      </Row>
      <Row className="mb-2">
        <Col>{child5}</Col>
      </Row>
    </Container>

  </>
);

ContentPane.propTypes = {
  child0: PropTypes.element,
  child1: PropTypes.element,
  child2: PropTypes.element,
  child3: PropTypes.element,
  child4: PropTypes.element,
  child5: PropTypes.element,
  user: PropTypes.element,
};

export default ContentPane;
