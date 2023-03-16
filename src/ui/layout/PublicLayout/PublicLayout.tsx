import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
function PublicLayout() {
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
