import React from "react";

interface MyInputProps {
  inputValue: string;
  onInputChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    numberConst: number
  ) => void;
}

function MyInput({ inputValue, onInputChange }: MyInputProps) {
  const numberConst = 1;
  return (
    <input
      type="text"
      value={inputValue}
      onChange={(event) => onInputChange(event, numberConst)}
    />
  );
}

function CallbackEventHandle() {
  const [text, setText] = React.useState("");

  // 1
  function handleTextChange(
    event: React.ChangeEvent<HTMLInputElement>,
    numberConst: number
  ) {
    setText(event.target.value); // 3
    console.log(numberConst);
  }
  return (
    <div>
      <MyInput inputValue={text} onInputChange={handleTextChange} />
      {text}
    </div>
  );
}

export default CallbackEventHandle;
