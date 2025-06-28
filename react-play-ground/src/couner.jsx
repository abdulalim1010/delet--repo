import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0); // initial count is 0

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Counter</h1>
      <h2>Count: {count}</h2>
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setCount(count - 1)} style={{ marginRight: "10px" }}>
          Decrease
        </button>
        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>
      </div>
    </div>
  );
}
