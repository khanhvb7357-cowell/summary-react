import React, { useState } from "react";

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

function RenderProps() {
  return (
    <Input>
      {(value: string) => (
        <>
          <Kelvin value={value} />
          <Fahrenheit value={value} />
        </>
      )}
    </Input>
  );
}

export default RenderProps;
