import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
function PublicLayout() {
  const isAuth = localStorage.getItem('customer_token');

  useEffect(() => {
    if (isAuth) {
      console.log('aaaaaa', isAuth);
      <Navigate to={'/'} replace />;
    }
  });

  return (
    <div>
      PublicLayout
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default PublicLayout;
