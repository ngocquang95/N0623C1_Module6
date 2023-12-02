import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(10);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleDecrement} className="btn btn-danger mx-2">
        -
      </button>
      <button onClick={handleIncrement} className="btn btn-primary">
        +
      </button>
    </>
  );
}

export default Counter;
