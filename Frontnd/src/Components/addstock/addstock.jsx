import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './addstock.css';
import { useHistory } from 'react-router-dom';
import {
  Button,
} from 'react-bootstrap';

const AddStock = () => {
  const { logout } = useAuth0();
  const history = useHistory();
  const routeChange = () => {
    const path = 'inputform';
    history.push(path);
  };
  return (
    <Button onClick={routeChange} className="add-stock-button" variant="success mt-2 btn-sm p-2">Add Stock</Button>
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

export default AddStock;
