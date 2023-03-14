// Every time incoming props or state of the component change,
//the component triggers a rerender to display the latest status quo which is often derived from the props and state.

import React, { useEffect, useState } from "react";

function UpdateFunctionComponent() {
  const initialCount: number = +localStorage.getItem("storageCount")! || 0;
  const [count, setCount] = useState<number>(initialCount);

  const handleIncrement = () => setCount((currentCount) => currentCount + 1);

  const handleDecrement = () => setCount((currentCount) => currentCount - 1);

  // So function component rerender => the count stored into the browser local storage
  useEffect(() => localStorage.setItem("storageCount", count.toString()));

  useEffect(
    () => localStorage.setItem("storageCount", count.toString()),
    [count]
  );
  // every time (no argument)
  //only on mount and unmount ([] argument)
  // only when a certain variable changes (e.g. [count] argument)

  return (
    <div>
      <h1>{count}</h1>

      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
}

export default UpdateFunctionComponent;
