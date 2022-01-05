import React, { useState, useMemo } from 'react';

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  // 每次state更新时，组件会rerender,isEven会被执行。需要优化，告诉React不要有不必要的计算，特别是这种计算复杂的
  // const isEven = () => {
  //   let i = 0;
  //   while (i < 100000000) i += 1;
  //   return counterOne % 2 === 0;
  // };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 100000000) i += 1;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <button onClick={incrementOne}>Count One = {counterOne}</button>
      <span>{isEven ? 'even' : 'odd'}</span>
      <br />
      <button onClick={incrementTwo}>Count Two = {counterTwo}</button>
    </div>
  );
}

export default Counter;
