import React, { useEffect } from "react";
import {
  redirect,
  Route,
  RouteProps,
  useLocation,
  useNavigation,
} from "react-router-dom";

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  [hey: string]: any;
} & RouteProps;

function ProtectedRoute({
  isAuthenticated,
  authenticationPath,
  component,
  ...routeProps
}: ProtectedRouteProps) {
  const currentLocation = useLocation();
  const location = useLocation();
  console.log(currentLocation);
  console.log("isAuthenticated:", isAuthenticated);
  console.log("authenticationPath:", authenticationPath);

  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } catch (e) {
      window.scroll(0, 0);
    }
  }, [location.pathname]);

  if (isAuthenticated) {
    return <Route {...routeProps} children={component} />;
  }
  return redirect(`${authenticationPath}`);
}

export default ProtectedRoute;
