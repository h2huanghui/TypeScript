import React, { useState } from 'react';

function HookCounter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  // setCount 方法是异步的，不能立即反应并更新，瞬间调动多次入参中的 count 仍然是旧的值，没有被更新。
  const increment5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount(count + 1);
    }
  };

  return (
    <div>
      Count: {count}
      <button
        onClick={() => {
          setCount(initialCount);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {' '}
        + 1{' '}
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        {' '}
        - 1{' '}
      </button>
      <button onClick={increment5}> + 5 </button>
    </div>
  );
}

export default HookCounter;
