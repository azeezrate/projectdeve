import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';

const publicPath = process.env.PUBLIC_URL;

const Sidebar = () => (

  <>
    <Container fluid className="text-justify">
      {/* <Row>
        <Col>
          <p className="pl-2 mt-3">
            <img
              alt=""
              src={`${publicPath}/images/mayPortfolioLogo1.jpg`}
              width="110"
              height="42"
              className="d-inline-block align-top"
            />
          </p>
        </Col>
      </Row> */}
      {/* <Row className="sidebarAccent text-light mt-3 bg-success">
        <Col>
          <p className="text-center pl-2  p-2">
            <b>Menu</b>
          </p>
        </Col>
      </Row> */}
      {/* <Row>
        <Col>
          <p className="text-center pl-2 mt-2">
            Graphs
            {' '}
            <b>!</b>
          </p>
        </Col>
      </Row> */}
      <Row>
        <Col>
          <p className="pl-2 my-4">
            <b>1.</b>
            {' '}
            <a className="a" href="#overview_loc">Overview</a>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="pl-2 my-4">
            <b>2.</b>
            {' '}
            <a className="a" href="#risk_return_loc">Risk vs Return</a>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="pl-2 my-4">
            <b>3.</b>
            {' '}
            <a className="a" href="#corr_matrix_loc">Stocks correlation</a>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="pl-2 my-4">
            <b>4.</b>
            <a className="a" href="#worst_c_s_loc">Worst case scenario</a>
          </p>
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <p className="pl-2 my-4">
            <b>5.</b>
            {' '}
            Recommendations
          </p>
        </Col>
      </Row> */}
      {/* <Row>
        <Col>
          <p className="pl-2 my-4">
            <b>2.1</b>
            {' '}
            What is the maximum amount that you can lose in one month?

          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="pl-2 my-4">
            <b>2.2</b>
            {' '}
            What is the maximum amount that you can lose in one month?

          </p>
        </Col>
      </Row> */}
    </Container>
  </>
);

export default Sidebar;
