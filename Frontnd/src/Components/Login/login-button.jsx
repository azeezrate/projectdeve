import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import PropTypes from 'prop-types';

const LoginButton = ({ check }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      type="button"
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
      disabled={check === false}
    >
      Log In / Sign up
    </button>
  );
};

LoginButton.propTypes = {
  check: PropTypes.bool.isRequired,
};

export default LoginButton;
