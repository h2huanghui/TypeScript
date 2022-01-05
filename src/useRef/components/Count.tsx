import React, { useState, useEffect, useRef } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);
  const preCountRef = useRef(count);
  const preCount = preCountRef.current;
  useEffect(() => {
    preCountRef.current = count;
    console.log('useEffect:', preCountRef);
  }, [count]);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment 1
      </button>
      <p>count: {count}</p>
      <p>preCount: {preCount}</p>
    </div>
  );
};

export default Count;
