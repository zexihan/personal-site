/* @flow */
import React from 'react';
import PropTypes from 'prop-types';
import cookie from 'js-cookie';
import { Route, Redirect } from 'react-router-dom';

export type Props = {
  component?: Function,
  location?: {
    hash?: string,
    key?: string,
    pathname?: string,
    search?: string,
    state?: string,
  },
};

const PrivateRoute = (props: Props) => {
  const { component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!window.id) { // checks for non authenticated accounts
          cookie.set('target', props.location.pathname);
        }
        return (
          window.id ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          )
        );
      }}
    />
  );
};

PrivateRoute.defaultProps = {
  component: null,
  location: {
    hash: '',
    key: '',
    pathname: '',
    search: '',
    state: '',
  },
};

export default PrivateRoute;
