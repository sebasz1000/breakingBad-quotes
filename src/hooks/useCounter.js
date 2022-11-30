import { useState } from "react";

export const useCounter = (value = 1) => {
  const [counter, setCounter] = useState(value);
  const onIncrement = () => setCounter(counter + 1);
  const onDecrease = () => counter > 1 && setCounter(counter - 1);
  return {
    counter,
    onIncrement,
    onDecrease,
  };
};
