import React, { useState } from 'react';

const Woun = () => {
  const [count,setCount]=useState(0)
  return (
    <div>
      <h1>counert</h1>
      <h2>count"{count}</h2>
      <button onClick={() => setCount((prev) => (prev < 10 ? prev + 1 : prev))} >increse</button>
      <button  onClick={()=>setCount((prev)=>(prev > -5? prev+1: prev))}>decrese</button>
    </div>
  );
};

export default Woun ;