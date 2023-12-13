import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0); // 5 yazarsam 5'ten başlar.
  const handleClick=() => {
    setCount(count+1);
  }
  return (
  <div>
    <h2>You Clicked {count} Times</h2>
    <button onClick={handleClick} className="btn">Click Me!</button>
  </div>
  );
};

export default UseStateBasics;
