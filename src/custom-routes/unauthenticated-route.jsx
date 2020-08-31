import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const UnauthenticatedRoute = ({component: Component, appProps, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            !appProps.auth ? (
                <Component {...props} {...appProps} />
            ) : (
                <Redirect to="/home" />
            )
        }
    />
);

export default UnauthenticatedRoute;