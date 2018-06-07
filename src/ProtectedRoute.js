import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthConsumer } from './context/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <AuthConsumer>
      {({ authenticated }) => {
        {
          console.log(authenticated);
        }
        return (
          <Route render={props => (authenticated ? <Component {...props} /> : <Redirect to="/login" />)} {...rest} />
        );
      }}
    </AuthConsumer>
  );
};

export default ProtectedRoute;
