
import React from "react";
import {Route, Redirect} from 'react-router-dom'
import {useSelector} from "react-redux";

const PublicRoute = ({component: Component, ...rest}) => {
    const isLoggedIn = useSelector(state => state.userData.loggedIn)

    return (
        <Route {...rest} render={props => (
            isLoggedIn ? <Redirect to="/" /> : <Component {...props} />
        )} />
    );
};

export default PublicRoute