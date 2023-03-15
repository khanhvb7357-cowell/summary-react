import React, { useEffect, useRef } from "react";
// REACT USEREF HOOK: DOM REFS
// sometimes you need to read values from your HTML elements,
// interact with the API of your HTML elements,
// or even have to write values to your HTML elements
interface ComponentWithDomApiProps {
  label: string;
  value: string;
  isFocus: boolean;
}
function ComponentWithDomApi({
  label,
  value,
  isFocus,
}: ComponentWithDomApiProps) {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isFocus) {
      ref?.current?.focus();
    }
  }, [isFocus]);

  return (
    <label>
      {label}: <input type="text" value={value} ref={ref} />
    </label>
  );
}

export default ComponentWithDomApi;
