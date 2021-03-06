import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AUTH_TOKEN } from "../utils/constants";

var store = require("store-js");

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            const token = store.get(AUTH_TOKEN);
            const content = token ? <Component {...props} /> : <Redirect to="/" />;
            return content;
        }}
    />
);


export default PrivateRoute;
