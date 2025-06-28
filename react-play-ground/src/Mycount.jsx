import React, { useState } from "react";

const Mycount = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Increase & Decrease the Number</h1>

      <h2>Count: {count}</h2>

      <button
        onClick={() => setCount((prev) => (prev < 10 ? prev + 1 : prev))}
        style={{ marginRight: "10px" }}
      >
        Increase +
      </button>

      <button
        onClick={() => setCount((prev) => (prev > -5 ? prev - 1 : prev))}
      >
        Decrease -
      </button>
    </div>
  );
};

export default Mycount;
