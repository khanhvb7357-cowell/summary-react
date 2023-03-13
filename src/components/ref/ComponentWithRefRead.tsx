import React, { useCallback, useEffect, useRef, useState } from "react";

// 2: REACT CALLBACK REF
// 3: REACT REF FOR READ/WRITE OPERATIONS

function ComponentWithRefRead() {
  const [text, setText] = useState("Some text...");

  // Cách 1 sử dụng ref
  //   const ref = useRef<HTMLInputElement>(null);
  //   useEffect(() => {
  //     const { width } = ref.current?.getBoundingClientRect() as DOMRect;
  //     // get kích thước và vị trí của một phần tử
  //     document.title = `Width:${width}`;
  //   }, []);

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }
  // Cách 2 sử dụng react callback ref
  const ref = useCallback(
    (node: HTMLInputElement) => {
      if (!node) return;

      const { width } = node.getBoundingClientRect();

      //document.title = `Width:${width}`;
      if (width >= 150) {
        node.style.color = "red";
      } else {
        node.style.color = "blue";
      }
    },
    [text]
  );
  return (
    <div>
      <input type="text" value={text} onChange={handleOnChange} />
      <div>
        <span ref={ref}>{text}</span>
      </div>
    </div>
  );
}

export default ComponentWithRefRead;
