import React, { useState } from 'react';
import { Jumbotron, Form } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import { Redirect } from 'react-router-dom';
import LoginButton from '../Login/login-button';

const LandingPage = () => {
  const [check, setCheck] = useState(false);
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      <Jumbotron className="mb-3">
        <h1>Welcome</h1>
        <p className="text-center">
          Login or sign up to make the most of your investments,
          <br />
          to track their performance, and get insights and support
        </p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" defaultChecked={check} onClick={() => setCheck(!check)} label="Accept Terms and conditions and Privacy policy." />
          </Form.Group>
        </Form>
        <div className="w-25 mx-auto">
          <LoginButton check={check} />
        </div>
      </Jumbotron>
    </div>
  );
};

export default LandingPage;
