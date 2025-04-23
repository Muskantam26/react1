import React, { useState } from 'react';

const Placement = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(Count => Count + 15);
  };

  const handleDecrement = () => {
    setCount(Count => Count - 15);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment by 15</button>
      <button onClick={handleDecrement} style={{ marginLeft: '10px' }}>
        Decrement by 15
      </button>
      <button onClick={handleReset} style={{ marginLeft: '10px' }}>
        Reset
      </button>
    </div>
  );
};

export default Placement;