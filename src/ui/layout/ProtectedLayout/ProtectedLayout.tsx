import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { ProtectedRouteProps } from '../../router';
import ProtectedRoute from '../../router/ProtectedRoute';
function ProtectedLayout() {
  const { isUser } = useContext(AuthContext);
  const defaultProtectedRouteProps: ProtectedRouteProps = {
    isAuthenticated: Boolean(localStorage.getItem('customer_token')) && Boolean(isUser),
    authenticationPath: 'login', // not authentication is redirect path /public
    children: <Outlet />,
  };
  return (
    <div>
      <p>ProtectedLayout</p>

      <ProtectedRoute {...defaultProtectedRouteProps} />
    </div>
  );
}

export default ProtectedLayout;
