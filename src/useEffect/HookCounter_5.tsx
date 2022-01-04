import React, { useState, useEffect } from 'react';

function HookCounter() {
  const [count, setCount] = useState(0);

  //useEffect 的第一个入参是一个匿名函数，它会在每次 render 后调用。在第一次 render 和后续的更新 render 都会被调用
  //useEffect 写在函数式组件内，这样就可以直接拿到 props 和 state 的值，不用写 this 之类的代码。
  useEffect(() => {
    document.title = `${count} times`;
  });

  return (
    <div>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Clicked {count} times
      </button>
    </div>
  );
}

export default HookCounter;
