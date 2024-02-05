import "./style.scss";

import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export function ProductCounter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <div className="product-counter">
      <button className="minus" onClick={decrement}>
        <MinusIcon width={20} height={20} color="#041E50" />
      </button>
      <span className="value">{count}</span>
      <button className="plus" onClick={increment}>
        <PlusIcon width={20} height={20} color="#041E50" />
      </button>
    </div>
  );
}
