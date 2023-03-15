import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ProtectedRoute, {
  ProtectedRouteProps,
} from "../../../router/ProtectedRoute";

function UnauthCustomerLayout() {
  const location = useLocation();
  const defaultProtectedRouteProps: ProtectedRouteProps = {
    isAuthenticated: Boolean(localStorage.getItem("customer_token")),
    authenticationPath: "/customer/login",
  };
  console.log("location=>", location);
  return (
    <>
      UnauthCustomerLayout
      <Routes>
        <Route path={`${location}/login`} element={<h1>Login page</h1>}></Route>
      </Routes>
      {/* <ProtectedRoute {...defaultProtectedRouteProps} path="*">
        <h1>Not found</h1>
      </ProtectedRoute> */}
    </>
  );
}

export default UnauthCustomerLayout;
