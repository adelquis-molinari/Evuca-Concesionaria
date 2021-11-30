import React from 'react';
import { Route } from 'react-router';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading  from '../Loading'

const PrivateRoute = ({component, ...args}) => ( 
    <Route 
        component={withAuthenticationRequired(component, {
<<<<<<< HEAD
            onRedirecting: () => <Loading />,
=======
            onRedirecting: () => "loading...",
>>>>>>> 27df14fba0403ca67a3f42911716f9469a7968bb
        })}
        {...args}
    />
)

export default PrivateRoute;