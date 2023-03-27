import React, { Component, Fragment, useEffect, useState } from 'react';
import reactLogo from '../src/ui/assets/react.svg';
import './App.css';
import ComponentWithRefInstanceVariable from './ui/components/ref/TestUseRef';
import ComponentWithDomApi from './ui/components/ref/ComponentWithDomApi';
import ComponentWithRefRead from './ui/components/ref/ComponentWithRefRead';
import CallbackEventHandle from './ui/components/event/CallbackEventHandle';
import HigherOrderComponent from './ui/components/hoc/HigherOrderComponent';
import CompositionHigherOrderComponent from './ui/components/hoc/CompositionHigherOrderComponent';
import FunctionComponent from './ui/components/functionComponent/FunctionComponent';
import UpdateFunctionComponent from './ui/components/functionComponent/UpdateFunctionComponent';
import PureFunctionComponent from './ui/components/functionComponent/PureFunctionComponent';
import ConditionalRenderingComponent from './ui/components/functionComponent/ConditionalRenderingComponent';
import { Route, Routes } from 'react-router-dom';
import CustomerLayout from './ui/layout/CustomerLayout/CustomerLayout';
import Layout from './ui/layout/Layout';
import PublicLayout from './ui/layout/PublicLayout/PublicLayout';
import LoginPage from './ui/pages/LoginPage/LoginPage';
import ProtectedLayout from './ui/layout/ProtectedLayout/ProtectedLayout';
import AccountPage from './ui/pages/AccountPage/AccountPage';
import ProtectedRoute from './ui/router/ProtectedRoute';
import AccountDetailPage from './ui/pages/AccountPage/AccountDetailPage';
import BankPage from './ui/pages/BankPage/BankPage';
import RegisterPage from './ui/pages/RegisterPage/RegisterPage';

function App() {
  // console.log(imgUrl);
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* public router  */}
        <Route element={<PublicLayout />}>
          <Route
            path="/"
            element={
              <div className="App">
                <h1>Vite + React</h1>
                <div>
                  <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                  </a>
                </div>
              </div>
            }
          ></Route>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        {/* protected router  */}
        <Route element={<ProtectedLayout />}>
          <Route path="account" element={<AccountPage />}>
            <Route path=":id" element={<AccountDetailPage />} />
          </Route>
          <Route path="bank" element={<BankPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

// {/* Ref */}
// <ComponentWithRefInstanceVariable />
// <ComponentWithDomApi label={"Label"} value="Value" isFocus />
// <ComponentWithRefRead />
// {/* Event  */}
// <CallbackEventHandle />
// {/* Higher order component */}
// <HigherOrderComponent />
// <CompositionHigherOrderComponent />
// {/* function component */}
// <FunctionComponent />
// <UpdateFunctionComponent />
// <PureFunctionComponent />
// <ConditionalRenderingComponent />
