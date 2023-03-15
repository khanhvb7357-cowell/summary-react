import React from "react";
import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useNavigation,
  useRoutes,
} from "react-router-dom";
import AuthCustomerLayout from "./AuthCustomerLayout/AuthCustomerLayout";
import UnauthCustomerLayout from "./UnauthCustomerLayout/UnauthCustomerLayout";

function CustomerLayout() {
  //   const matches = useMatches();
  //   console.log("matches", matches);
  const location = useLocation();
  const navigate = useNavigate();
  const matches = "abc";
  console.log(location.pathname);

  const isAuth = Boolean(localStorage.getItem("customer_token"));
  console.log("CustomerLayout", isAuth);
  if (!isAuth) {
    return <UnauthCustomerLayout />;
  }
  return (
    <Route path={`${location.pathname}`} element={<AuthCustomerLayout />} />
  );
}

export default CustomerLayout;
