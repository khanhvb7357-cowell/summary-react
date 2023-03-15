import React, { useEffect, useRef } from "react";
//REACT REF AS INSTANCE VARIABLE
function ComponentWithRefInstanceVariable() {
  const [count, setCount] = React.useState(0);
  const isFirstRender = React.useRef(true);

  function onClick() {
    const newCount = count + 1;
    setCount(newCount);
  }
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      console.log(
        "I am a useEffect hook's logic which runs for a component's re-render."
      );
    }
  });

  return (
    <div>
      <p>{count}</p>

      <button type="button" onClick={onClick}>
        Increase
      </button>
    </div>
  );
}

export default ComponentWithRefInstanceVariable;
