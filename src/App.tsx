import React, { Component, Fragment, useEffect, useState } from "react";
import reactLogo from "../src/ui/assets/react.svg";
import "./App.css";
import ComponentWithRefInstanceVariable from "./ui/components/ref/TestUseRef";
import ComponentWithDomApi from "./ui/components/ref/ComponentWithDomApi";
import ComponentWithRefRead from "./ui/components/ref/ComponentWithRefRead";
import CallbackEventHandle from "./ui/components/event/CallbackEventHandle";
import HigherOrderComponent from "./ui/components/hoc/HigherOrderComponent";
import CompositionHigherOrderComponent from "./ui/components/hoc/CompositionHigherOrderComponent";
import FunctionComponent from "./ui/components/functionComponent/FunctionComponent";
import UpdateFunctionComponent from "./ui/components/functionComponent/UpdateFunctionComponent";
import PureFunctionComponent from "./ui/components/functionComponent/PureFunctionComponent";
import ConditionalRenderingComponent from "./ui/components/functionComponent/ConditionalRenderingComponent";
import { Route, Routes } from "react-router-dom";
import CustomerLayout from "./ui/layout/CustomerLayout/CustomerLayout";

function App() {
  // console.log(imgUrl);
  return (
    <Routes>
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
      <Route path="customer" element={<CustomerLayout />}>
        <Route path="post" element={<h1>post</h1>}></Route>
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
