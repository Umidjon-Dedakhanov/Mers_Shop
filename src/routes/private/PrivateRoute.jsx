import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, useLocation } from "react-router-dom";

const Private = (props) => {
    const user = useSelector(state => state.authReducer);

    const location = useLocation();
  return user.isAuthenticated && user  ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: "/login/forgetPassword",
        state: {
          from: location.pathname,
        },
      }}
    />
  );
};

export default Private;