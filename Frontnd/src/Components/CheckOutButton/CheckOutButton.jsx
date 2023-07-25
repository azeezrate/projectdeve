import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './CheckOutButton.css';
import { useHistory } from 'react-router-dom';
import {
  Button,
} from 'react-bootstrap';

const CheckOutButton = () => {
  const history = useHistory();
  const routeChange = () => {
    const path = 'pricingtable';
    history.push(path);
  };
  return (
    <Button onClick={routeChange} className="check-out-button" variant="success mt-2 btn-sm p-2">Purchase now</Button>
    // <button
    //   type="button"
    //   className="btn btn-danger btn-block"
    //   onClick={() => logout({
    //     returnTo: window.location.origin,
    //   })}
    // >
    //   Logout
    // </button>
  );
};

export default CheckOutButton;
