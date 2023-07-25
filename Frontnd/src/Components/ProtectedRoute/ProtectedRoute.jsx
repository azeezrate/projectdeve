/* eslint-disable react/require-default-props */
/* eslint-disable  react/jsx-props-no-spreading */

import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import PropTypes from 'prop-types';
import Loading from '../Loading/Loading';

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    {...args}
  />
);

ProtectedRoute.propTypes = {
  component: PropTypes.element,
};

export default ProtectedRoute;
