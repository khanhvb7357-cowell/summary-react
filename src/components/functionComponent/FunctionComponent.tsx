import React from "react";
//Override Component Function with React
function FunctionComponent() {
  const sayHello = () => console.log("Hello");

  return <Button handleClick={sayHello} />;
}

export default FunctionComponent;

interface ButtonProps {
  handleClick?: () => void;
}

const Button = ({ handleClick }: ButtonProps) => {
  const sayDefault = () => console.log("Default");

  const onClick = handleClick || sayDefault;

  return (
    <button type="button" onClick={onClick}>
      Button
    </button>
  );
};
