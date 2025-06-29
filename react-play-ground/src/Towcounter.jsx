import React, { useState } from 'react';

const Towcounter = () => {

  const [count,setCount]=useState(0)
  return (
    <div>
      <h1>counter:{count}</h1>
      <button onClick={() => setCount((prev) => prev > -5 ? prev -1 : prev)}>decrese------</button>
      <button onClick={()=>setCount((prev)=>prev<10?prev+1:prev)}>increse+++++++++</button>
    </div>
  );
};

export default Towcounter;