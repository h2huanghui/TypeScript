import React, { useState } from 'react';

function HookCounter() {
  // const [state, setState] = useState(initialState)
  // 返回一个state，以及更新state的函数
  // 在初始渲染期间，返回的状态(state)与传入的第一个参数(initialState)值相同
  // setState函数用于更新state。它接收一个新的state值并将组件的一次重新渲染加入队列
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count {count}
      </button>
    </div>
  );
}

export default HookCounter;
