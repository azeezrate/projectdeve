import React, { Fragment, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import './Dashboard.css';
import {
  Container, Col, Row, Button,
} from 'react-bootstrap';

const DashboardHeader = () => {
  const [month, date, year] = new Date().toLocaleDateString('en-US').split('/');
  const [hour, minute] = new Date().toLocaleTimeString('en-US').split(/:| /);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const finalData = {
    id: user.sub.split('|')[1],
    name: user.name,
    email: user.email,
    picture: user.picture,
  };
  console.log(user, 'userssssssssss');
  useEffect(() => {
    // axios.post('http://localhost:8000/registerUser', finalData)
    axios.post('http://www.mayportfolio.com/registerUser', finalData)
      .then((response) => {
        console.log(response.data);
      }, (error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Container fluid className="pt-3 text-light dashboardBackground">
        <Row>
          <Col>
            <p className="dashboard pl-2">
              <span className="font-weight-bold mx-2">
                {' '}
                {' '}
                {' '}
                UPDATED:
                {' '}
                {`${date}/${month}/${year}`}
              </span>
              {' '}
              <span className="font-weight-bold">
                {' '}
                {' '}
                {' '}
                TIME:
                {' '}
                {`${hour}:${minute}`}
              </span>
            </p>
          </Col>
          <Col className="text-center font-weight-bold ml-5 h1">
            {' '}
            <p className="dashboard-header">
              DASHBOARD
            </p>
          </Col>
          <Col className="text-right">
            {' '}
            <p className="dashboard">
              {' '}
              {' '}
              {' '}
              {user.name}
            </p>
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default DashboardHeader;
