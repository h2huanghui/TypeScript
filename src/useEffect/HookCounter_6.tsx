import React, { useState, useEffect } from 'react';

function HookCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  //useEffect 的第二个参数 [count]，这个参数是一个数组，元素是要被观察的 state 或 props，只有指定的这个变量发生变化时，才会触发 useEffect 中的第一个参数匿名函数的执行。这有利于性能的保证

  useEffect(() => {
    console.log('useEffect - update title');
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
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
