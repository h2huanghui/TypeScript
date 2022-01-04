import React, { useReducer } from 'react';

//声明 reducer, initialState
const initialState = 0;
const reducer = (state: number, action: string) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function CounterOne() {
  //useReducer 返回了一个数组，2个元素分别为 state 和 dispatch 方法
  //dispatch 方法接受一个参数，执行对应的 action
  //dispatch 执行后，对应的 state 会改变，组件会 rerender，来展示最新的状态。
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  );
}

export default CounterOne;
