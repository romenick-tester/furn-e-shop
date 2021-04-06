import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// will remove later
import { useUserContext } from "../manager";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { myUser } = useUserContext();

  return <Route {...rest} render={(props) => myUser ? <Component {...props} /> : <Redirect to="/" />} />;
};

export default PrivateRoute;
