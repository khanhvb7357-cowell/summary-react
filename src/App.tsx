import { Component, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ComponentWithRefInstanceVariable from "./components/ref/TestUseRef";
import ComponentWithDomApi from "./components/ref/ComponentWithDomApi";
import ComponentWithRefRead from "./components/ref/ComponentWithRefRead";
import CallbackEventHandle from "./components/event/CallbackEventHandle";
import HigherOrderComponent from "./components/hoc/HigherOrderComponent";
import CompositionHigherOrderComponent from "./components/hoc/CompositionHigherOrderComponent";
import FunctionComponent from "./components/functionComponent/FunctionComponent";
import UpdateFunctionComponent from "./components/functionComponent/UpdateFunctionComponent";
import PureFunctionComponent from "./components/functionComponent/PureFunctionComponent";
import ConditionalRenderingComponent from "./components/functionComponent/ConditionalRenderingComponent";

function Kelvin({ value }: { value: any }) {
  return <div className="temp">{parseInt(value || 0) + 273.15}K</div>;
}

function Fahrenheit({ value }: { value: any }) {
  return <div className="temp">{(parseInt(value || 0) * 9) / 5 + 32}°F</div>;
}

function Input(props: any) {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Temp in °C"
      />
      {props.children(value)}
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const test = new URL("../src/assets/image1.png", import.meta.url).href;
    console.log(test);
  }, []);
  // console.log(imgUrl);
  return (
    <div className="App">
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src="./vite.svg" className="logo" alt="Vite logo" />
        </a> */}
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Input>
        {(value: string) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      </Input>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* Ref */}
      <ComponentWithRefInstanceVariable />
      <ComponentWithDomApi label={"Label"} value="Value" isFocus />
      <ComponentWithRefRead />
      {/* Event  */}
      <CallbackEventHandle />
      {/* Higher order component */}
      <HigherOrderComponent />
      <CompositionHigherOrderComponent />
      {/* function component */}
      <FunctionComponent />
      <UpdateFunctionComponent />
      <PureFunctionComponent />
      <ConditionalRenderingComponent />
    </div>
  );
}

export default App;
