import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './logout-button.css';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      type="button"
      className="logout-button btn text-white btn-block" // mt-4 text-success font-weight-bold
      onClick={() => logout({
        returnTo: window.location.origin,
      })}
    >
      LOG OUT
    </button>
  );
};

export default LogoutButton;
