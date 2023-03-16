import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { ProtectedRouteProps } from '../../router';
import ProtectedRoute from '../../router/ProtectedRoute';
function ProtectedLayout() {
  const { isUser } = useContext(AuthContext);
  const defaultProtectedRouteProps: ProtectedRouteProps = {
    isAuthenticated: isUser,
    authenticationPath: '/public/login', // not authentication is redirect path /public
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
