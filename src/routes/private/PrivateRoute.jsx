import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, useLocation } from "react-router-dom";

const Private = (props) => {
  const user = useSelector((state) => state.authReducer);
  const location = useLocation();
  console.log(user)
  return user.isAuthenticated ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: {
          from: location.pathname,
        },
      }}
    />
  );
};

export default Private;
