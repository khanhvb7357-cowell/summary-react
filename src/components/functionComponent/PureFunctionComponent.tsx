import React, { memo, useState } from "react";

// tránh tắc nghẽn hiệu suất trong React bằng cách ngăn các trình kết xuất lại. => sử dụng memo,....
function PureFunctionComponent() {
  const [greeting, setGreeting] = useState("Hello React!");
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((currentCount) => currentCount + 1);

  const handleDecrement = () => setCount((currentCount) => currentCount - 1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setGreeting(event.target.value);

  return (
    <div>
      <input type="text" onChange={handleChange} />

      <Count count={count} />

      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
}

const Count = memo(({ count }: { count: number }) => {
  return <h1>{count}</h1>;
});

export default PureFunctionComponent;
